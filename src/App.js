
import React from "react";

import GitHubLogin from "react-github-login";


const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);
export default function App() {
  return (
    <>
    <button></button>
    githubAPI(
      app, // Send your app instance to get OAuth Access
      {
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        redirectURL: '/oauth-call'
      }
    )
      .then(authToken => {
        console.log('authToken:', authToken);
      })
      .catch(err => console.log(err));
      </>
  );
}
