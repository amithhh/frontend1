import React from 'react';
import r from "./Assests/R.png"
import { Link } from 'react-router-dom';
class LoginPage extends React.Component {
    

    render() {
        return (
            <div className="container" style={{backgroundImage:'url(https://media.licdn.com/dms/image/C511BAQGvg6B3iz6x4w/company-background_10000/0/1584477887564/jyothi_engineering_college_cheruthuruthy_cover?e=2147483647&v=beta&t=y5V5FZ-2JcJuF7Zt7rh2s0P4iyK-hvUD7dMkRLBo7pI)',height:'100vh',backgroundSize:'cover'}}>
                <h1 style={{ textAlign: 'center', color: '#15CDCA', fontWeight: 'bold' ,paddingTop:'20px'}}>Jyothi Engineering College</h1>
                <div className="button-container" style={{ textAlign: 'center' , marginTop: '20px' }}>
                    <button className="student-login"  style={{ backgroundColor: '#87CDCE', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Home</button>
                    <a href='/login'><button  className="faculty-login"  style={{ backgroundColor: '#87CDCE', marginRight: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button></a>
                    <a href='/About'><button  className="about-us"  style={{ backgroundColor:'#87CDCE', marginRight: '10px', padding: '10px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>About Us</button></a>
                    <button className="home"  style={{ backgroundColor: '#87CDCE', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>More</button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
