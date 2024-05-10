import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableAnimais = ({ animais }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className='cabecalho'>
                    <th style={{backgroundColor: "#575448", color: 'white'}}>Nome</th>
                    <th style={{backgroundColor: "#575448", color: 'white'}}>Idade</th>
                    <th style={{backgroundColor: "#575448", color: 'white'}}>Gênero</th>
                    <th style={{backgroundColor: "#575448", color: 'white'}}>Envergadura</th>
                </tr>
            </thead>
            <tbody>
                {animais.map((animal, index) => (
                    <tr key={index}>
                        <td style={{backgroundColor: "#d8ce00"}}>{animal.nomeanimal}</td>
                        <td style={{backgroundColor: "#d8ce00"}}> {animal.idadeanimal}</td>
                        <td style={{backgroundColor: "#d8ce00"}}>{animal.generoanimal}</td>
                        <td style={{backgroundColor: "#d8ce00"}}>{animal.envergadura}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default TableAnimais;
