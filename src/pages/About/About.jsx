import "./about.css"
import aboutImage from "../../assets/img/aboutImage.jpg"
import { aboutDetails } from "../mock/aboutDetails";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_content">
            <div className="about_leftSide">
              <h1 className="about_title">Buxoro tabiiy mahsuloti</h1>
              <div className="about_paragraph">
                {aboutDetails.map((el) => <>
                  <p className="about_text">{el.aboutText}</p>
                </>
                )}
              </div>
            </div>
            <div className="about_rightSide">
              <img src={aboutImage} alt="About" className="about_photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

