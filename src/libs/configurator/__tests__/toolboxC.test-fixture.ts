import { configure } from '..'
import { createConfiguration } from '../defaultConfiguration'
/* eslint-disable @typescript-eslint/naming-convention */

export type ToolboxCProviderConfiguration = typeof toolboxCProviderConfiguration

export const toolboxCProviderConfiguration = createConfiguration({
  theme: {
    toolbox: 'toolboxC'
  },
  roles: {
    'toolboxC/name': 'toolboxC/name'
  }
})

export const {
  components: ToolboxCComponents,
  hooks: toolboxCHooks,
  helpers: toolboxCHelpers
} = configure<ToolboxCProviderConfiguration>('contextC')
