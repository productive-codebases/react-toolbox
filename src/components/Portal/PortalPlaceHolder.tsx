import { configureUseLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { INamedContext } from '@/libs/namedContext/types'
import { IProviderValue, IConfiguration } from '@/types'
import { usePortalPlaceHolder } from './usePortal'

export interface IPortalPlaceHolderProps<TConfiguration extends IConfiguration>
  extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: keyof TConfiguration['portalNames']
  debug?: boolean
}

export function configurePortalPlaceHolder<
  TConfiguration extends IConfiguration
>(namedContext: INamedContext<IProviderValue<TConfiguration>>) {
  return function PortalPlaceHolder(
    props: IPortalPlaceHolderProps<TConfiguration>
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
