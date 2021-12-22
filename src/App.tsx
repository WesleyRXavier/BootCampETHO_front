
import Login from './screens/Login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/Login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import {GlobalStyle} from './themes/main/global-styles';

function App() {
  return (
    
    <ThemeProvider theme={theme}>
       <GlobalStyle />
      <Routes>
        <Route path={LoginPath} element={<Login />} />
      </Routes>

      </ThemeProvider>
      

  );
}

export default App;
