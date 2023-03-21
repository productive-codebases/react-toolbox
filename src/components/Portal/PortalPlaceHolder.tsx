import { useLogger } from '@/hooks/useLogger'
import { forwardProps } from '@/libs/forwardProps'
import { IForwardedProps, ReactHTMLAttributes } from '@/libs/forwardProps/types'
import { IProviderConfiguration } from '../ReactToolboxProvider/types'
import { usePortalPlaceHolder } from './usePortal'

export interface PortalPlaceHolderProps<
  TProviderConfiguration extends IProviderConfiguration
> extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: keyof TProviderConfiguration['portalNames']
  debug?: boolean
}

export function PortalPlaceHolder<
  TProviderConfiguration extends IProviderConfiguration
>(props: PortalPlaceHolderProps<TProviderConfiguration>) {
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
