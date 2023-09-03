import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function GoogleLoginButton() {
    // const responseGoogle = (response) => {
    //     console.log(response); // Handle the Google login response here
    // };

    return (
        <div>
            <GoogleOAuthProvider clientId="591998037911-djuc6q295g0t3k4gtooc8mn99e89g8sa.apps.googleusercontent.com">

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
