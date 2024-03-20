import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Headers, Nav, NavLink, NavItem, LogoHeader, BandButton, ButtonBrasil, BotoesTraducao, Linker, BotoesDiv, NavDiv} from '../styled';
import { LanguageContext } from '../LanguageContext';
import logo from '../FonteneleSatLogo.jpg';
import bandSpn from '../bandSpn.png';

export default function Header(args) {

  const location = useLocation();
  const { texts, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location,]);


  return (
    <Headers>
      <NavDiv {...args} >
        <LogoHeader onClick={() => setIsOpen(!isOpen)} alt="" src={logo} />

        {isOpen && (
          <Nav>
            <NavItem>
              <NavLink>
                <Linker to="/">Início</Linker>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Linker to="/#servicos">{texts.navbar.Servicos}</Linker>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Linker to="/SobreNos">{texts.navbar.aboutUs}</Linker>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Linker to="/#footer">{texts.navbar.contact}</Linker>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Linker to="/Login">{texts.navbar.menu}</Linker>
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </NavDiv>
      <BotoesDiv>
        <BotoesTraducao>
          <BandButton onClick={() => setLanguage('en')}><ButtonBrasil src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413042686ada5_language.png' /></BandButton>
          <BandButton onClick={() => setLanguage('pt')}><ButtonBrasil src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413753386ada7_language%20(1).png' alt='' loading='lazy' /></BandButton>
          <BandButton onClick={() => setLanguage('es')}>
            <ButtonBrasil src={bandSpn} alt='' loading='lazy' />
          </BandButton>
        </BotoesTraducao>
      </BotoesDiv>

    </Headers>
  );
}