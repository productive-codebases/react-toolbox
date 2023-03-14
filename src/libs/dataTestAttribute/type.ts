import { DATA_TEST_ATTRIBUTE } from '../forwardProps/constants'
import { roles } from './roles'

export interface IDataTestAttributeContext {
  dataTestAttribute?: DataTestAttribute
  options?: IDataTestAttributeOptions
}

export interface IDataTestAttributeOptions {
  // allow to customize the attribute used for dataTestAttribute (default is data-attr-test)
  customAttribute?: string
  // forward dataTestAttribute attribute to children (false by default)
  forwardAttribute?: boolean
  // add some logs
  debug?: boolean
}

export type DataTestAttribute = {
  // most relevant role to describe the attribute
  role: keyof typeof roles
  // optional label to contextualize the attribute a bit more
  label?: string
  // optional identifier (id, key, etc.)
  identifier?: string
}

export type DataTestAttributeProp = Record<
  typeof DATA_TEST_ATTRIBUTE | string,
  string
>
