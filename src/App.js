import './App.css';
import GoogleLoginButton from './Components/GoogleLogin';
import FbLoginButton from './Components/FacebookLogin';

function App() {
  return (
    <div className="App" style={{marginTop:"100px"}}>
      <GoogleLoginButton />
      <FbLoginButton />
    </div>
  );
}

export default App;
