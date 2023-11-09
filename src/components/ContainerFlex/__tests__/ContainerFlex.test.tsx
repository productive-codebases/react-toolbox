import { createToolbox } from '@/libs/createToolbox'
import { createConfiguration } from '@/libs/createToolbox/createConfiguration'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('ContainerFlex', () => {
  it('should render children', async () => {
    const configuration = createConfiguration()
    const toolbox = createToolbox('app', configuration)

    const App = (
      <toolbox.components.Provider>
        <toolbox.components.ContainerFlex
          data-testid="ContainerFlex"
          name="ContainerFlex"
        >
          <div>one</div>
          <div>two</div>
          <div>three</div>
        </toolbox.components.ContainerFlex>
      </toolbox.components.Provider>
    )

    render(App)

    expect(screen.getByTestId('ContainerFlex')).toHaveTextContent('one')
    expect(screen.getByTestId('ContainerFlex')).toHaveTextContent('two')
    expect(screen.getByTestId('ContainerFlex')).toHaveTextContent('three')
  })
})
