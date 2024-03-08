import React from 'react';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="441229385261-20vf39hrpgl9bb32hjd18d1mg8m5cqkd.apps.googleusercontent.com">
    <App />
</GoogleOAuthProvider>
);


