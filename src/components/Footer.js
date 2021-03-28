import Logo from '../jetro.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="brand-footer">
                <img src={Logo} alt="brand-logo" />
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus ratione debitis modi</h6>

            </div>
            <div className="services-footer"></div>
            <div className="contact"></div>
        </div>
    )
}

export default Footer;
