import { createConfiguration } from '..'

describe('createConfiguration()', () => {
  it('should create a default configuration', () => {
    const defaultConfiguration = createConfiguration()

    expect(defaultConfiguration).toHaveProperty('loggerMapping')
    expect(defaultConfiguration).toHaveProperty('theme')
    expect(defaultConfiguration).toHaveProperty('roles')
    expect(defaultConfiguration).toHaveProperty('portalNames')
    expect(defaultConfiguration).toHaveProperty('loggerSetup')
  })

  it('should extends the default configuration', () => {
    const defaultConfiguration = createConfiguration({
      loggerMapping: {
        AppSample: {
          components: 'components'
        }
      },
      theme: {
        color: {
          primary: 'blue',
          secondary: 'silver'
        },
        sizes: {
          small: '5px',
          default: '10px',
          large: '15px'
        }
      },
      roles: {
        'container/modal': 'container/modal'
      },
      portalNames: {
        default: 'default',
        rightSideBar: 'rightSideBar'
      }
    })

    expect(defaultConfiguration.loggerMapping).toHaveProperty('AppSample')

    expect(defaultConfiguration.theme).toHaveProperty('color')
    expect(defaultConfiguration.theme.sizes).toHaveProperty('large')

    expect(defaultConfiguration.roles).toHaveProperty('container/modal')

    expect(defaultConfiguration.portalNames).toHaveProperty('rightSideBar')

    expect(
      defaultConfiguration.loggerSetup.loggerMapping.AppSample
    ).toHaveProperty('components')
  })
})
