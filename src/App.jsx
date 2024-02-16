import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
