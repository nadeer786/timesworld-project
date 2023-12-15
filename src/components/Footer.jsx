const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer-container">
        <div className="footer-icons-container">
          <img src="/google-icon.png" alt="google" />
          <img src="/facebook-icon.png" alt="google" />
          <img src="/linkedin-icon.png" alt="google" />
          <img src="/twitter-icon.png" alt="google" />
        </div>
        <h5>Example@email.com</h5>
        <div>Copyright &copy; {year}Name. All rights reserved. </div>
      </footer>
    </>
  );
};

export default Footer;
