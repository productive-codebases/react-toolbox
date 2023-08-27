import { configure } from '..'
import { createConfiguration } from '../defaultConfiguration'
/* eslint-disable @typescript-eslint/naming-convention */

export type ToolboxAProviderConfiguration = typeof toolboxAProviderConfiguration

export const toolboxAProviderConfiguration = createConfiguration({
  theme: {
    toolbox: 'toolboxA'
  },
  roles: {
    'toolboxA/name': 'toolboxA/name'
  }
})

export const {
  components: ToolboxAComponents,
  hooks: toolboxAHooks,
  helpers: toolboxAHelpers
} = configure<ToolboxAProviderConfiguration>('contextA')
