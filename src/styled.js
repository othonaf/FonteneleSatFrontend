import styled from 'styled-components'
import { Nav as RSNav, NavLink as RSNavLink, NavItem as RSNavItem, Card as RSCard, CardText as RSCardText, Container as RSContainer, InputGroup as RSInputGroup, Input as RSInput } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';
import Logo from './FonteneleSatLogo.jpg';

// ---------------- ------ - --------- Estilos da seção Header (Navbar):
export const Nav = styled(RSNav)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-between;
    list-style-type: none; 
    align-items: end;
    margin-right: 5%;

    @media (max-width: 768px) {
      display: grid;
      font-size: 50px;
      
  }
`;
export const NavItem = styled(RSNavItem)`
    align-items: end;
    flex-grow: 1;
    text-decoration: none;
    border-left: 140px solid white; 
    border-top: 50px;
    @media (max-width: 768px) {
        padding-top: 5%;
    }
`;
export const NavItemCont = styled(RSNavLink)`
    align-items: end;
    flex-grow: 1;
    text-decoration: none;
    border-left: 50px solid white; 
    border-top: 50px;
    @media (max-width: 768px) {
        padding-top: 5%;
    }
    
`;
export const NavLink = styled(RSNavLink)`
    justify-content: center;
    font-family: "Chakra Petch", sans-serif;
    font-weight: 700;
    font-style: normal;
    color: black;
    align-items: end;
    text-decoration: none;
    
    &:hover {
        font-size: 30px; 
    }
    
`;

export const NavDiv = styled.div`
    
    margin-right: 5%;
`;
export const BotoesDiv = styled.div`
    margin-right: 0%;
    padding-left: 70%;
`;
export const Headers = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: right;
    font-family: 'Chakra Petch', sans-serif;
    font-size: 20px;
    /* background-color: aqua; */
`;

