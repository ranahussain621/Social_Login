import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from 'reactjs-social-login';


function FbLogin() {

  const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

  return (
    <div className="App w-25">

        <LoginSocialFacebook
        
        appId={facebookAppId}
        onResolve={(response)=>{
         console.log(response)
        }}
        onReject={(error)=>{
            console.error(error)
           }}
        >

        <FacebookLoginButton style={{width:'230px'}} />
       
        </LoginSocialFacebook>
    </div>
  );
}

export default FbLogin;
