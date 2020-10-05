import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <div>
            <span>© 2020 Lambda School - Joshua Martinez</span>
            </div>
            <div className="footerLinks">
            <span><a href="https://github.com/site/terms">Terms</a></span>
            <span><a href="https://github.com/site/privacy">Privacy</a></span>
            <span><a href="https://github.com/security">Security</a></span>
            <span><a href="https://githubstatus.com/">Status</a></span>
            <span><a href="https://docs.github.com/">Help</a></span>
            </div>
            <div className="footerLinks">
            <span><a href="https://github.com/contact">Contact GitHub</a></span>
            <span><a href="https://github.com/pricing">Pricing</a></span>
            <span><a href="https://docs.github.com/">API</a></span>
            <span><a href="https://services.github.com/">Training</a></span>
            <span><a href="https://github.blog/">Blog</a></span>
            <span><a href="https://github.com/about">About</a></span>
            </div>
        </div>
    );
};

export default Footer;