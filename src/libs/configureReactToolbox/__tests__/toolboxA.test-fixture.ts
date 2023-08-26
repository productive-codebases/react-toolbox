/* eslint-disable @typescript-eslint/naming-convention */

import { configureReactToolbox } from '..'
import { roles } from '@/libs/dataTestAttribute/roles'
import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { deepMerge } from '@productive-codebases/toolbox'

export type ToolboxAProviderConfiguration = typeof toolboxAProviderConfiguration

export const toolboxAProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: deepMerge([
    themes.default,
    {
      toolbox: 'toolboxA'
    }
  ]),
  roles: {
    ...roles,
    'toolboxA/name': 'toolboxA/name'
  },
  portalNames: {}
}

export const {
  components: ToolboxAComponents,
  hooks: toolboxAHooks,
  helpers: toolboxAHelpers
} = configureReactToolbox<ToolboxAProviderConfiguration>('contextA')
