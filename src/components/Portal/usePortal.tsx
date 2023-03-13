import {
  addSetValueToMap,
  removeSetValueToMap
} from '@productive-codebases/toolbox'
import * as React from 'react'
import { IPlaceHolder, PlaceHolderIds } from './types'

const placeHolderPortalIds: PlaceHolderIds<string> = new Map()

let uniqueId = 0
const getUniqueId = () => uniqueId++

export function useComponentId(prefix: string) {
  const idRef = React.useRef(getUniqueId())
  return [prefix, idRef.current].join('/')
}

/**
 * Return the PortalUid to be used in a PlaceHolder component.
 */
export function usePortalPlaceHolder<TPlaceHolderName>(
  placeHolderName: TPlaceHolderName
): IPlaceHolder<TPlaceHolderName> {
  const placeHolderUid = useComponentId('PortalPlaceHolder')

  const placeHolderPortalIds_ =
    placeHolderPortalIds as PlaceHolderIds<TPlaceHolderName>

  const portalUid = React.useMemo(() => {
    addSetValueToMap(placeHolderPortalIds_, placeHolderName, placeHolderUid)

    return placeHolderUid
  }, [])

  React.useEffect(() => {
    return () =>
      removeSetValueToMap(placeHolderPortalIds_, placeHolderName, portalUid)
  }, [])

  return { portalUid, placeHolderPortalIds: placeHolderPortalIds_ }
}

/**
 * Return the PortalUid to be used in a Portal component.
 */
export function usePortal<TPlaceHolderName>(
  placeHolderName: TPlaceHolderName
): IPlaceHolder<TPlaceHolderName> {
  const placeHolderPortalIds_ =
    placeHolderPortalIds as PlaceHolderIds<TPlaceHolderName>

  const portalUid = React.useMemo(() => {
    const idsSet = placeHolderPortalIds_.get(placeHolderName)
    return idsSet && Array.from(idsSet.values()).pop()
  }, [])

  if (!portalUid) {
    // if PlaceHolder are present and rendered before the Portal,
    // but this should be never the case
    return {
      portalUid: 'portal-uid-not-found',
      placeHolderPortalIds: placeHolderPortalIds_
    }
  }

  return { portalUid, placeHolderPortalIds: placeHolderPortalIds_ }
}
