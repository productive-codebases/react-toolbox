import { configureUseLogger } from '@/hooks/useLogger'
import { IReactToolboxProviderConfiguration } from '@/types'
import { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from './usePortal'

export interface IPlaceHolderPortalProps<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
> {
  name: keyof TReactToolboxProviderConfiguration['portalNames']
  debug?: boolean
  children?: React.ReactNode
}

/**
 * Retrieve an existing node having the id returned by the hook, and create
 * a container Div in order to render the portal.
 *
 * Return the portal object.
 */
export function configurePortal<
  TReactToolboxProviderConfiguration extends IReactToolboxProviderConfiguration
>(contextName: string) {
  return function Portal(
    props: IPlaceHolderPortalProps<TReactToolboxProviderConfiguration>
  ) {
    const useLogger = configureUseLogger(contextName)
    const logger = useLogger().newLogger('ReactToolBox')('components/Portal')

    const { portalUid, placeHolderPortalIds } = usePortal(props.name)

    const childNode = useMemo(() => document.createElement('div'), [])

    useEffect(() => {
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
        `[Portal] Portal named "${String(
          props.name
        )}" is looking for a container with id "${portalUid}"`,
        placeHolderPortalIds
      )
    }

    return createPortal(props.children, childNode)
  }
}
