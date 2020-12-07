import { Platform } from 'react-native';
export const config = {
    API_URL: Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.2.2:3000", //process.env.API_URL,
    API_KEY: process.env.API_KEY,
};
