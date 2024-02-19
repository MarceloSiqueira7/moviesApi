import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';
import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('item'));

  const currentTheme = useMemo(() => themes[theme] || themes.light, [theme]);

  function handlerToggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => localStorage.setItem('item', theme), [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Navbar onToggleTheme={handlerToggleTheme} selectedTheme={theme} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
