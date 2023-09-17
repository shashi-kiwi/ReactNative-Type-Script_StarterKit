import React from "react";
import { useColorScheme, ColorSchemeName } from "react-native";

export interface IColorTheme {
  backgroundColor: string;
  color: string;
}

export interface IThemeContext {
  themeState: ColorSchemeName;
  ColorTheme: IColorTheme;
}
export interface IThemeProvider {
  children: React.ReactNode;
}
