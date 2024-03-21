# Arquivos do projeto Frontend com ReactJS para a Webpage da empresa FonteneleSat.

# Esta aplicação React.js está funcionando no endereço http://fontenele-sat-frontend.vercel.app caso queira vê-la rodando.

1. Consiste em um site criado em React.js e estilizado com "styled-component".

2. Possui um mecanismo de tradução para Português, inglês e espanhol usando "LanguageProvider".

3. Possui uma seção de login que usa uma API criada por mim mesmo, que autentica o usuário e o redireciona para uma página de gerar orçamento. 
    * O usuário devidamente autenticado preenche um formulário com as informçãoes do cliente e os dados do orçamento, podendo adicionar novos itens através de um mecanismo feito com "useState" e "useEffect" do React. 
    * Após concluído o orçamento, o usuário clica no botão "Gerar PDF" e o PDF é gerado com a biblioteca "jsPDF"