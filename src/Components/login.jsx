import React from 'react';
import './login.css';
import Logo from '../Assets/Images/Logo.png';
import logdrag from '../assets/Images/logindragon.png';
import back from '../assets/Images/Back.png';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <div className='login-container'>
        <img src={Logo} alt="Logo" className="logo" />

        <div className='leftcontainer'>
                          {/* Back button */}
            <button
            onClick={() => window.history.back()}
            style={{
            position: 'absolute',
            top: '20px',
            left: '35%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            }}  
            >
            <img 
            src={back}
            alt="Back" 
            style={{ width: '25px', height: '25px', marginRight: '5px' }} 
            />
            </button>
            <img src={logdrag} alt="Dragon" className="logdragon-image" />
        </div>

        <div className='rightcontainer'>

            <h1 style={{ 
                textAlign: 'center', 
                top: '10%',
                position: 'absolute',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#2A0C3E',
            }}>Access to your account</h1>
            <form className='login-form'>
                <input type="text" placeholder="Username" className='input-field'required /><br />
                <input type="email" placeholder="Email" className='input-field' required /><br />
                <input type="password" placeholder="Password" className='input-field' required /><br />
                <button type="submit" className='login-button'><Link to="/home" style={{textDecoration:'none', color:'inherit'}}>Login</Link></button>
            </form>
            <p style={{ 
                textAlign: 'center', 
                marginTop: '20px',
                color: '#2A0C3E',
                fontSize: '24px'}
            }>Don't have an account? <Link to="/signin">Sign In</Link></p>

        </div>
    </div>
  );

}

export default Login;
