import React, { useEffect, useState } from 'react';
import ComponentPDF from '../ComponentPDF';

const PaginaPDF = () => {
    const [itens, setItens] = useState([]);
    const [cliente, setCliente] = useState('');
    const [enderecoCliente, setEnderecoCliente] = useState('');
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');

    useEffect(() => {

        setItens(JSON.parse(localStorage.getItem('itens')));
        setCliente(localStorage.getItem('cliente'));
        setEnderecoCliente(localStorage.getItem('enderecoCliente'));
        setTitulo(localStorage.getItem('titulo'));
        setSubtitulo(localStorage.getItem('subtitulo'));
    }, []);

    return (
        <ComponentPDF
            itens={itens}
            cliente={cliente}
            enderecoCliente={enderecoCliente}
            titulo={titulo}
            subtitulo={subtitulo}
        />
    );
}

export default PaginaPDF;
