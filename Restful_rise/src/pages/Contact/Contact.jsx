import "../Contact/contact.css"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact_wrapper">
            <div className="contact_upSide">
              <div className="contact_left">
                <h1 className="contact_title">Aloqa</h1>
                <form action="" className="contact_form">
                  <div className="form_input">
                    <input
                      type="email"
                      placeholder="Elektron manzilingizni kiriting..."
                      className="contact_input"
                    />
                  </div>
                  <div className="form_input">
                    <input
                      type="tel"
                      placeholder="+998"
                      className="contact_input"
                    />
                  </div>
                  <div className="form_input">
                    <textarea
                      rows={4}
                      cols={50}
                      placeholder="Savol va xabarlaringizni yozing"
                      className="contact_input"
                    />
                  </div>
                  <button type="submit" className="contact_btn">
                    Jo‘natish
                  </button>
                </form>
              </div>
              <div className="contact_right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.663791972857!2d69.24985387553018!3d41.31617710041004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e0!3m2!1sru!2s!4v1712451574889!5m2!1sru!2s"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  className="map"
                ></iframe>
              </div>
            </div>
            <div className="contact_downSide">
              <div className="contact_details">
                <div className="details_box">
                  <MdEmail className="contactIcon" />
                </div>
                <p className="detailed_text">info@bnpfabric.uz
                </p>
              </div>
              <div className="contact_details">
                <div className="details_box">
                  <FaPhone className="contactIcon" />
                </div>
                <p className="detailed_text">+998 93 383 75 85 
                </p>
              </div>
              <div className="contact_details">
                <div className="details_box">
                  <FaLocationDot className="contactIcon" />
                </div>
                <p className="detailed_text">Bukhara region, Alpomish st, 80.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


