import { NativeModules } from 'react-native';

export default class WhiteLabelConfig {
    public static readonly APP_NAME: string = NativeModules.WhiteLabelConfig.getAppName();
    public static readonly PRIMARY_COLOR: string =  NativeModules.WhiteLabelConfig.getPrimaryColor();
    public static readonly PRIMARY_TEXT_COLOR: string = NativeModules.WhiteLabelConfig.getPrimaryTextColor();
    public static readonly WELCOME_TEXT: string = NativeModules.WhiteLabelConfig.getWelcomeText();
}
