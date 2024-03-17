// styled.d.ts
import "styled-components";

interface Color {
  [index: string]: string;
}

interface Colors {
  [color: string]: Color;
}

interface Spacing {
  [index: string]: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: Spacing;
    colors: Colors;
  }
}