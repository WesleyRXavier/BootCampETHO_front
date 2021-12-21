
import Login from './screens/Login/login.screen';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/Login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={LoginPath} element={<Login />} />
      </Routes>

      </ThemeProvider>
      

  );
}

export default App;
