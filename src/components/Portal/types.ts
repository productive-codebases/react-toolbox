export type PortalUid = string

export type PlaceHolderIds<TPlaceHolderName> = Map<
  TPlaceHolderName,
  Set<string>
>

export interface IPlaceHolder<TPlaceHolderName> {
  portalUid: PortalUid
  placeHolderPortalIds: PlaceHolderIds<TPlaceHolderName>
}
