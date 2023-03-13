import { useLogger } from 'src/hooks/useLogger'
import { forwardProps } from 'src/libs/forwardProps'
import {
  IForwardedProps,
  ReactHTMLAttributes
} from 'src/libs/forwardProps/types'
import { usePortalPlaceHolder } from './usePortal'

interface IPortalPlaceHolderProps<TPlaceHolderName>
  extends IForwardedProps<ReactHTMLAttributes<HTMLDivElement>> {
  name: TPlaceHolderName
  debug?: boolean
}

function PortalPlaceHolder<TPlaceHolderName>(
  props: IPortalPlaceHolderProps<TPlaceHolderName>
) {
  const { portalUid } = usePortalPlaceHolder(props.name)
  const logger = useLogger()

  if (props.debug) {
    logger('debug')(
      `[PortalPlaceHolder] Render a new placeholder with id "${portalUid}"`
    )
  }

  return (
    <div
      data-attr-name={`PortalPlaceHolder-${props.name}`}
      id={portalUid}
      {...forwardProps(props)}
    />
  )
}

export default PortalPlaceHolder
