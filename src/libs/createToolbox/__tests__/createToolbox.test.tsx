import { createToolbox } from '..'
import { Toolbox } from '@/types'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createConfiguration } from '../createConfiguration'
import SayHelloA from './helpers/SayHelloA.test-helper'
import SayHelloB from './helpers/SayHelloB.test-helper'
import SayHelloC from './helpers/SayHelloC.test-helper'
import { ToolboxAComponents } from './helpers/toolboxA.test-helper'
import { ToolboxBComponents } from './helpers/toolboxB.test-helper'
import { ToolboxCComponents } from './helpers/toolboxC.test-helper'

describe('createToolbox', () => {
  describe('Toolbox creation', () => {
    it('should create a toolbox', async () => {
      const myConfiguration = {
        theme: {
          toolbox: 'toolboxA'
        },
        roles: {
          'toolboxA/name': 'toolboxA/name'
        }
      }

      const configuration = createConfiguration(myConfiguration)
      const toolbox = createToolbox('app', configuration)

      expect(toolbox.name).toBe('app')
      expect(toolbox.configuration).toMatchObject(myConfiguration)

      expect(toolbox).toHaveProperty('components')
      expect(toolbox).toHaveProperty('hooks')
      expect(toolbox).toHaveProperty('helpers')
    })
  })

  describe('Configuration extendability', () => {
    class StoreA {
      sayHello() {
        return 'sayHello'
      }
    }

    const configuration = createConfiguration({
      loggerMapping: {
        toolboxA: {
          components: 'components'
        }
      },
      theme: {
        toolbox: 'toolboxA'
      },
      roles: {
        'toolboxA/name': 'toolboxA/name'
      },
      portalNames: {
        toolboxPanel: 'toolboxPanel'
      },
      storeA: new StoreA()
    })

    let toolbox: Toolbox<typeof configuration>

    beforeEach(() => {
      toolbox = createToolbox('app', configuration)
    })

    it('should allow to extends the loggerMapping configuration', async () => {
      expect.assertions(2)

      function Expectations() {
        expect(
          toolbox.hooks.useNamedContext().loggerMapping.toolboxA.components
        ).toBe('components')

        expect(
          toolbox.hooks.useLogger().newLogger('toolboxA')('components')('info')
        ).toBeDefined()

        return <div>Empty</div>
      }

      const Component = (
        <toolbox.components.ProviderNamedContext>
          <Expectations />
        </toolbox.components.ProviderNamedContext>
      )

      render(Component)
    })

    it('should allow to extends the theme configuration', async () => {
      expect.assertions(2)

      function Expectations() {
        expect(toolbox.hooks.useNamedContext().theme.toolbox).toBe('toolboxA')

        expect(toolbox.hooks.useTheme().toolbox).toBe('toolboxA')

        return <div>Empty</div>
      }

      const Component = (
        <toolbox.components.ProviderNamedContext>
          <Expectations />
        </toolbox.components.ProviderNamedContext>
      )

      render(Component)
    })

    it('should allow to extends the roles configuration', async () => {
      expect.assertions(2)

      function Expectations() {
        expect(toolbox.hooks.useNamedContext().roles['toolboxA/name']).toBe(
          'toolboxA/name'
        )

        expect(
          toolbox.helpers.getDataTestAttributeProp({
            role: 'toolboxA/name'
          })
        ).toEqual({ 'data-attr-test': 'toolboxA/name' })

        return <div>Empty</div>
      }

      const Component = (
        <toolbox.components.ProviderNamedContext>
          <Expectations />
        </toolbox.components.ProviderNamedContext>
      )

      render(Component)
    })

    it('should allow to extends the portalNames configuration', async () => {
      expect.assertions(1)

      function Expectations() {
        expect(toolbox.hooks.useNamedContext().portalNames.toolboxPanel).toBe(
          'toolboxPanel'
        )

        return <toolbox.components.PortalPlaceHolder name="toolboxPanel" />
      }

      const Component = (
        <toolbox.components.ProviderNamedContext>
          <Expectations />
        </toolbox.components.ProviderNamedContext>
      )

      render(Component)
    })

    it('should allow to extends the configuration', async () => {
      expect.assertions(1)

      function Expectations() {
        expect(toolbox.hooks.useNamedContext().storeA).toBeInstanceOf(StoreA)

        return <div>Empty</div>
      }

      const Component = (
        <toolbox.components.ProviderNamedContext>
          <Expectations />
        </toolbox.components.ProviderNamedContext>
      )

      render(Component)
    })
  })

  describe('Context scoping', () => {
    it('should expose toolbox A in the context A', async () => {
      const Component = (
        <ToolboxAComponents.ProviderNamedContext>
          <SayHelloA />
        </ToolboxAComponents.ProviderNamedContext>
      )

      render(Component)

      expect(screen.getByTestId('SayHelloA')).toHaveTextContent(
        'Toolbox: toolboxA'
      )

      expect(screen.getByTestId('SayHelloA')).toHaveTextContent(
        'DataTestAttributeValue: toolboxA/name'
      )
    })

    it('should expose toolbox B in the context B', async () => {
      const Component = (
        <ToolboxBComponents.ProviderNamedContext>
          <SayHelloB />
        </ToolboxBComponents.ProviderNamedContext>
      )

      render(Component)

      expect(screen.getByTestId('SayHelloB')).toHaveTextContent(
        'Toolbox: toolboxB'
      )

      expect(screen.getByTestId('SayHelloB')).toHaveTextContent(
        'DataTestAttributeValue: toolboxB/name'
      )
    })

    it('should expose toolbox C in the context C', async () => {
      const Component = (
        <ToolboxCComponents.ProviderNamedContext>
          <SayHelloC />
        </ToolboxCComponents.ProviderNamedContext>
      )

      render(Component)

      expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
        'Toolbox: toolboxC'
      )

      expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
        'DataTestAttributeValue: toolboxC/name'
      )
    })

    it('should expose all toolboxes when used in all contexts', async () => {
      const Component = (
        <ToolboxCComponents.ProviderNamedContext>
          <ToolboxAComponents.ProviderNamedContext>
            <ToolboxBComponents.ProviderNamedContext>
              <SayHelloA />
              <SayHelloB />
              <SayHelloC />
            </ToolboxBComponents.ProviderNamedContext>
          </ToolboxAComponents.ProviderNamedContext>
        </ToolboxCComponents.ProviderNamedContext>
      )

      render(Component)

      // A
      expect(screen.getByTestId('SayHelloA')).toHaveTextContent(
        'Toolbox: toolboxA'
      )
      expect(screen.getByTestId('SayHelloA')).toHaveTextContent(
        'DataTestAttributeValue: toolboxA/name'
      )

      // B
      expect(screen.getByTestId('SayHelloB')).toHaveTextContent(
        'Toolbox: toolboxB'
      )
      expect(screen.getByTestId('SayHelloB')).toHaveTextContent(
        'DataTestAttributeValue: toolboxB/name'
      )

      // C
      expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
        'Toolbox: toolboxC'
      )
      expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
        'DataTestAttributeValue: toolboxC/name'
      )
    })
  })
})
