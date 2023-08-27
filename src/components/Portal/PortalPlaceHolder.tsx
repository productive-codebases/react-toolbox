import { configureUseLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { INamedContext } from '@/libs/namedContext/types'
import { IProviderValue, IProviderConfiguration } from '@/types'
import { usePortalPlaceHolder } from './usePortal'

export interface IPortalPlaceHolderProps<
  TReactToolboxProviderConfiguration extends IProviderConfiguration
> extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: keyof TReactToolboxProviderConfiguration['portalNames']
  debug?: boolean
}

export function configurePortalPlaceHolder<
  TReactToolboxProviderConfiguration extends IProviderConfiguration
>(
  namedContext: INamedContext<
    IProviderValue<TReactToolboxProviderConfiguration>
  >
) {
  return function PortalPlaceHolder(
    props: IPortalPlaceHolderProps<TReactToolboxProviderConfiguration>
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
