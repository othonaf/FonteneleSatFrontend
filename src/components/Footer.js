import React, { useContext } from 'react';
import { Whatsapp, ContainerFooter, TitulosFooter, AnoAtual, Contato, ImgInsta, ContatoWhats, RedesSociais } from '../styled'
import whatsimage from '../whatsimage.png';
import outlook from '../outlook.png';
import { LanguageContext } from '../LanguageContext';
import logoFace from '../logoFace.jpg';

const logoInsta = "https://imgs.search.brave.com/-iZs2D5Fm5JTnhstzfW5L3w0xYTUexxKrGcMOjTrSiE/rs:fit:860:0:0/g:ce/aHR0cDovL3Bsb25l/LnVmcGIuYnIvZGNz/L2NvbnRlbnRzL2lt/YWdlbnMvaW5zdGFn/cmFtLWxvZ28ucG5n/L0BAaW1hZ2VzL2lt/YWdlLnBuZw";

const anoAtual = new Date().toLocaleDateString('pt-BR', {
  year: 'numeric'
});


function Footer() {
  const { texts } = useContext(LanguageContext);
  return (
    <ContainerFooter id='footer'>
      <Contato>
        <h4>{texts.footer.contato}</h4>
        <TitulosFooter>
          <ContatoWhats href="https://wa.me/5585987648997" target="_blank" rel="noreferrer">
            <Whatsapp src={whatsimage} alt='' /> (85) 99959-8091
          </ContatoWhats>
        </TitulosFooter>
        <TitulosFooter>
          <ContatoWhats href="mailto:fontenelesat@gmail.com" target="_blank" rel="noreferrer">
            <Whatsapp src={outlook} alt='' /> fontenelesat@gmail.com
          </ContatoWhats>
        </TitulosFooter>
      </Contato>

      <RedesSociais>
        <h4>{texts.footer.redes}</h4>
        <ContatoWhats href="https://www.instagram.com/fontenele.sat/" target="_blank" rel="noreferrer">
          <ImgInsta alt="" src={logoInsta} />
        </ContatoWhats>
        <a href="https://www.facebook.com/fontenelesat/" target="_blank" rel="noreferrer">
          <ImgInsta alt="" src={logoFace} />
        </a>
      </RedesSociais>
      
      <AnoAtual>
        <TitulosFooter>©{anoAtual} Fontenele Sat</TitulosFooter>
        <TitulosFooter>{texts.footer.tituloEmp}</TitulosFooter>
        <TitulosFooter>{texts.footer.endereco}</TitulosFooter>
      </AnoAtual>
    </ContainerFooter>
  )
};

export default Footer;

