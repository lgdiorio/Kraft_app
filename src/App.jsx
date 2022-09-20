import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import theme from './themes/default'
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import { CSSReset } from '@chakra-ui/css-reset';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './views/login';
import RegisterPage from './views/login/register';
import ProfileLayout from './layouts/ProfileLayout';
import EmployeesPage from './views/login/EmployeesPage';


function App() {

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<RegisterPage/>}/>
          </Route>

          <Route path="app" element={<ProfileLayout/>}>
            <Route path="funcionarios" element={<EmployeesPage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </ChakraProvider>

  )
}

export default App
