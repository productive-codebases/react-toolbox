import { useLogger } from '@/hooks/useLogger'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { usePortal } from './usePortal'

export interface IPlaceHolderPortalProps<TPlaceHolderName> {
  name: TPlaceHolderName
  debug?: boolean
  children?: React.ReactNode
}

/**
 * Retrieve an existing node having the id returned by the hook, and create
 * a container Div in order to render the portal.
 *
 * Return the portal object.
 */
function Portal<TPlaceHolderName>(
  props: IPlaceHolderPortalProps<TPlaceHolderName>
) {
  const logger = useLogger().newLogger('ReactToolBox')('components/Portal')
  const { portalUid, placeHolderPortalIds } = usePortal(props.name)

  const childNode = React.useMemo(() => document.createElement('div'), [])

  React.useEffect(() => {
    const containerNode = document.getElementById(portalUid)

    if (containerNode) {
      containerNode.appendChild(childNode)
    }

    return () => {
      if (containerNode) {
        containerNode.removeChild(childNode)
      }
    }
  }, [])

  if (props.debug) {
    logger('debug')(
      `[Portal] Portal named "${props.name}" is looking for a container with id "${portalUid}"`,
      placeHolderPortalIds
    )
  }

  return ReactDOM.createPortal(props.children, childNode)
}

export default Portal
