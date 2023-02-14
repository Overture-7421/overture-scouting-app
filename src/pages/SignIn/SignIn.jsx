import React, {useEffect} from "react";
import * as firebaseui from "firebaseui";
import {GoogleAuthProvider} from "firebase/auth";
import { auth } from "../../firebase";
import { Stack, Image } from "react-bootstrap";
import "firebaseui/dist/firebaseui.css";

import logoOverture from "./logoOverture.png"; 

let uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl){
            return true;
        },
        uiShown: function () {
            document.getElementById("loader").style.display = "none";
        },
    },
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

function SignIn(){
    useEffect (() => {
        const ui = 
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);
        ui.start("#firebaseui-auth-container", uiConfig);
    }, []);

    return(
        <Stack gap={2} className="col-md-3 mx-auto">
            <Image src={logoOverture} alt="Overture Logo" />
            <h1 className="text-center">Overture Scouting App</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </Stack>
    );
}

export default SignIn;