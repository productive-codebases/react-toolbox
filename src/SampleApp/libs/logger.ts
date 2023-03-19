import { defaultLoggerMapping } from '@/libs/logger'
import { deepMerge, setupLogger } from '@productive-codebases/toolbox'

// TODO Add a function to extends logger namespaces instead of having to use deepMerge...
const appLoggerMapping = deepMerge([
  defaultLoggerMapping,
  {
    SampleApp: {
      components: 'components'
    }
  }
])

export const appSetupLogger = setupLogger(appLoggerMapping)
