import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './globalStyle/GlobalStyle';
import App from './App';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ResultContextProvider>
            <Router>
                <GlobalStyle>
                    <App />
                </GlobalStyle>
            </Router>
        </ResultContextProvider>
    </React.StrictMode>,
);
