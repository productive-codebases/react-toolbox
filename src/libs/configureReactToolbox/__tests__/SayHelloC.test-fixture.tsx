import { toolboxCHooks, toolboxCHelpers } from './toolboxC.test-fixture'

export interface ISayHelloProps {}

export default function SayHelloC(props: ISayHelloProps) {
  const theme = toolboxCHooks.useTheme()

  const dataTestAttributeValue = toolboxCHelpers.getDataTestAttributeValue({
    role: 'toolboxC/name'
  })

  return (
    <div data-testid="SayHelloC">
      Toolbox: {theme.toolbox}
      DataTestAttributeValue: {dataTestAttributeValue}
    </div>
  )
}
