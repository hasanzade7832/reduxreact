import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  setPassword,
  setshowPassword,
} from "../redux/Login/loginSlice";
import { Image } from "primereact/image";
import CryptoJS from "crypto-js";
import projectServices from "../components/services/project.services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ScaleLoader } from "react-spinners";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state: RootState) => state.dataLogin.userName);
  const password = useSelector((state: RootState) => state.dataLogin.password);
  const showPassword = useSelector(
    (state: RootState) => state.dataLogin.showPassword
  );

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const dayOfMonth = d.getUTCDate();
    const hour = d.getUTCHours();
    const dow = d.getUTCDay();

    const myKeyConst =
      year + "-" + month + "-" + dayOfMonth + "-" + hour + "-" + weekDay[dow];

    const seqKeyConst = CryptoJS.SHA512(
      CryptoJS.enc.Utf8.parse(myKeyConst)
    ).toString(CryptoJS.enc.Hex);

    const passwordConst = CryptoJS.SHA512(
      CryptoJS.enc.Utf8.parse(password)
    ).toString(CryptoJS.enc.Hex);

    projectServices
      .webLogin({
        userName: userName,
        password: passwordConst,
        SeqKey: seqKeyConst,
      })
      .then((res) => {
        Cookies.set(
          "token",
          res.data.MyUser.TTKK + ":" + res.data.MyUser.Username
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/home");
        }, 500);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const togglePasswordVisibility = () => {
    dispatch(setshowPassword(!showPassword));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div style={{ position: "relative" }}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <Image
            src="./logoNeco.jpg"
            alt="Image"
            width="70"
            style={{ position: "absolute", top: 0, right: 0 }}
          />
        </div>

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "250px",
            }}
          >
            <ScaleLoader />
          </div>
        ) : (
          <>
            <div
              className="p-inputgroup"
              style={{
                marginTop: "80px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>
                <i
                  className="pi pi-user"
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    marginRight: "10px",
                  }}
                />
              </span>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="username"
                    value={userName}
                    onChange={(e) => dispatch(setUserName(e.target.value))}
                    style={{ width: "278px" }}
                  />
                  <label htmlFor="username">Username</label>
                </span>
              </div>
            </div>
            <div
              className="p-inputgroup"
              style={{
                marginTop: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>
                <i
                  className="pi pi-lock"
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    marginRight: "10px",
                  }}
                />
              </span>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    style={{ width: "278px" }}
                  />
                  <label htmlFor="password">Password</label>
                </span>
              </div>
              <span
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={`pi ${showPassword ? "pi-eye-slash" : "pi-eye"}`}
                  style={{
                    fontSize: "1.5rem",
                    color: "red",
                    marginLeft: "10px",
                  }}
                />
              </span>
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Button
                style={{ width: "80%" }}
                label="Login"
                onClick={handleLogin}
              />
              <div className="card flex justify-content-center"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

interface RootState {
  dataLogin: {
    userName: string;
    password: string;
    showPassword: Boolean;
  };
}
