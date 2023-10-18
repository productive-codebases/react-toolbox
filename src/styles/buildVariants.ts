import { CSSObject } from '@emotion/styled'
import { newBuildVariants } from '@productive-codebases/build-variants'

/**
 * Create a BuildVariants instance.
 */
export function buildVariants<TProps extends object>(props: TProps) {
  return newBuildVariants<TProps, CSSObject>(props)
}
