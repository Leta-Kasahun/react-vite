import './Footer.css';
function Footer(){
return (<footer className='footer'>
    <div className="footer-container">
        <div className="footer-links">
            <a href="#" className='footer-link'>Privacy Policy</a>
                        <a href="#" className='footer-link'>Privacy Policy</a>
                        <a href="#" className='footer-link'>Terms of Sevrvice</a>
                        <a href="#" className='footer-link'>Contact Us</a>

        </div>
        <p className='footer-copright'>
            &copy; {new Date().getFullYear()} My React App. All rights reserved.
        </p>
    </div>

</footer>)
}

export default Footer;