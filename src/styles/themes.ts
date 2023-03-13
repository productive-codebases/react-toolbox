const sizes = {
  veryVerySmall: '2px',
  verySmall: '3px',
  smaller: '4px',
  small: '5px',
  medium: '7px',
  default: '10px',
  large: '15px',
  veryLarge: '20px',
  veryVeryLarge: '25px',
  extraLarge: '30px',
  megaLarge: '60px'
}

const defaultTheme = {
  sizes
}

export const themes = {
  default: defaultTheme
}

export type Theme = (typeof themes)['default']