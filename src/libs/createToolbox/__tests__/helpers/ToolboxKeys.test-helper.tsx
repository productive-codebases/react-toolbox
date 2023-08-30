import { IConfiguration, Toolbox } from '@/types'

export interface IContainerUsingToolboxProps<
  TConfiguration extends IConfiguration
> {
  toolbox: Toolbox<TConfiguration>
}

/**
 * Component displaying the keys of a toolbox for testing purposes.
 */
export default function ToolboxKeys<TConfiguration extends IConfiguration>(
  props: IContainerUsingToolboxProps<TConfiguration>
) {
  const contextValue = props.toolbox.hooks.useNamedContext()

  return (
    <div data-testid="ToolboxKeys">
      Context values keys: {Object.keys(contextValue).join(', ')}
    </div>
  )
}
