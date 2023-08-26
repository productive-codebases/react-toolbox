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

describe('configureReactToolbox', () => {
  it('should expose toolbox A in the context A', async () => {
    const Component = (
      <ToolboxAComponents.ReactToolboxProvider
        configuration={toolboxAProviderConfiguration}
      >
        <SayHelloA />
      </ToolboxAComponents.ReactToolboxProvider>
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
      <ToolboxBComponents.ReactToolboxProvider
        configuration={toolboxBProviderConfiguration}
      >
        <SayHelloB />
      </ToolboxBComponents.ReactToolboxProvider>
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
      <ToolboxCComponents.ReactToolboxProvider
        configuration={toolboxCProviderConfiguration}
      >
        <SayHelloC />
      </ToolboxCComponents.ReactToolboxProvider>
    )

    render(Component)

    expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
      'Toolbox: toolboxC'
    )

    expect(screen.getByTestId('SayHelloC')).toHaveTextContent(
      'DataTestAttributeValue: toolboxC/name'
    )
  })

  it('should expose all toolboxes when used in all contextes', async () => {
    const Component = (
      <ToolboxCComponents.ReactToolboxProvider
        configuration={toolboxCProviderConfiguration}
      >
        <ToolboxAComponents.ReactToolboxProvider
          configuration={toolboxAProviderConfiguration}
        >
          <ToolboxBComponents.ReactToolboxProvider
            configuration={toolboxBProviderConfiguration}
          >
            <SayHelloA />
            <SayHelloB />
            <SayHelloC />
          </ToolboxBComponents.ReactToolboxProvider>
        </ToolboxAComponents.ReactToolboxProvider>
      </ToolboxCComponents.ReactToolboxProvider>
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
