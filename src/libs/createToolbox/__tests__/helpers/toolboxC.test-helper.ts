/* eslint-disable @typescript-eslint/naming-convention */

import { createToolbox } from '../..'
import { createConfiguration } from '../../createConfiguration'

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
} = createToolbox('contextC', toolboxCProviderConfiguration)
