import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './i18n/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Seo from './Seo';
import ChakraProvider from './chakraUI/ui/provider';
import store from './store/store';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(ChakraProvider, { defaultTheme: "light", children: _jsxs(Provider, { store: store, children: [_jsx(Seo, {}), _jsx(App, {})] }) }) }));
//# sourceMappingURL=main.js.map