import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { IColorTheme } from "../types";
import { ThemeContext } from "../contextAPI/themeContext";
import WhiteLabelConfig from "../../whitelabel/WhiteLabelConfig";

type Props = {};
const welcome = (props: Props) => {
  const { ColorTheme } = React.useContext(ThemeContext);
  const styles = welcomeStyles(ColorTheme);
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{WhiteLabelConfig.APP_NAME}</Text>
      <View style={styles.container}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>
              {WhiteLabelConfig.WELCOME_TEXT}
            </Text>
        </View>
      </View>
      <Text style={styles.title}>welcome</Text>
    </View>
  );
};

export default welcome;

const welcomeStyles = (theme: IColorTheme) =>
  StyleSheet.create({
    title: {
      marginTop: 10,
      paddingHorizontal: 16,
      color: theme.color,
      fontSize: 24,
      fontWeight: "bold",
    },
    main: {
       flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: WhiteLabelConfig.PRIMARY_COLOR
    },

    container: {
      alignItems: "center",
    },
    greeting: {
      margin: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    greetingText:{
        marginTop: 10,
        paddingHorizontal: 16,
        color: theme.color,
        fontSize: 24,
        fontWeight: "bold",
    }
  });
