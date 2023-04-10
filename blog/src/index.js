import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Hydrate l'application en donnée
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Provider donne a l'app toute la donnée grâce au props store
    <Provider store={store}>
        <App />
    </Provider>
);
