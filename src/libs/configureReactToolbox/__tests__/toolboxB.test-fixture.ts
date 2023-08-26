/* eslint-disable @typescript-eslint/naming-convention */

import { configureReactToolbox } from '..'
import { roles } from '@/libs/dataTestAttribute/roles'
import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { deepMerge } from '@productive-codebases/toolbox'

export type ToolboxBProviderConfiguration = typeof toolboxBProviderConfiguration

export const toolboxBProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: deepMerge([
    themes.default,
    {
      toolbox: 'toolboxB'
    }
  ]),
  roles: {
    ...roles,
    'toolboxB/name': 'toolboxB/name'
  },
  portalNames: {}
}

export const {
  components: ToolboxBComponents,
  hooks: toolboxBHooks,
  helpers: toolboxBHelpers
} = configureReactToolbox<ToolboxBProviderConfiguration>('contextB')
