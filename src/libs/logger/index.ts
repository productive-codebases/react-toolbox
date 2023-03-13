import { setupLogger } from '@productive-codebases/toolbox'

const loggerMapping = {
  'react-toolbox': {
    components: 'components'
  }
}

const { newLogger } = setupLogger(loggerMapping)

export { newLogger }
