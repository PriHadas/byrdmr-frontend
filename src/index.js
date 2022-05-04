import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App';
import "./assets/fonts/Archivo-Bold.ttf";
import "./assets/fonts/Archivo-BoldItalic.ttf";
import "./assets/fonts/Archivo-Italic.ttf";
import "./assets/fonts/Archivo-Medium.ttf";
import "./assets/fonts/Archivo-MediumItalic.ttf";
import "./assets/fonts/Archivo-Regular.ttf";
import "./assets/fonts/Archivo-SemiBold.ttf";
import "./assets/fonts/Archivo-SemiBoldItalic.ttf";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

