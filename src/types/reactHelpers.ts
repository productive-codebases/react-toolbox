/**
 * Add a react.ref prop to P props.
 * Useful when using react.forwardRef.
 *
 * Usage:
 * WithRef<MyProps, HTMLDivElement>
 */
export type WithRef<P, E> = P & { ref?: React.ForwardedRef<E> }
