import React, { useState } from "react";
// IMPORT MODEL IMAGE ->>
import FooterImage from "../../assets/Models/footerimage.png";
// IMPORT LOGO FOR FOOTER ->>
import FooterNavLogo from "../../assets/logos/footernavlogo.png";
// IMPORT HASHLINK FOR LINKS ->>
import { HashLink } from "react-router-hash-link";
// IMPORT TOAST FOR NOTIFICATION ->>
import { toast } from "react-toastify";

function Footer() {
  // SET NOTIFY ->>
  const notify = () => toast.success("Thanks For Subcribe");

  // FOOTER ALL HOOKS  ->>
  const [footerHooks, setFooterHooks] = useState({
    isDisable: false,
    email: "",
  });

  // EMAIL FUNCTION ->>
  function emailText(e) {
    setFooterHooks({
      email: e.target.value,
    });
  }

  // SUBSCRIBE NOTIFICATION FUNCTION ->>
  function subscribeNotify(e) {
    e.preventDefault();
    setFooterHooks({
      email: "",
      isDisable: true,
    });
    notify();
  }

  return (
    <>
      {/* FOOTER ->> */}
      <footer className="footer">
        <div className="footer-area">
          <div className="footer-box">
            {/* FOOTER MODEL IMAGE ->> */}
            <img src={FooterImage} draggable={false} alt="Footer-Image" />
            <div className="footer-text-box">
              <h1>Being first has its perks</h1>
              <p>
                Sign up to get more information about Bose, exclusive first
                looks at promotions, new products and more.
              </p>
              {/* SIGN UP BOX ->> */}
              <div className="sign-up-box">
                <form onSubmit={subscribeNotify}>
                  <input
                    type="email"
                    name="useremail"
                    onChange={emailText}
                    value={footerHooks.email}
                    autoComplete="off"
                    required
                    placeholder="Your e-mail here"
                  />
                  {footerHooks.isDisable ? (
                    <button className="disabled-btn" disabled>
                      Subscribed
                    </button>
                  ) : (
                    <button className="sign-up-btn">Subscribe</button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER NAVIGATION ->> */}
        <div className="footer-nav">
          <img src={FooterNavLogo} draggable={false} alt="Bose-logo" />
          <ul>
            <li>
              <HashLink to="/#headphones">Headphones</HashLink>
            </li>
            <li>
              <HashLink to="/#speakers">Speakers</HashLink>
            </li>
            <li>
              <HashLink to="/#audio_sunglasses">Audio sunglasses</HashLink>
            </li>
            <li>
              <HashLink to="/#support">Support</HashLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
