import React, { useEffect, useState } from 'react';

function Googleapi() {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = () => {
    const CLIENT_ID = '555860148348-s2a506cmsj9a5gecibeq9k23ejf4baps.apps.googleusercontent.com';
    const REDIRECT_URL = 'http://localhost:3000';
    const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';
    const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPE}&response_type=token`;
    window.location.href = AUTH_URL;
  };

  const getAccessToken = () => {
    const url = window.location.href;
    const token = url.match(/access_token=([^&]+)/);
    if (token && token[1]) {
      localStorage.setItem("Token", token[1]);
      setAccessToken(token[1]);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const getEmailData = () => {
    let token = localStorage.getItem("Token");
    let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Error in fetching mails', error));
  };

  const fetchMail = (id) => {
    let token = localStorage.getItem("Token");
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    let url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
    fetch(url, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log('Error in fetching mail', error));
  };

  return (
    <>
      {accessToken ? (
        <div>
          <h1>Access Token Obtained</h1>
          <p>Access Token: {accessToken}</p>
        </div>
      ) : (
        <>
          <button onClick={handleLogin}>Login with Google</button>
        </>
      )}
    </>
  );
}

export default Googleapi;
