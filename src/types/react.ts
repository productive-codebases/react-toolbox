import 'react'

/**
 * Allow to use generic on React.forwardRef.
 * Credits to https://fettblog.eu/typescript-react-generic-forward-refs/
 */
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
