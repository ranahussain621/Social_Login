import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function GoogleLoginButton() {
    
    const GoogleClientID = process.env.REACT_APP_GOOGLE_ClIENT_ID;

    return (
        <div>
            <GoogleOAuthProvider clientId={GoogleClientID}>

                <GoogleLogin
                    onSuccess={credentialResponse => {

                         var decoded = jwt_decode(credentialResponse.credential);
                        console.log(decoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />

            </GoogleOAuthProvider>
        </div>
    );
}

export default GoogleLoginButton;
