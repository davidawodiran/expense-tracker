import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';

export const client = new KindeSDK(
    'https://expenstracker.kinde.com', //YOUR_KINDE_ISSUER
    'exp://172.22.15.63:8081', //KINDE_REDIRECT_URI
    'a1b4e4e1d2a648699c063038f9fed47c', //KINDE_CLIENT_ID
    'exp://172.22.15.63:8081'); //KINDE_LOGOUT_REDIRECT_URI