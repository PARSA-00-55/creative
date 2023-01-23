import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import { theme } from './theme/Theme';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    path: '/',
    children: [
      {
        element: <Home/>,
        path: '/'
      }
    ]

  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
