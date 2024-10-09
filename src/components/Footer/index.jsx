import { FooterContainer } from "./styles";

const Footer = ({ footerText }) => {
  return (
    <FooterContainer>
        <p>{footerText}</p>
    </FooterContainer>
  );
};

export default Footer;
