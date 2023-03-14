import {
  deepMerge,
  ensureArray,
  isTruthy,
  Perhaps
} from '@productive-codebases/toolbox'
import { useContext, useMemo } from 'react'
import { useLogger } from 'src/hooks/useLogger'
import { DATA_TEST_ATTRIBUTE } from '../forwardProps/constants'
import { filterNullOrUndefinedValues } from '../forwardProps/filterNullOrUndefinedValues'
import DataTestAttributeContext from './DataTestAttributeContext'
import {
  DataTestAttribute,
  DataTestAttributeProp,
  IDataTestAttributeOptions
} from './type'

/**
 * Return the dataTestAttribute value used for accessibility and e2e testing.
 */
export function getDataTestAttributeValue(
  dataTestAttribute?: DataTestAttribute
): string {
  if (!dataTestAttribute) {
    return ''
  }

  return (
    [
      ...ensureArray(dataTestAttribute.role),
      dataTestAttribute.label ?? '',
      dataTestAttribute.identifier ?? ''
    ]
      .filter(isTruthy)
      .join('/') || ''
  )
}

/**
 * Return the prop from the dataTestAttribute structure.
 */
export function getDataTestAttributeProp(
  dataTestAttribute: Perhaps<DataTestAttribute>,
  options?: IDataTestAttributeOptions
): DataTestAttributeProp {
  return filterNullOrUndefinedValues({
    [options?.customAttribute || DATA_TEST_ATTRIBUTE]: dataTestAttribute
      ? getDataTestAttributeValue(dataTestAttribute)
      : null
  })
}

/**
 * Return the prop from the dataTestAttribute found from the context.
 */
export function useDataTestAttributeProp(
  options?: IDataTestAttributeOptions
): DataTestAttributeProp {
  const logger = useLogger()
  const dataTestAttributeContext = useContext(DataTestAttributeContext)

  // Memo the labelled value to not have to compute it again and to keep it
  // in the DOM even if the value has been removed from the context (forwardAttribute=false option)
  return useMemo(() => {
    const defaultOptions: IDataTestAttributeOptions = {
      forwardAttribute: false
    }

    const mergedOptions = deepMerge([
      defaultOptions,
      deepMerge([dataTestAttributeContext?.options, options])
    ])

    const value = getDataTestAttributeProp(
      dataTestAttributeContext?.dataTestAttribute,
      mergedOptions
    )

    // remove the value from the context if forwardAttribute is false
    if (mergedOptions?.forwardAttribute === false) {
      delete dataTestAttributeContext?.dataTestAttribute
    }

    if (options?.debug && Object.keys(value).length) {
      logger('debug')('Get dataTestAttribute values "%o"', value)
    }

    return value
  }, [])
}
