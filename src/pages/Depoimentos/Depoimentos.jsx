import React, { useEffect, useState } from 'react';
import TableAnimais from "../../components/TableAnimais/TableAnimais";
import Navegacao from '../../components/Navegacao/Navegacao';

function Depoimentos() {
    const [animais, setAnimais] = useState(null);

    // Recupera a lista de todos os animais do servidor
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Navegacao />
            <br />
            {animais && (
                <TableAnimais animais={animais} />
            )}
        </>
    );
}

export default Depoimentos;
