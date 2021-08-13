import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBackground } from "../../Assets";
import { Input, Gap, Button, Link } from "../../Components/";

const Login = () => {
    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img
                    src={LoginBackground}
                    alt="login-background"
                    className="bg-image"
                />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" onClick={() => history.push("/")} />
                <Gap height={100} />
                <Link
                    title="Belum Punya akun, Silahkan Daftar"
                    onClick={() => history.push("/register")}
                />
            </div>
        </div>
    );
};

export default Login;
