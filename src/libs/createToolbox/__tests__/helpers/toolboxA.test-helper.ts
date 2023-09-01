/* eslint-disable @typescript-eslint/naming-convention */

import { createToolbox } from '../..'
import { createConfiguration } from '../../createConfiguration'

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
} = createToolbox('contextA', toolboxAProviderConfiguration)
