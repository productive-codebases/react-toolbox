/* eslint-disable @typescript-eslint/naming-convention */

import { createToolbox } from '../..'
import { createConfiguration } from '../../createConfiguration'

export type ToolboxBProviderConfiguration = typeof toolboxBProviderConfiguration

export const toolboxBProviderConfiguration = createConfiguration({
  theme: {
    toolbox: 'toolboxB'
  },
  roles: {
    'toolboxB/name': 'toolboxB/name'
  }
})

export const {
  components: ToolboxBComponents,
  hooks: toolboxBHooks,
  helpers: toolboxBHelpers
} = createToolbox('contextB', toolboxBProviderConfiguration)
