import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SayHelloA from './SayHelloA.test-fixture'
import SayHelloB from './SayHelloB.test-fixture'
import SayHelloC from './SayHelloC.test-fixture'
import {
  ToolboxAComponents,
  toolboxAProviderConfiguration
} from './toolboxA.test-fixture'
import {
  ToolboxBComponents,
  toolboxBProviderConfiguration
} from './toolboxB.test-fixture'
import {
  ToolboxCComponents,
  toolboxCProviderConfiguration
} from './toolboxC.test-fixture'

describe('configure', () => {
  it('should expose toolbox A in the context A', async () => {
    const Component = (
      <ToolboxAComponents.ProviderNamedContext
        value={toolboxAProviderConfiguration}
      >
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
      <ToolboxBComponents.ProviderNamedContext
        value={toolboxBProviderConfiguration}
      >
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
      <ToolboxCComponents.ProviderNamedContext
        value={toolboxCProviderConfiguration}
      >
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
      <ToolboxCComponents.ProviderNamedContext
        value={toolboxCProviderConfiguration}
      >
        <ToolboxAComponents.ProviderNamedContext
          value={toolboxAProviderConfiguration}
        >
          <ToolboxBComponents.ProviderNamedContext
            value={toolboxBProviderConfiguration}
          >
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
