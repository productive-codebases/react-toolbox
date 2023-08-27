# React Toolbox

A set of React components and helpers for productive codebases.

## Installation

```
npm i @productive-codebases/react-toolbox --save
```

## Getting started

### Create a new configuration

The library offers configurable components and helpers through TypeScript generics, enabling comprehensive and precise type definitions. To achieve this, you need to "configure" the toolbox. The structure of the toolbox interface is defined by `IReactToolboxConfigurationParameters`:

```ts
export interface IReactToolboxConfigurationParameters<
  TLoggerMapping = LoggerMapping,
  TTheme = Theme,
  TRoles = Roles,
  TPortalNames = PortalNames
> {
  loggerMapping: TLoggerMapping
  theme: TTheme
  roles: TRoles
  portalNames: TPortalNames
}
```

The toolbox encompasses a range of features such as logger namespaces, themes, roles (utilized for end-to-end testing or accessibility situations), namespaces for (React) portals, and more. It's possible to expand upon each configurable parameter with your custom values by generating a new configuration:

```ts
import { createConfiguration } from '@productive-codebases/react-toolbox'

const appConfiguration = createConfiguration({
  loggerMapping: {
    AppSample: {
      components: 'components'
    }
  },
  theme: {
    color: {
      red: 'red',
      blue: 'blue'
    },
    sizes: {
      small: '5px',
      default: '10px',
      large: '15px'
    }
  },
  roles: {
    customContainer: 'customContainer'
  },
  portalNames: {
    default: 'default',
    rightSideBar: 'rightSideBar'
  }
})
```

```ts
const toolbox = configure('app', appConfiguration)
```

### Destructure for easier imports

The toolbox comprises numerous elements, and a more effective approach to make its contents accessible within your application involves customizing variables for simplified imports:

```ts
// myapp/libs/reactToolbox.ts

export const {
  components: {
    ProviderNamedContext: ProviderApp,
    ContainerFlex,
    Portal,
    PortalPlaceHolder
  },
  hooks: {
    useNamedContext: useAppContext,
    useLogger: useAppLogger,
    useTheme: useAppTheme
  },
  helpers: {
    getDataTestAttributeProp: getAppDataTestAttributeProp,
    getDataTestAttributeValue: getAppDataTestAttributeValue
  }
} = configure('app', appConfiguration)
```

You can now effortlessly import anything in a manner similar to:

```ts
import { useAppContext } from '@/myapp/libs/reactToolbox'
```

## Exposed tooling

WIP
