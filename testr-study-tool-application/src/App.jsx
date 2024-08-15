import LoginForm from './Components/LoginForm/LoginForm';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Login" element={<LoginForm />}/>
          <Route path='/SignUp' element={<SignUpPage />}/>
          <Route path='/ForgotPassword' element={<ForgotPasswordPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
