import React from "react";
import "./register.scss";
import { RegisterBackground } from "../../Assets/index";
import { Button, Gap, Input, Link } from "../../Components";
import { useHistory } from "react-router-dom";

const Register = () => {
    const history = useHistory();

    return (
        <div className="main-page">
            <div className="left">
                <img
                    src={RegisterBackground}
                    alt="register-background"
                    className="bg-image"
                />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button
                    title="Register"
                    onClick={() => history.push("/login")}
                />
                <Gap height={100} />
                <Link
                    title="Kembali ke Login"
                    onClick={() => history.push("/login")}
                />
            </div>
        </div>
    );
};

export default Register;
