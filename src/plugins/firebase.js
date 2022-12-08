import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYDwNpyDTwlB-7kwkCfVXwrxlBllFLhzo",
    authDomain: "final-aw.firebaseapp.com",
    projectId: "final-aw",
    storageBucket: "final-aw.appspot.com",
    messagingSenderId: "300437190497",
    appId: "1:300437190497:web:ea7623e12c3e873153f720"
};

const app = initializeApp(firebaseConfig);

export{
    app
}