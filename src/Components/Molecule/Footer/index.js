import React from "react";
import "./Footer.scss";

const Icon = ({ img }) => (
    <div className="icon-wrapper">
        <img className="icon-medsos" src={img} alt="Icon Social Media" />
    </div>
);

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo-wrapper">
                    <img
                        className="logo"
                        src="https://andre-maesha-99.web.app/images/PasPhoto.jpg"
                        alt="Andre Maesha Logo"
                    />
                    <p>Andre Maesha</p>
                </div>
                <div className="social-wrapper">
                    <Icon img="https://andre-maesha-99.web.app/images/IG.png" />
                    <Icon img="https://andre-maesha-99.web.app/images/github_icon.png" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    );
};

export default Footer;
