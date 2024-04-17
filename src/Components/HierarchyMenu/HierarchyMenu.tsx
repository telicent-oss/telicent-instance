// .tsx
import React, { useEffect, useState } from 'react';
import CompactMenu from './CompactMenu';
import { withInjection } from '../../Core/Providers/injection';
import { observer } from 'mobx-react';
import { HierarchyPresenter } from './HierarchyPresenter'
import { HierarchyProps } from '../../types';
import classNames from 'classnames';
import { getWordAfterLastHash, pascalToKebab } from '../../helpers';
import '../../lib/CustomNode/custom-node.css'


export interface MenuItem {
  id: string;
  name: string;
  label: string;
  type: string;
  tooltip: string;
  children: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  level?: number;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const paddingLeft = 20 * level; // Adjust the padding for indentation

  return (
    <li className='text-left'>
      <div
        className={`p-2 pl-${paddingLeft} flex gap-x-4 items-center`}
        onClick={toggleExpand}
      >
        {item.children?.length > 0 && <i className={classNames("fa-solid fa-chevron-right ease-in-out duration-200", {
          "transform: rotate-90": isExpanded,
          "transform: rotate-0": !isExpanded
        })} />}
        <div className={classNames("cursor-grab focus:cursor-grabbing flex items-center gap-x-1", {
          "pl-7": item.children?.length === 0
        })}>
          <i className={classNames("fa-solid fa-grip-vertical",
          )} />
          <span className={`${pascalToKebab(getWordAfterLastHash(item.name))} hover:font-bold`}>{item.label}</span></div>
      </div>
      {isExpanded && item.children && (
        <ul className="ml-4">
          {item.children.map((child) => (
            <MenuItemComponent key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu: React.FC<{ item: MenuItem }> = ({ item }) => {
  if (!item.children) return null
  return (
    <ul>
      {item.children.map((item) => (
        <MenuItemComponent key={item.id} item={item} />
      ))}
    </ul>
  );
};

const HierarchyMenuComponent: React.FC<HierarchyProps> = observer((props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [menu, setMenu] = useState<MenuItem | null>(null)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!props.presenter) {
      console.warn("No presenter found")
      return
    }
    props.presenter.hierarchyRepository.loadHierarchy()
    console.log(props.presenter)
  }, [])

  useEffect(() => {
    if (!props.presenter.viewModel.hasHierarchy) return
    setMenu(props.presenter.viewModel.hierarchy)
  }, [props.presenter.viewModel.hierarchy, props.presenter.viewModel.hasHierarchy])

  return (
    <>
      <CompactMenu isOpen={isOpen} onClose={toggle} />
      <div className={`side-drawer absolute inset-y-0 left-0 w-1/6 bg-black-100 transform drop-shadow-xl shadow-black-500 transition-transform ease-in-out z-20 duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <div className="side-drawer-content p-4">
          {menu && <Menu item={menu} />}
        </div>
      </div>
    </>
  );
});

export const HierarchyMenu = withInjection({ presenter: HierarchyPresenter })(HierarchyMenuComponent);

