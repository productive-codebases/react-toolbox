/**
 * Add an innerRef property to props.
 * Useful as an alternative to React.forwardRef to workaround typings limitation
 * when using generics on components.
 *
 * Usage:
 * type PropsWithInnerRef = WithInnerRef<MyProps, HTMLDivElement>
 */
export type WithInnerRef<P, E> = P & { innerRef?: React.ForwardedRef<E> }
