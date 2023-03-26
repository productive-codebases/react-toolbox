import { useLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { IReactToolboxProviderConfiguration } from '@/types'
import { usePortalPlaceHolder } from './usePortal'

export interface PortalPlaceHolderProps<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
> extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: keyof TReactToolboxProviderConfiguration['portalNames']
  debug?: boolean
}

export function PortalPlaceHolder<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(props: PortalPlaceHolderProps<TReactToolboxProviderConfiguration>) {
  const { portalUid } = usePortalPlaceHolder(props.name)

  const logger = useLogger().newLogger('ReactToolBox')(
    'components/PortalPlaceHolder'
  )

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
