import { toolboxBHooks, toolboxBHelpers } from './toolboxB.test-helper'

export interface ISayHelloProps {}

export default function SayHelloB(props: ISayHelloProps) {
  const theme = toolboxBHooks.useTheme()

  const dataTestAttributeValue = toolboxBHelpers.getDataTestAttributeValue({
    role: 'toolboxB/name'
  })

  return (
    <div data-testid="SayHelloB">
      Toolbox: {theme.toolbox}
      DataTestAttributeValue: {dataTestAttributeValue}
    </div>
  )
}
