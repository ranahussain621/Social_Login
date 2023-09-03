import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from 'reactjs-social-login';

function FbLogin() {
  return (
    <div className="App w-25">

        <LoginSocialFacebook
        
        appId='1757873734671510'
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
