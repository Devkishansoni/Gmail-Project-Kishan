import react, { useState, useEffect } from "react";


function GmailAPI() {
    const [accessToken, setAccessToken] = useState('');

    const handleLogin = () => {
        const CLIENT_ID = "902433779476-pv004i0gt3aqnvuel2ulf0dpiru2ar5v.apps.googleusercontent.com";
        const REDIRECT_URL = "http://localhost:3000";
        const SCOPE = "https://www.googleapis.com/auth/gmail.readonly";
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    }

    const getAccessToken = () => {
        const url = window.location.href;
        const token = url.match(/access_token=([^&]+)/);
        localStorage.setItem("Token", token && token[1]);
    }

    useEffect(() => {
        getAccessToken();
    }, []);

    const getEmailData = () => {
        let token = localStorage.getItem("Token");
        console.log("hello", token);
        let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
        const options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            }
        }
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(fetchMail(json.messages[0].id)))
            .catch(error => console.log('Error in fetching mails', error))
    }

    const fetchMail = (id) => {
        console.log("message id is==", id);
        let token = localStorage.getItem("Token");
        const options = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': `application/json`
            }
        }
        let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Error in fetching mails', error))
    }

    return (
        <>
            <div>
                {accessToken ? (
                    <div>
                        <h1>Access token obtained</h1>
                        <p>Access Token: {accessToken}</p>
                    </div>
                ) : (
                    <>
                        <button onClick={handleLogin}>Login with Google</button>
                        <button onClick={getEmailData}>Get Email</button>
                        <button onClick={() => fetchMail("18e57c501c7b1cac")}>Fetch Emails</button>
                    </>
                )}
            </div>
        </>
    )
}

export default GmailAPI