import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";

// Create a footer to display on all pages in the app
const FooterLinks = [
    {
        title: <SiGithub size={50} color="black"/>,
        url: "https://github.com/SalmY001",
        className: "footer-links",
    },
    {
    title: <SiLinkedin size={50} color="darkblue"/>,
    url: "https://linkedin.com/in/yvonne-s-2a12446b",
    className: "footer-links",
    },
];

class Footer extends React.Component {
    state = { clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <footer className='FooterLinks'>
                <div
                className={this.state.clicked ? "footer-menu active" : "footer-menu"}
                >
                    {FooterLinks.map((item, index) => {
                        return (
                            <div key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                    {item.icon}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </footer>
        );
    }
}

export default Footer;
