import { setupLogger } from '@productive-codebases/toolbox'

export const loggerMapping = {
  ReactToolBox: {
    'components/ContainerFlex': 'components/ContainerFlex',
    'components/PortalPlaceHolder': 'components/PortalPlaceHolder',
    'components/Portal': 'components/Portal',

    'libs/useDataTestAttributeProp': 'libs/useDataTestAttributeProp'
  }
}

export const loggerSetup = setupLogger(loggerMapping)
