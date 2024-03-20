import React, { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Secao1, Secao2, ImgCamera, ParagrafoUm, BotaoConferir, ImgPortao, ParagrafoDois, ParagrafoTres, Secao3, Paragrafo4, ProjetosContainer, Secao4, Paragrafo5, ImgFimCont } from '../styled';
import camera from '../camera1.png';
import { LanguageContext } from '../LanguageContext';
import portao from '../controlePortao (1).jpg'
import Trabalhos from './Trabalhos';
import img1 from '../electrician-1080573_1280.jpg';
import img2 from '../cerca.jpg'
import img3 from '../alarme.jpg';
import img4 from '../business.jpg';
import img5 from '../camera2.jpg';
import img6 from '../interfone.jpeg';
import img7 from '../antena.jpeg';


function Content() {
  const { texts } = useContext(LanguageContext);
  const refPortao = useRef();
  const refPrg5 = useRef();
  const refImgFim = useRef();

  useEffect(() => {
    const elementPrg5 = refPrg5.current;
    const elementPortao = refPortao.current;
    const elementoFimImg = refImgFim.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (elementPrg5) {
      observer.observe(elementPrg5);
    }

    if (elementPortao) {
      observer.observe(elementPortao);
    }

    if (elementoFimImg) {
      observer.observe(elementoFimImg);
    }
    return () => {
      if (elementPrg5) {
        observer.unobserve(elementPrg5);
      }
      if (elementPortao) {
        observer.unobserve(elementPortao);
      }
      if (elementoFimImg) {
        observer.unobserve(elementoFimImg);
      }
    };
  }, []);

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/#servicos");
  }

  return (
    <Container>
      <Secao1>
        <div>
          <ParagrafoUm>{texts.inicio.titulo1}</ParagrafoUm>
          <BotaoConferir onClick={handleClick}>{texts.inicio.btnConf}</BotaoConferir>
        </div>
        <ImgCamera alt="" src={camera} />
      </Secao1>
      <Secao2>
        <ImgPortao ref={refPortao} alt="" src={portao} />
        <div>
          <ParagrafoDois>{texts.inicio.prgfUm}</ParagrafoDois>
          <ParagrafoTres>{texts.inicio.prgfDois}</ParagrafoTres>
        </div>
      </Secao2>
      <Secao3>
        <Paragrafo4></Paragrafo4>
        <ProjetosContainer id='servicos'>
          <Trabalhos
            imagem={img1}
            descCard1={texts.inicio.card1}
          />
          <Trabalhos
            imagem={img2}
            descCard1={texts.inicio.card2}
          />
          <Trabalhos
            imagem={img3}
            descCard1={texts.inicio.card3}
          />
          <Trabalhos
            imagem={img5}
            descCard1={texts.inicio.card4}
          />
          <Trabalhos
            imagem={img6}
            descCard1={texts.inicio.card5}
          />
          <Trabalhos
            imagem={img7}
            descCard1={texts.inicio.card6}
          />
        </ProjetosContainer>
      </Secao3>
      <Secao4>
        <Paragrafo5 ref={refPrg5}>
          {texts.inicio.prgfSeis}
        </Paragrafo5>
      </Secao4>
      <Secao1>
        <ParagrafoUm>
          {texts.inicio.prgfSete}
        </ParagrafoUm>
        <ImgFimCont ref={refImgFim} alt='' src={img4} />
      </Secao1>
    </Container>

  );
}

export default Content;