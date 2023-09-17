/**
 * Starter App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Component } from "react";
import { ThemeProvider } from "./src/contextAPI/themeContext";
import Welcome from "./src/screens/Welcome";

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
