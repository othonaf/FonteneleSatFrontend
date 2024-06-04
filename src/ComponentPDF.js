import { Button, SubtituloTabela, TituloTabela, Data, DadosCliente, Informacoes, FlexItem, Layoutorcamento, Subtitulo, Titulos, Tabela, ColunaTabela, LinhaTabela, LogoCabecalho, CabecalhoOrcamento, CabecalhoTitulos, DadosClienteDiv, ConteudoDoPDF, } from "./styled";
import { Table } from 'reactstrap';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Logo from "./FonteneleSatLogo.jpg";


const dataAtual = new Date().toLocaleDateString('pt-BR', {
   day: 'numeric',
   month: 'long',
   year: 'numeric'
});


const GerarPDF = () => {
   const input = document.getElementById('ConteudoDoPDF');
   html2canvas(input, { scale: 2 })
      .then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const imgWidth = 210;
         const imgHeight = canvas.height * imgWidth / canvas.width;
         const pdf = new jsPDF('p', 'mm', 'a4');
         pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

         const pageCount = pdf.getNumberOfPages();
         for (let i = 1; i <= pageCount; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.text('FONTENELE SAT – Sistema de Atendimento Técnico. Rua Irapuan Vidal 1426, Parque Potira, Caucaia - CE.', 10, 290);
            pdf.text('Fone: (85) 98764-8997. E-mail: fontenelesat@gmail.com', 10, 295);
         }
         pdf.save("orcamento.pdf");
      });
};

const ComponentPDF = (props) => {
   const valorTotal = props.itens.reduce((total, item) => {
      let qtde = parseFloat(item.qtde.replace(',', '.'));
      let valorUn = parseFloat(item.valorUn.replace(',', '.'));
      return total + (qtde * valorUn);
   }, 0);

   return (
      <Layoutorcamento>
         <div id='ConteudoDoPDF'>
            <ConteudoDoPDF />
            <CabecalhoOrcamento>
               <LogoCabecalho alt="" src={Logo} />
               <CabecalhoTitulos>
                  <Titulos>FONTENELE SAT</Titulos>
                  <Subtitulo>Sistema de Atendimento Técnico <br />
                     Comandos elétricos, Antena VHF, UHF Predial e Resid, CFTV,<br /> Interfone, Automatização de Portões,<br />
                     Cerca Elétrica, Sistema de Alarme, etc.
                  </Subtitulo>
               </CabecalhoTitulos>


            </CabecalhoOrcamento>

            <DadosClienteDiv>
               <DadosCliente>Cliente: {props.cliente}</DadosCliente>
               <DadosCliente>Endereço: {props.enderecoCliente}</DadosCliente>
               <DadosCliente>At.te: Sr(a) Cliente.</DadosCliente>
            </DadosClienteDiv>

            <div id='dadosDoOrcamento'>
               <TituloTabela>{props.titulo}</TituloTabela>
               <SubtituloTabela>{props.subtitulo}</SubtituloTabela>
            </div>

            <Tabela>
               <Table dark>
                  <thead>
                     <tr>
                        <ColunaTabela>Item</ColunaTabela>
                        <ColunaTabela>Descrição</ColunaTabela>
                        <ColunaTabela>Quantidade</ColunaTabela>
                        <ColunaTabela>Unidade</ColunaTabela>
                        <ColunaTabela>Valor Unitário R$</ColunaTabela>
                        <ColunaTabela>Valor Total R$</ColunaTabela>
                     </tr>
                  </thead>
                  <LinhaTabela>
                     {props.itens.map((item, index) => {
                        let qtde = parseFloat(item.qtde.replace(',', '.'));
                        let valorUn = parseFloat(item.valorUn.replace(',', '.'));
                        return (
                           <tr key={index}>
                              <ColunaTabela scope="row">{index + 1}</ColunaTabela>
                              <td>{item.descricao}</td>
                              <td>{item.qtde}</td>
                              <td>{item.unidade}</td>
                              <td>{valorUn.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                              <td>{(qtde * valorUn).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                           </tr>
                        );
                     })}

                  </LinhaTabela>
               </Table>
            </Tabela>
            <FlexItem>
               <DadosCliente>{`Valor Total deste orçamento é: ${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
               </DadosCliente>
            </FlexItem>
            <FlexItem>
               <Informacoes>
                  1 - CONDIÇÕES DE PAGAMENTO:<br />
                  •	À vista com 5% de desconto, ou a combinar.<br />
                  •	Em duas vezes, sendo cinquenta por cento no aceito <br />e o restante após a conclusão.
               </Informacoes>

               <Informacoes>
                  2 - PRAZO DE ENTREGA:<br />
                  {props.prazo} dias úteis, após o início. Início da obra imediato.<br />
                  Garantia do serviço de três meses.<br />

                  3 – Validade do orçamento:<br />
                  Orçamento válido por trinta dias.<br />
                  (A partir da data abaixo).

               </Informacoes>
            </FlexItem>
            <Data>
               {`Fortaleza, ${dataAtual}`}
            </Data>
            <Data>
               ____________________________________<br />
               Isaque Fontenele <br />
               Técnico Responsável
            </Data>
         </div>

         <FlexItem>
            <Button onClick={GerarPDF}>Download PDF</Button>
         </FlexItem>
      </Layoutorcamento>

   )
}

export default ComponentPDF;
