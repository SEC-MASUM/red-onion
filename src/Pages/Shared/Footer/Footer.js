import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="flex justify-center">
      <p>Copyright &copy; {year}</p>
    </div>
  );
};

export default Footer;
