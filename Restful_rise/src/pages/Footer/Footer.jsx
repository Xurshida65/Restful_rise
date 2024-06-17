import "../Footer/footer.css"
import footerLogo from "../../assets/img/logo2.png"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_content">
            <div className="left_side">
              <div className="left_leftDetails">
                <img
                  src={footerLogo}
                  alt="Footer Logo"
                  className="footer_logo"
                />
                <p className="footer_text">
                  “Bukhara Natural Product” koʻp yillardan buyon butun dunyoda
                  foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya
                  hisoblanadi.
                </p>
              </div>
              <div className="left_rightDetails">
                <h4 className="footer_subTitle">Menu</h4>
                <ul className="footer_menu">
                  <li className="footer_list">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="footer_list"><Link to="/about">About us</Link></li>
                  <li className="footer_list"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="right_side">
              <h4 className="footer_subTitle">
                Elektron pochtamizga obuna boʻling
              </h4>
              <form action="">
                <input
                  type="email"
                  placeholder="Elektron pochtangizni kiriting..."
                  className="footer_input"
                  required
                />
                <button type="submit" className="btn">
                  Joʻnatish
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
