/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from '@testing-library/react'
import { forwardProps } from '../../forwardProps'
import { IForwardedProps } from '../../forwardProps/types'
import { useDataTestAttributeProp } from '../hooks'
import DataTestAttributeContextProvider from '../DataTestAttributeContextProvider'

interface IContainerProps extends IForwardedProps<HTMLDivElement> {
  children: React.ReactNode
}

describe('<Container />', () => {
  function Container(props: IContainerProps) {
    return (
      <div {...useDataTestAttributeProp()} {...forwardProps(props)}>
        {props.children}
      </div>
    )
  }

  it('should add the attr-test data attribute', async () => {
    const Component = (
      <DataTestAttributeContextProvider
        value={{
          dataTestAttribute: {
            role: 'menu/item',
            label: 'help',
            identifier: 'xxx'
          }
        }}
      >
        <Container data-testid="component">Some help</Container>
      </DataTestAttributeContextProvider>
    )

    render(Component)

    const element = await waitFor(() => screen.getByTestId('component'))

    expect(element).toHaveAttribute('data-attr-test', 'menu/item/help/xxx')
  })

  it('should add the latest attr-test data attribute', async () => {
    const Component = (
      <DataTestAttributeContextProvider
        value={{
          dataTestAttribute: {
            role: 'menu/item',
            label: 'help'
          }
        }}
      >
        <Container data-testid="component">
          <DataTestAttributeContextProvider
            value={{
              dataTestAttribute: {
                role: 'container/title',
                identifier: 'MySection'
              }
            }}
          >
            <Container data-testid="title">A title</Container>
          </DataTestAttributeContextProvider>
        </Container>
      </DataTestAttributeContextProvider>
    )

    render(Component)

    const element = await waitFor(() => screen.getByTestId('title'))

    expect(element).toHaveAttribute(
      'data-attr-test',
      'container/title/MySection'
    )
  })

  describe('Options', () => {
    describe('customAttribute', () => {
      it('should customize the attribute used for attr-test', async () => {
        function ContainerCustom(props: IContainerProps) {
          return (
            <div
              {...forwardProps(props)}
              {...useDataTestAttributeProp({
                customAttribute: 'data-my-custom-attribute'
              })}
            >
              {props.children}
            </div>
          )
        }

        const Component = (
          <DataTestAttributeContextProvider
            value={{
              dataTestAttribute: {
                role: 'menu/item',
                label: 'help'
              }
            }}
          >
            <Container data-testid="component">
              <DataTestAttributeContextProvider
                value={{
                  dataTestAttribute: {
                    role: 'container/title',
                    identifier: 'MySection'
                  }
                }}
              >
                <ContainerCustom data-testid="title">A title</ContainerCustom>
              </DataTestAttributeContextProvider>
            </Container>
          </DataTestAttributeContextProvider>
        )

        render(Component)

        const element = await waitFor(() => screen.getByTestId('title'))

        expect(element).toHaveAttribute(
          'data-my-custom-attribute',
          'container/title/MySection'
        )
      })
    })

    describe('forwardAttribute', () => {
      it('should not forward attribute by default', () => {
        const Component = (
          <DataTestAttributeContextProvider
            value={{
              dataTestAttribute: {
                role: 'table/row',
                label: 'rowId'
              }
            }}
          >
            <Container data-testid="row">
              <div>Row</div>

              <Container data-testid="cell">My row identifier</Container>
            </Container>
          </DataTestAttributeContextProvider>
        )

        render(Component)

        expect(screen.getByTestId('row')).toHaveAttribute(
          'data-attr-test',
          'table/row/rowId'
        )

        expect(screen.getByTestId('cell')).not.toHaveAttribute('data-attr-test')
      })

      it('should forward attribute', () => {
        const Component = (
          <DataTestAttributeContextProvider
            value={{
              dataTestAttribute: {
                role: 'table/row',
                label: 'rowId'
              },
              options: {
                forwardAttribute: true
              }
            }}
          >
            <Container data-testid="row">
              <div>Row</div>

              <Container data-testid="cell">My row identifier</Container>
            </Container>
          </DataTestAttributeContextProvider>
        )

        render(Component)

        expect(screen.getByTestId('row')).toHaveAttribute(
          'data-attr-test',
          'table/row/rowId'
        )

        expect(screen.getByTestId('cell')).toHaveAttribute(
          'data-attr-test',
          'table/row/rowId'
        )
      })
    })
  })
})
