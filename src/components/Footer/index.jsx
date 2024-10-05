import { FooterContainer } from "./style";

const Footer = ({ footerText }) => {
  return (
    <FooterContainer>
        <p>{footerText}</p>
    </FooterContainer>
  );
};

export default Footer;
