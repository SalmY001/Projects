import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLogos = [
    {
        title: "GitHub",
        url: "https://github.com/SalmY001",
        className: "footer-links",
        icon: <FontAwesomeIcon icon={["fa-brands fa-github"]} size="2x" />
    },
    {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yvonne-s-2a12446b",
    className: "footer-links",
    icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
    },
    {
    title: "View",
    url: "/View",
    className: "footer-links"
    }
];

class Footer extends React.Component {
    state = { clicked: false};

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <footer className='FooterLogos'>
                <div>
                    <FontAwesomeIcon icon={["fab", "GitHub"]} size="2x" />
                    <FontAwesomeIcon icon={["fab", "LinkedIn"]} size="2x" />
                </div>
            
                <ul
                className={this.state.clicked ? "footer-menu active" : "footer-menu"}
                >
                    {FooterLogos.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                    {item.icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        );
    }
}

export default Footer;

// const Footer = () => (
//     <div className='footer'>
//         <p></p>
//     </div>
// )