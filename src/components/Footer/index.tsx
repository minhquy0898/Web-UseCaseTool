import React from "react";
import bg from "../../assets/Images/bg-footer.jpg";
import qr from "../../assets/Images/qrcode-default.png";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div
        className="footer__mobile"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="footer__qr">
          <p>Use app mobile</p>
          <img src={qr} alt={qr} />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
