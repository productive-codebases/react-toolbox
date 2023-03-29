/**
 * Examples of based roles usabled for data test attributes.
 *
 * Usage:
 *
 * import { getDataTestAttributeProp as getDataTestAttributeProp_ } from '...
 * const getDataTestAttributeProp = getDataTestAttributeProp<typeof roles>
 */
export const roles = {
  /* Tables / Lists */

  table: 'table',
  'table/column': 'table/column',
  'table/row': 'table/row',
  'table/cell': 'table/cell',
  'table/header': 'table/header',
  'table/footer': 'table/footer',

  /* Forms */

  form: 'form',
  'form/field': 'form/field',
  'form/button': 'form/button',
  'form/select': 'form/select',
  'form/select/option': 'form/select/option',

  /* Menu / Navigation */
  menu: 'menu',
  'menu/item': 'menu/item',

  /* Generic containers */

  container: 'container',
  'container/title': 'container/title',
  'container/content': 'container/content',

  /* Modals */

  modal: 'modal',
  'modal/content': 'modal/content',

  /* Popover */

  popover: 'modal',
  'popover/content': 'popover/content',

  /* Generics */

  // use for controls (checkboxes, buttons, etc) ouside a form context
  control: 'control',
  icon: 'icon'
}

export type Roles = typeof roles
