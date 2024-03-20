import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pai } from './styled';
import { LanguageProvider } from './LanguageContext';
import SobreNos from './components/SobreNos';
import Orcamento from './components/Orcamento';
import PaginaPDF from './components/PaginaPDF';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <LanguageProvider>
        <Pai>
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Orcamento" element={<Orcamento />} />
            <Route path="/PaginaPDF" element={<PaginaPDF />} />
          </Routes>
          <Footer />
        </Pai>
      </LanguageProvider>
    </Router>

  );
}

export default App;
