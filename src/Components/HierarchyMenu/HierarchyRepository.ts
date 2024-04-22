import { z } from "zod";
import { makeObservable, observable, action, runInAction } from "mobx";
import { injectable, inject } from "inversify";
import { Types } from "../../Core/Types";
import { HttpGateway } from "../../Core/HttpGateway";
import { addSpacesToPascalCase, getAndCheckValidation, getWordAfterLastHash } from "../../helpers";
import { HierarchyClass, HierarchyResponseSchema } from "../../rdfInstanceViewer/Types";
import { MenuItem } from "./HierarchyMenu";
import { HIERARCHY_QUERY, rootHierarchyUri } from "../../constants";

export const getAndCheckHierarchyResponse = (data: unknown): z.infer<typeof HierarchyResponseSchema> =>
  getAndCheckValidation<z.infer<typeof HierarchyResponseSchema>>(data, HierarchyResponseSchema)

@injectable()
export class HierarchyRepository {
  public dataGateway
  hierarchyPm: MenuItem | null = null;

  constructor(@inject(Types.IDataGateway) dataGateway: HttpGateway) {
    this.dataGateway = dataGateway
    makeObservable(this, {
      hierarchyPm: observable,
      reset: action
    })
    this.reset()
  }

  reset = () => {
    this.hierarchyPm = {
      id: "none",
      label: "",
      tooltip: "",
      type: "",
      children: [],
      name: ""
    }
  }

  async loadHierarchy() {
    // load hierarchy

    try {
      const statements = await this.dataGateway.get<z.infer<typeof HierarchyResponseSchema>>(HIERARCHY_QUERY, getAndCheckHierarchyResponse)

      const getOrCreateHierarchy = (
        hierarchy: Record<string, HierarchyClass>,
        key: string
      ) => {
        if (!(key in hierarchy)) {
          hierarchy[key] = {
            subClasses: [],
            types: [],
            comments: [],
            labels: [],
            keys: [],
          };
        }
        return hierarchy[key];
      };

      const response = statements.reduce(
        (acc: Record<string, HierarchyClass>, item) => {
          const hierarchy = { ...acc };

          const sub = getOrCreateHierarchy(hierarchy, item.sub.value);
          const superObj = getOrCreateHierarchy(hierarchy, item.super.value);

          if (!superObj.subClasses.includes(item.sub.value))
            superObj.subClasses.push(item.sub.value);
          if (item.subType && !sub.types.includes(item.subType.value))
            sub.types.push(item.subType.value);
          if (item.subComment && !sub.comments.includes(item.subComment.value))
            sub.comments.push(item.subComment.value);
          if (item.subLabel && !sub.labels.includes(item.subLabel.value))
            sub.labels.push(item.subLabel.value);

          return hierarchy;
        },
        {} as Record<string, HierarchyClass>
      );

      const createMenuItem = (uri: string): MenuItem => ({
        id: uri,
        name: uri,
        label: response[uri].labels[0] ?? addSpacesToPascalCase(getWordAfterLastHash(uri)),
        type: response[uri].types[0],
        tooltip: response[uri].comments[0],
        children: response[uri].subClasses.map(createMenuItem)
      })

      const hierarchy = createMenuItem(rootHierarchyUri)

      runInAction(() => {
        this.hierarchyPm = hierarchy
      })
    } catch (err) {
      console.error(err);
    }
  }
}
