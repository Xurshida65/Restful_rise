import "./about.css"
import aboutImage from "../../assets/img/aboutImage.jpg"

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_content">
            <div className="about_leftSide">
              <h1 className="about_title">Buxonjuujujro tabiiy mahsuloti</h1>
              <div className="about_paragraph">
                <p className="about_text">
                  1. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar,
                  Fabrikamiz koʻp yillar davomida butun dunyoda foydalanish
                  uchun paxta matolarini ishlab chiqaradigan kompaniya boʻlib
                  kelgan.
                </p>
                <p className="about_text">
                  2. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                  sumkalar, ushbu kompaniya 17 yildan beri mijozlarga xizmat
                  ko‘rsatmoqda.
                </p>
                <p className="about_text">
                  3. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                  sumkalar, ushbu kompaniyaning asosiy maqsadi yuqori sifatli va
                  tejamkor mahsulotlar ishlab chiqarishdir.
                </p>
                <p className="about_text">
                  4. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                  sumkalar, ushbu kompaniyaning ishlab chiqarish jarayoni butunlay
                  ekologik toza.
                </p>
                <p className="about_text">
                  5. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                  sumkalar, korxonada xaridorlarning talab va takliflari asosida
                  har qanday turdagi paxta xomashyosi ishlab chiqarilishi
                  mumkin.
                </p>
                <p className="about_text">
                  6. Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko
                  sumkalar, kompaniya DongJia to‘quv mashinalarining
                  O‘zbekistondagi rasmiy dileri hisoblanadi.
                </p>
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

