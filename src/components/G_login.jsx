import { GoogleLogin } from 'react-google-login';

const clientId = "159456186171-3os5dukvvopj3t40no6p613dvarhpj19.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESSFULLY ! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login was not successfull :", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />

        </div>
    )

}

export default Login;