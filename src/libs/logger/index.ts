import { setupLogger } from '@productive-codebases/toolbox'

const loggerMapping = {
  components: {
    ContainerFlex: 'ContainerFlex'
  }
}

const { newLogger } = setupLogger(loggerMapping)

export { newLogger }
