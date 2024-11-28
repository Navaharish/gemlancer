import { GoogleLogout } from 'react-google-login';
import '../components/Main_form.css';


const clientId = "159456186171-3os5dukvvopj3t40no6p613dvarhpj19.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("Log out is Successfull");
    }



    return (
        <div id="signOutButton">
            <GoogleLogout
                className='g_btn'
                clientId={clientId}
                buttonText={"Logout from google"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;