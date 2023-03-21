import { configureReactToolboxHooks } from '@/hooks/configureReactToolboxHooks'
import { AppProviderConfiguration } from '../providerConfiguration'

export const reactToolboxHooks =
  configureReactToolboxHooks<AppProviderConfiguration>()
