import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterBody>
        <FooterContainer>
          <FooterContent>
            <FooterSection>
              <FooterHeader>Contacto</FooterHeader>
              <FooterLink>contacto@sacu.org.uy</FooterLink>
            </FooterSection>
            <FooterSection>
  
            </FooterSection>
          </FooterContent>
          <FooterNoticeContainer>
            <FooterNotice>
              Sociedad de avicultores cabañeros del Uruguay | Todos los derechos
              reservados | 2021{" "}
            </FooterNotice>
          </FooterNoticeContainer>
        </FooterContainer>
      </FooterBody>
    </>
  );
};

const FooterBody = styled.div`
  display: flex;
  place-content: end;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(69, 164, 69, 1) 0%,
    rgba(35, 85, 36, 1) 100%
  );
  color: #fff;
  line-height: 24px;
  margin-top: 0px;
`;
const FooterContainer = styled.div`
  background: rgb(22, 54, 20);
  background: linear-gradient(
    0deg,
    rgba(22, 54, 20, 1) 0%,
    rgba(35, 85, 36, 1) 100%,
    rgba(35, 85, 36, 1) 100%
  );
  padding: 16px;
  padding-top: 48px;
`;
const FooterContent = styled.div`
  max-width: 1080px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media screen and (max-width: 505px) {
    grid-template-columns: 1fr;
  }
`;
const FooterSection = styled.div`
  text-align: center;
`;
const FooterHeader = styled.h3`
  font-size: 21px;
`;
const FooterLink = styled.p`
  display: block;
  opacity: 0.65;

  &:hover {
    opacity: 0.9;
  }
`;
const FooterNoticeContainer = styled.div``;
const FooterNotice = styled.p`
  opacity: 0.5;
  font-size: 13px;
  text-align: center;
  padding: 24px;
`;

export default Footer;
