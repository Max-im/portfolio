import { Box } from '@mui/material';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../sass/authBtn.scss';

export default function AuthBtn() {
  return (
    <Box sx={{ flexGrow: 0 }}>
        <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText=""
            className="authBtn__loginBtn"
            onSuccess={() => {}}
            onFailure={() => {}}
            cookiePolicy={'single_host_origin'}
        />
    </Box>
  );
}
