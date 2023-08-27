import { configureUseLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { INamedContext } from '@/libs/namedContext/types'
import { IProviderValue, IReactToolboxConfigurationParameters } from '@/types'
import { usePortalPlaceHolder } from './usePortal'

export interface IPortalPlaceHolderProps<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
> extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: keyof TReactToolboxConfiguration['portalNames']
  debug?: boolean
}

export function configurePortalPlaceHolder<
  TReactToolboxConfiguration extends IReactToolboxConfigurationParameters
>(namedContext: INamedContext<IProviderValue<TReactToolboxConfiguration>>) {
  return function PortalPlaceHolder(
    props: IPortalPlaceHolderProps<TReactToolboxConfiguration>
  ) {
    const useLogger = configureUseLogger(namedContext)
    const logger = useLogger().newLogger('ReactToolBox')(
      'components/PortalPlaceHolder'
    )

    const { portalUid } = usePortalPlaceHolder(props.name)

    if (props.debug) {
      logger('debug')(
        `[PortalPlaceHolder] Render a new placeholder with id "${portalUid}"`
      )
    }

    return (
      <div
        data-attr-name={`PortalPlaceHolder-${String(props.name)}`}
        id={portalUid}
        {...forwardProps(props)}
      />
    )
  }
}