export const MenuIcon = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;
export const LogoHeader = styled.img`
    margin-top: 15px;
    margin-left: 40px;
    width: 102px;
    height: 151px;
    cursor: pointer;
`;
export const LogoCabecalho = styled.img`
    margin-top: 15px;
    margin-left: 40px;
    width: 122px;
    height: 191px;
    padding-left: 70%;
`;
export const CabecalhoOrcamento = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: left;
`;
export const ConteudoDoPDF = styled.div`
    background-image: url(${Logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
        &::after {
        content: "";
        background: rgba(255, 255, 255, 0.8); 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;
export const CheckboxDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 10%;
    padding-bottom: 10%;
`;
export const CabecalhoTitulos = styled.div`
    display: grid;
    align-items: left;
    padding-right: 50%;
    
`;
export const DadosClienteDiv = styled.div`
    padding-left: 5%;
    padding-top: 7%;
`;

export const BandButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;
export const BotoesTraducao = styled.div`
    margin-top: 10px;
    align-items: first baseline;
`;
export const ButtonBrasil = styled.img`
    border-radius: 50%;
    width: 38px;
    height: 38px;
`;
export const Linker = styled(RRLink)`
    color: black;
    align-items: center;
    text-decoration: none;
`;
export const ItemTabela = styled.div`
    padding-left: 7%;
    align-items: center;
    width: 50%;
    
`;
export const ItensCliente = styled.div`
    padding-left: 7%;
    padding-bottom: 7%;
    align-items: center;
    width: 50%;
`;

//---------------- ------ - ------------ Estilos da seção 'Login':

export const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #E6E6FA;
`;
export const BotaoLoginDiv = styled.div`
    padding-left: 15%;
    justify-content: center;
    width: 100%;
    @media (max-width: 767px) {
        padding-left: 10%;
        margin-right: 270px;
        margin-left: 0%;
    }
`;

export const DivLoginInt = styled.div`
    width: 30%;
    @media (max-width: 767px) {
        width: 70%;
    }
`;
export const DivInput = styled.div`
    display: flex;
    padding-top: 2%;
    padding-bottom: 2%;
    align-items: center;
    justify-content: center;
    
`;
export const TituloLogin = styled.h1`
    display: flex;
    color: black;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 0%;
    padding-bottom: 0%;
`;
//---------------- ------ - ------------ Estilos da seção 'Content':

export const Container = styled(RSContainer)`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 2%;
    margin-top: 20px;
    background-color: #656161;
    font-size: larger;
    font-family: "Chakra Petch", sans-serif;
    color: #ffffff;
    position: relative;

    @media (max-width: 767px) {
        padding: 10px; 
        font-size: 22px; 
        width: auto;
    }
`;
export const ImgCamera = styled.img`
    padding-top: 100px;
    padding-right: 80px;
    width: 493px;
    height: 480px;
    animation: ImgCamera 1s forwards;
    
   @keyframes ImgCamera {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @media (max-width: 767px){
        padding-left: 300px;
        align-items: center;
    }
`;

export const ParagrafoUm = styled.p`
    padding: 120px;
    padding-bottom: 0%;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 60px;
    animation: ParagrafoUm 1s forwards;

    @keyframes ParagrafoUm {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
`;
export const ImgFimCont = styled.img`
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 80px;
    width: 603px;
    height: 500px;
    border-radius: 25%;
    opacity: 0;

    &.animate {
        opacity: 1;
        animation: slide-left 1.5s forwards;
    }

    @keyframes slide-left {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    @media (max-width: 767px) {
        padding-left: 250px;
        align-items: center;
        border-radius: 5%;
        
    }
`;
export const ImgPortao = styled.img`
    padding: 100px;
    width: 461px; 
    height: 496px;
    border-radius: 50%;
    opacity: 0;

    &.animate {
        opacity: 1;
        animation: slide-up 1.5s forwards;
    }

    @keyframes slide-up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    @media (max-width: 767px) {
        opacity: 1;
        padding-left: 300px;
        border-radius: 0;
        width: 750px;
        height: 550px;
        padding-left: 170px;
    }
`;

export const ParagrafoDois = styled.p`
    padding: 120px;
    padding-bottom: 0%;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 50px;
    color: white;

    @media (max-width: 767px) {
        font-size: 80px;
        text-align: center;
    }
`;
export const ParagrafoTres = styled.p`
    padding: 50px;
    padding-bottom: 0%;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 25px;
    color: white;

    @media (max-width: 767px) {
        font-size: 60px;
        text-align: center;
    }
`;
export const Paragrafo5 = styled.p`
    padding: 210px;;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 50px;
    color: white;
    text-shadow: 5px;
    opacity: 0;

    @media (max-width: 767px) {
        font-size: 60px;
        text-align: center;
    }
    &.animate {
        opacity: 1;
        animation: slide-up 1s forwards;
    }
    
    @keyframes slide-up {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }

`;
export const Secao1 = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #DBE0E2;
    padding-bottom: 30px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr; 
        align-items: center;
        padding: 0px;
        max-width: auto;
        font-size: 80px;
    }
`;
export const Secao2 = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    background-color: #469ACA;
    align-items: center;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr; 
        padding: 0px;
        max-width: auto;
        align-items: center;
        font-size: 100px;
    }
`;
export const Secao3 = styled.div`
    display: grid;
    background-color: #DBE0E2;
    padding-bottom: 80px;
    align-items: center;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr; 
        align-items: center;
        padding: 0px;
        max-width: auto;
        font-size: 40px;
    }
`;
export const Secao4 = styled.div`
    padding-top: 30px;
    display: flex;
    padding-bottom: 80px;
    flex-direction: block;
    background-color: #469ACA;
    text-align: center;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr; 
        align-items: center;
        padding: 0px;
        max-width: auto;
        font-size: 40px;
    }
`;
export const SecaoSn = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: #DBE0E2;
    padding-bottom: 80px;
    align-items: center;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr; 
        align-items: center;
        padding: 0px;
        font-size: 40px;
    }
`;
export const SobreNosTit = styled.h4`
    font-family: "DMSans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
    padding: 30px;
    padding-top: 50px;
    text-align: justify;

`;
export const MissaoTit = styled.h4`
    font-family: "DMSans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    padding: 30px;
    padding-top: 50px;
    text-align: justify;

`;
export const Paragrafo4 = styled.p`
    padding-left: 270px;
    padding-top: 20px;
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 50px;
`;
export const CadImage = styled.img`
    align-items: center;
    width: 100%;
    height: 50%; 

    @media (max-width: 767px) {
      width: auto;
      height: 250px;
    }
`;
export const ProjetosContainer = styled.div`
    width: 100%;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;
    color: #fff;

    @media (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
      width: auto;
      align-items: center;
      margin-bottom: 20px;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
`;
export const CardsProjetos = styled(RSCard)`
    align-items: center;
    background-color: #217AAB;
    margin: 2%;
    width: 90%;
    height: 80%;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #656161;
    }
    @media (max-width: 768px) {
        align-items: center;
        width: 90%;
        height: 520px;
        margin-bottom: 60px;
        margin-left: 50px;
        grid-template-columns: 1fr;
  }
`;

export const DescricaoProjt = styled(RSCardText)`
    margin-top: 50px;
    margin-left: 10px;
    font-family: "DM Sans", sans-serif;
    font-size: 35px;
    font: bolder;
    align-items: center;

    @media (max-width: 500px){
      font-size: larger;
    }
`;

export const BotaoConferir = styled.button`
    background-color: #469ACA;
    font-family: "DM Sans", sans-serif;
    font-size: 45px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    border: #469ACA;
    width: 270px;
    height: 100px;
    cursor: pointer;
    margin-left: 150px;
    margin-top: 5px;
    &:hover {
        background-color: #656161; 
    }
`;

export const Tabela = styled.table`
    display: flex;
    justify-content: center;
`;
export const Pai = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    position: relative;

    @media (max-width: 567px) {
        display: grid;
        grid-template-columns: 1fr; 
        font-size: 40px;
        width: 100vw;
    }
    
`;
export const Titulos = styled.h1`
    display: flex;
    justify-content: center;
    font-family: Cooper Black;
    margin-bottom: 0%;
    padding-bottom: 0%;
`;
export const TituloTabela = styled.h1`
    display: flex;
    justify-content: center;
    margin-bottom: 0%;
    
`;
export const SubtituloTabela = styled.h3`
    display: flex;
    justify-content: center;
    padding-top: 0px;
    margin-top: 1%;
    
`
export const Subtitulo = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 0%;
    
`
export const Layoutorcamento = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
`;

export const Button = styled.button`
    background-color: #469ACA;
    margin: 5%;
    font-family: "DM Sans", sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    align-items: center;
    width: 270px;
    height: 70px;
    cursor: pointer;
    margin-top: 5px;
    &:hover {
        background-color: #656161; 
    }
        
`
export const FlexItem = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 35px;
    
`;


export const Informacoes = styled.p`
    display: flex;
    justify-content: center;
    text-align: left;
    font-family: "DM Sans", sans-serif;
    &:first-child {
    margin-right: 60px;
  }
  
  &:last-child {
    margin-left: 60px; 
  }
`
export const DadosCliente = styled.p`
    margin-left: 20px;
    text-align: left;
    font-family: "Kanit", sans-serif;
    font-style: bolder;
    font-size: 20px;
    margin-top: 1px;
    margin-bottom: 1px;
`
export const Data = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 20px;
`;
// ------------------------- ---------- Seção "Tabela":

export const ColunaTabela = styled.th`
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
`;
export const LinhaTabela = styled.tbody`
    text-align: center;
`;
export const DivRodape = styled.div`
    justify-content: center;
    padding-left: 5%;
`;

export const OrcamentoDiv = styled(RSContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    font-size: medium;
    font-family: "Kanit", sans-serif;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #E6E6FA;

    @media (max-width: 767px) {
        padding: 10px;
        width: 100%;
    }
`;
export const InputGroup = styled(RSInputGroup)`
    height: 30px;;
    width: 80%;
    margin-bottom: 10px;
    padding-top: 3%;
    
`;

export const InputText = styled(RSInput)`
    resize: vertical;
    min-height: 35px;
    width: 100%;
    font-size: medium;
    
`;
// ------------------------- ---------- Seção "Footer":

export const ContainerFooter = styled(RSContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    margin-right: 0%;
    margin-left: 0%;
    background-color: #656161;
    font-size: larger;
    font-family: "Chakra Petch", sans-serif;
    color: #ffffff;
    width: 100%; /* Alterado de 100% para 100vw */
    position: relative;

    @media (max-width: 767px) {
        padding: 10px; 
        font-size: 22px; 
        /* Removido width: auto; */
    }
`;

export const AnoAtual = styled.div`
  grid-column: span 2;
  text-align: center;
  
`;
export const Contato = styled.div`
  padding-left: 120px;
  text-align: left;
`;
export const RedesSociais = styled.div`
  padding-right: 120px;
  text-align: right;
`;
export const ContatoWhats = styled.a`
  text-decoration: none;
  color: white;
`;
export const Whatsapp = styled.img`
    height: 20px;
    width: 20px;
`;
export const TitulosFooter = styled.h6`
    margin-top: -18px;
    font-size: medium;
 
`;
export const ImgInsta = styled.img`
    height: 40px;
    width: 40px;
    padding: 10px;
    border-radius: 20%;
`;