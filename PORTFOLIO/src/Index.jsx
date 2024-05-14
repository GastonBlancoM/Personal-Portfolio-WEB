import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import './index.css'

import global_ES from './translations/es/es.json';
import global_EN from './translations/en/en.json';

i18next.init({
  interpolation: { escapeValues: false },
  lng: "ES",
  resources: {
    ES: {
      global: global_ES
    },
    EN: {
      global: global_EN
    },
  },
});

import "primereact/resources/themes/lara-dark-teal/theme.css";
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
