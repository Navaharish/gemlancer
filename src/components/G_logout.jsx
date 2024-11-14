import { GoogleLogin } from 'react-google-login';

const clientId = "159456186171-3os5dukvvopj3t40no6p613dvarhpj19.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("Log out is Successfull");
    }



    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout from google"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;