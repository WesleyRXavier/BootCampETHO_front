import React from 'react';
import Login from "./screens/Login/login.screen";
import {Route, Routes} from "react-router-dom";
import {LoginPath} from "./screens/Login/login.types";
import {ThemeProvider} from "styled-components";
import theme from "./themes/main/theme";
import {GlobalStyle} from "./themes/main/global-styles";
import {Provider} from "react-redux";
import store from "./store/store/store";
import Home from "./screens/home/home.screen";
import {HomePath} from "./screens/home/home.types";
import UserGuard from "./components/routers/user-guard/user-guard.component";

function App() {
    return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Routes>
                  <Route path={LoginPath} element={<Login />} />
                  <Route path={HomePath} element={<UserGuard><Home /></UserGuard>} />
              </Routes>
          </ThemeProvider>
      </Provider>
    );
}

export default App;