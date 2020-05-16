import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";
import { BrowserRouter } from "react-router-dom";
import VConsole from "vconsole";

// const vConsole = new VConsole();

const theme = createMuiTheme({ zhCN });

const content = (
    <React.StrictMode>
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter basename="/home">
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </StylesProvider>
    </React.StrictMode>
);
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) hydrate(content, rootElement);
else render(content, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
