//arquivo de definição de tipos do styled-components para integras os temas no projeto
import "styled-components";
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}