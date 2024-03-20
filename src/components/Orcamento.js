import React, { useState } from 'react';
import { InputGroupText, Input } from 'reactstrap';
import { ItemTabela, ItensCliente, OrcamentoDiv, InputGroup, InputText, Button, FlexItem, CheckboxDiv, SubtituloTabela } from '../styled';

const Orcamento = () => {
    const [itens, setItens] = useState([
        {
            descricao: '',
            qtde: '',
            tipo: '',
            valorUn: '',
            valorTotal: ''
        }
    ]);
    const [cliente, setCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');

    const adicionarItem = () => {
        setItens([...itens,
        {
            descricao: '',
            qtde: '',
            tipo: '',
            valorUn: '',
            valorTotal: ''
        }
        ]);
    }

    const atualizarItem = (index, campo, valor) => {
        const novosItens = [...itens];
        novosItens[index][campo] = valor;
        setItens(novosItens);
    };

    const handleGerarPDF = () => {
        localStorage.setItem('itens', JSON.stringify(itens));
        localStorage.setItem('cliente', cliente);
        localStorage.setItem('enderecoCliente', enderecoCliente);
        localStorage.setItem('titulo', titulo);
        localStorage.setItem('subtitulo', subtitulo);

        window.open('./PaginaPDF', '_blank');
    };

    return (
        <OrcamentoDiv>
            <ItensCliente>
                <h3>Informações do Orçamento:</h3>
                <InputGroup size="lg">
                    <InputGroupText>
                        Cliente:
                    </InputGroupText>
                    <InputText onChange={e => setCliente(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupText>
                        Endereço do Cliente:
                    </InputGroupText>
                    <InputText onChange={e => setEnderecoCliente(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroupText>
                        Título do Orcamento:
                    </InputGroupText>
                    <InputText onChange={e => setTitulo(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup size="sm">
                    <InputGroupText>
                        Descrição:
                    </InputGroupText>
                    <InputText onChange={e => setSubtitulo(e.target.value)} rows={3} />
                </InputGroup>
            </ItensCliente>

            <SubtituloTabela>Itens da tabela:</SubtituloTabela>
            {itens.map((item, index) => (
                <ItemTabela key={index}>
                    <h4>Item {index + 1}:</h4>
                    <InputGroup size="sm">
                        <InputGroupText>
                            Descrição:
                        </InputGroupText>
                        <InputText onChange={e => atualizarItem(index, 'descricao', e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup size="sm">
                        <InputGroupText>
                            Quantidade:
                        </InputGroupText>
                        <InputText onChange={e => atualizarItem(index, 'qtde', e.target.value)} />
                    </InputGroup>
                    <br />
                    <InputGroup size="sm">
                        <InputGroupText>
                            Unidade:
                        </InputGroupText>
                        <CheckboxDiv>
                            <label>
                                <Input type="radio" name={`unidade${index}`} value="Peça"
                                    onChange={e => atualizarItem(index, 'unidade', e.target.value)} /> Peça
                            </label>
                            <label>
                                <Input type="radio" name={`unidade${index}`} value="Metros"
                                    onChange={e => atualizarItem(index, 'unidade', e.target.value)} /> Metros
                            </label>
                            <label>
                                <Input type="radio" name={`unidade${index}`} value="Serviços"
                                    onChange={e => atualizarItem(index, 'unidade', e.target.value)} /> Serviços
                            </label>
                        </CheckboxDiv>
                    </InputGroup>
                    <br />
                    <InputGroup size="sm">
                        <InputGroupText>
                            Valor Unitário:
                        </InputGroupText>
                        <InputText onChange={e => atualizarItem(index, 'valorUn', e.target.value)} />
                    </InputGroup>
                </ItemTabela>
            ))}
            <FlexItem>
                <Button onClick={adicionarItem}>Novo Item</Button>
                <Button onClick={handleGerarPDF}>Visualizar PDF</Button>
            </FlexItem>

        </OrcamentoDiv>
    );
};

export default Orcamento;
