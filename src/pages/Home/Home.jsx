import "../Home/home.css"
import bedImage from "../../assets/img/bed4.png"
import { FaTruckFast } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="home_wrapper">
            <div className="home_wrapTit">
              <p className="home_mainTitle">Bukharaʻs</p>
              <p className="home_mainSubtitle">Natural</p>
              <p className="home_mainSubtit">Product</p>
            </div>
            <img src={bedImage} alt="" className="bed_image" />
          </div>
          <div className="home_priorities">
            <div className="home_benefits">
              <FaTruckFast className="home_icon" />
              <div className="benefits_detailed">
                <h3 className="benefit">Бесплатная доставка</h3>
                <p className="home_text">
                  на все заказы
                </p>
              </div>
            </div>
            <div className="home_benefits">
              <SiAdguard className="home_icon" />
              <div className="benefits_detailed">
                <h3 className="benefit">Гарантия возврата</h3>
                <p className="home_text">30-дневный возврат денег</p>
              </div>
            </div>
            <div className="home_benefits">
              <FaHeadphones className="home_icon" />
              <div className="benefits_detailed">
                <h3 className="benefit">Онлайн поддержка 24/7</h3>
                <p className="home_text">Техническая поддержка 24/7</p>
              </div>
            </div>
            <div className="home_benefits">
              <IoWallet className="home_icon" />
              <div className="benefits_detailed">
                <h3 className="benefit">Безопасная оплата</h3>
                <p className="home_text">Любой способ оплаты</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home
