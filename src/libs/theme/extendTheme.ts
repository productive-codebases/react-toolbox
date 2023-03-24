import { deepMerge, PartialDeep } from '@productive-codebases/toolbox'

/**
 * Allow to extends a theme.
 *
 * Usage:
 *
 * const newTheme = extendTheme(defaultTheme, {
 *   ...
 * })
 */
export function extendTheme<T>(objects: [obj1: T, obj2: PartialDeep<T>]): T {
  return deepMerge(objects)
}
