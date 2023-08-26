/* eslint-disable @typescript-eslint/naming-convention */

import { configureReactToolbox } from '..'
import { roles } from '@/libs/dataTestAttribute/roles'
import { appSetupLogger } from '@/SampleApp/libs/logger'
import { themes } from '@/styles/themes'
import { deepMerge } from '@productive-codebases/toolbox'

export type ToolboxCProviderConfiguration = typeof toolboxCProviderConfiguration

export const toolboxCProviderConfiguration = {
  loggerSetup: appSetupLogger,
  theme: deepMerge([
    themes.default,
    {
      toolbox: 'toolboxC'
    }
  ]),
  roles: {
    ...roles,
    'toolboxC/name': 'toolboxC/name'
  },
  portalNames: {}
}

export const {
  components: ToolboxCComponents,
  hooks: toolboxCHooks,
  helpers: toolboxCHelpers
} = configureReactToolbox<ToolboxCProviderConfiguration>('contextC')
