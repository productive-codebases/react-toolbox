import { ensureArray, isTruthy, Perhaps } from '@productive-codebases/toolbox'
import { DATA_TEST_ATTRIBUTE } from '../forwardProps/constants'
import { filterNullOrUndefinedValues } from '../forwardProps/filterNullOrUndefinedValues'
import {
  DataTestAttribute,
  DataTestAttributeProp,
  IDataTestAttributeOptions
} from './type'

/**
 * Return the dataTestAttribute value used for accessibility and e2e testing.
 */
export function configureGetDataTestAttributeValue<TRoles>() {
  return function getDataTestAttributeValue(
    dataTestAttribute?: DataTestAttribute<TRoles>
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
}

/**
 * Return the prop from the dataTestAttribute structure.
 */
export function configureGetDataTestAttributeProp<TRoles>() {
  const getDataTestAttributeValue = configureGetDataTestAttributeValue<TRoles>()

  return function getDataTestAttributeProp(
    dataTestAttribute: Perhaps<DataTestAttribute<TRoles>>,
    options?: IDataTestAttributeOptions
  ): DataTestAttributeProp {
    return filterNullOrUndefinedValues({
      [options?.customAttribute || DATA_TEST_ATTRIBUTE]: dataTestAttribute
        ? getDataTestAttributeValue(dataTestAttribute)
        : null
    })
  }
}
