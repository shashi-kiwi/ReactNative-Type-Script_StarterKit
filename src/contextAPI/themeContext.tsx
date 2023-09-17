import React from "react";
import { Appearance, ColorSchemeName } from "react-native";

import { darkTheme, lightTheme, themeTypes } from "../constants";
import { IColorTheme, IThemeContext, IThemeProvider } from "../types";

const defaultMode = Appearance.getColorScheme() || themeTypes.LIGHT;
const ThemeContext = React.createContext<IThemeContext>({
  themeState: defaultMode,
  ColorTheme: lightTheme.theme,
});
const ThemeProvider = (props: IThemeProvider): JSX.Element => {
    const [themeState, setThemeState] =
      React.useState<ColorSchemeName>(defaultMode);
  
    React.useEffect(() => {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        console.log('color scheme>>>>', colorScheme)
        setThemeState(colorScheme);
      });
      return () => subscription.remove();
    }, []);
  
    const ColorTheme: IColorTheme = React.useMemo(
      () => (themeState === 'light' ? lightTheme.theme : darkTheme.theme),
      [themeState]
    );
  
    const value = React.useMemo(
      (): IThemeContext => ({ themeState, ColorTheme }),
      [ColorTheme, themeState]
    );
  
    return (
      <ThemeContext.Provider value={value}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };