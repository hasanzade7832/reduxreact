import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setPassword ,setshowPassword } from "../redux/Login/loginSlice";
import { Image } from 'primereact/image';
        
const Login: React.FC = () => {
  
  const dispatch = useDispatch();

  const userName = useSelector((state: RootState) => state.dataLogin.userName);
  const password = useSelector((state: RootState) => state.dataLogin.password);
  const showPassword = useSelector((state: RootState) => state.dataLogin.showPassword);

  const handleLogin = () => {
  };

  const togglePasswordVisibility = () => {
    dispatch(setshowPassword(!showPassword));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
          <Image src='./logoNeco.jpg' alt="Image" width="70" style={{ position: "absolute", top: 0, right: 0 }} />
        </div>
        <div className="p-inputgroup" style={{ marginTop: "80px" , display: "flex",  alignItems: "center"  }} >
          <span>
            <i className="pi pi-user" style={{ fontSize: '1.5rem',color:"red",marginRight:"10px" }}/>
          </span>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <InputText id="username" value={userName} onChange={(e) => dispatch(setUserName(e.target.value))} style={{width:"278px"}}/>
              <label htmlFor="username">Username</label>
            </span>
          </div>
        </div>
        <div className="p-inputgroup" style={{ marginTop: "40px" , display: "flex",  alignItems: "center"}}>
          <span>
            <i className="pi pi-lock" style={{ fontSize: '1.5rem' ,color:"red",marginRight:"10px"}}/>
          </span>
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <InputText id="password"type={showPassword ? "text" : "password"} value={password} onChange={(e) => dispatch(setPassword(e.target.value))} style={{width:"278px"}}/>
              <label htmlFor="password">Password</label>
            </span>
          </div>
          <span onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
            <i className={`pi ${showPassword ? "pi-eye-slash" : "pi-eye"}`} style={{ fontSize: '1.5rem', color: "red", marginLeft: "10px" }} />
          </span>

        </div>
        <div style={{ marginTop: "40px" ,textAlign:"center"}}>
          <Button style={{width:"80%"}} label="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;

interface RootState {
  dataLogin: {
    userName: string;
    password: string;
    showPassword:Boolean
  };
}

