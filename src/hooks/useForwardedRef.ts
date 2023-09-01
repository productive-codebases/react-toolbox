import React from 'react'

/**
 * Allow to use a forwardRef as a ref.
 * Credits to https://stackoverflow.com/a/73046577.
 */
export function useForwardedRef<T>(ref?: React.ForwardedRef<T>) {
  const innerRef = React.useRef<T>(null)

  React.useEffect(() => {
    if (!ref) {
      return
    }

    if (typeof ref === 'function') {
      ref(innerRef.current)
      return
    }

    ref.current = innerRef.current
  })

  return innerRef
}
