import { toolboxAHooks, toolboxAHelpers } from './toolboxA.test-fixture'

export interface ISayHelloProps {}

export default function SayHelloA(props: ISayHelloProps) {
  const theme = toolboxAHooks.useTheme()

  const dataTestAttributeValue = toolboxAHelpers.getDataTestAttributeValue({
    role: 'toolboxA/name'
  })

  return (
    <div data-testid="SayHelloA">
      Toolbox: {theme.toolbox}
      DataTestAttributeValue: {dataTestAttributeValue}
    </div>
  )
}
