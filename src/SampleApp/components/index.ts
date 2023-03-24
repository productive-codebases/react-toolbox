import { configureReactToolbox } from '@/configureReactToolbox'
import { AppProviderConfiguration } from '../providerConfiguration'

export const { components: ReactToolboxComponents, hooks: reactToolboxHooks } =
  configureReactToolbox<AppProviderConfiguration>()
