import { GoogleSignin } from 'react-native-google-signin';
import OpenBarbellConfig from 'app/configs/OpenBarbellConfig.json';

export const configure = () => {
    GoogleSignin.hasPlayServices({ autoResolve: true })
    .then(GoogleSignin.configure({
        scopes: ["https://www.googleapis.com/auth/drive"],
        iosClientId: OpenBarbellConfig.iOSGoogleClientID,
        webClientId: OpenBarbellConfig.webGoogleClientID
    }))
    .catch((err) => {
        console.tron.log("Fail config google sign in: " + err.message);
        alert("Unfortuantely configuring Google Sign In has failed. Try restarting the app to access Cloud features.");
    })
    .done();
};
