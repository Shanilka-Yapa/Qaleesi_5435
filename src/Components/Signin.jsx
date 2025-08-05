import React from 'react';
import './login.css';
import Logo from '../Assets/Images/Logo.png';
import signdrag from '../assets/Images/signindragon.png';
import back from '../assets/Images/Back.png';
import { Link } from 'react-router-dom';

function Signin() {
  return(
    <div className='login-container'>
        <img src={Logo} alt="Logo" className="logo" />

        <div className='rightcontainer' style={{borderRadius:'0 80px 80px 0'}}>
            {/*adjusted for left in signin*/}
            <h1 style={{ 
                textAlign: 'center', 
                top: '10%',
                position: 'absolute',
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#2A0C3E',
            }}>Create your account</h1>
            <form className='login-form'>
                <input type="text" placeholder="Firstname" className='signin-input-field'required /><br />
                <input type="text" placeholder="Lastname" className='signin-input-field'required /><br />
                <input type="text" placeholder="Username" className='signin-input-field'required /><br />
                <input type="email" placeholder="Email" className='signin-input-field' required /><br />
                <input type="password" placeholder="Password" className='signin-input-field' required /><br />
                <button type="submit" className='login-button'>Sign Up</button>
            </form>

            <p style={{ 
                textAlign: 'center', 
                marginTop: '20px',
                color: '#2A0C3E',
                fontSize: '24px'}
            }>Already have an account? <Link to="/login">Log In</Link></p>

        </div>

        <div className='leftcontainer'>
            {/*adjusted for right in signin*/}
                          {/* Back button */}
            <button
            onClick={() => window.history.back()}
            style={{
            position: 'absolute',
            top: '20px',
            right: '35%',
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
            <img src={signdrag} alt="Dragon" style={{right:'5%',
                position: 'relative',
                top:'15%',
                width: 'auto',
                height: '80%',
            }}/>

        </div>
    </div>
  );

}

export default Signin;
