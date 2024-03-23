import React, { useContext } from "react"
import { Container, interfaces } from "inversify"

type IdentifierObject = { [key: string]: interfaces.ServiceIdentifier<any> }
interface ContextValue {
  container: Container | null;
}

const InversifyContext = React.createContext<ContextValue>({ container: null });

interface InjectionProviderProps {
  container: Container;
  children?: React.ReactNode;
}

export const InjectionProvider: React.FC<InjectionProviderProps> = ({ container, children }) => {
  return (
    <InversifyContext.Provider value={{ container }}>
      {children}
    </InversifyContext.Provider>
  );
};

export const useInjection = (identifier: string) => {
  const { container } = useContext(InversifyContext)
  if (!container) {
    throw new Error("Container not initialised")
  }

  return container.get(identifier)
}

export const withInjection = (identifiers: IdentifierObject) => {
  return (Component: React.ComponentType<any>) => {
    return React.memo((props) => {
      const { container } = useContext(InversifyContext)
      if (!container) {
        throw new Error("Container not initialised")
      }
      console.log('identifiers', identifiers)
      const finalProps: Record<string, any> = { ...props }
      for (const [key, value] of Object.entries(identifiers)) {
        finalProps[key as keyof typeof props] = container.get(value)
      }

      console.log({ finalProps })
      return <Component {...finalProps} />
    })
  }
}
