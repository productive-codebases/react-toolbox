import { setupLogger } from '@productive-codebases/toolbox'

export const defaultLoggerMapping = {
  ReactToolBox: {
    'components/ContainerFlex': 'components/ContainerFlex',
    'components/PortalPlaceHolder': 'components/PortalPlaceHolder',
    'components/Portal': 'components/Portal',

    'libs/useDataTestAttributeProp': 'libs/useDataTestAttributeProp'
  }
}

export const defaultSetupLogger = setupLogger(defaultLoggerMapping)
