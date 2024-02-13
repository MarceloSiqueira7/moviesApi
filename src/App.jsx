import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
