import React, { useEffect, useState } from 'react';
import './CardAnimal.css';

const CardAnimal = ({ animal, imgSource }) => {

    const exibeID = (id) => {
        console.log(id);
    };

    return (
        <>
            {/* {passaros.map(passaro => ( */}
            <div className='card-animal' style={{backgroundColor: "#d8ce00"}}>
                    <img src={imgSource} alt="Imagem não encontrada" style={{ height: "150px", width: "200px", borderRadius: "20px" }} />
                    <p>Nome: {animal.nomeanimal}</p>
                    <p>Gênero: {animal.generoanimal}</p>
                    <p>Espécie: {animal.tipoanimal}</p>
                    <p>Envergadura: {animal.envergadura}</p>
                </div>
            {/* ))} */}
        </>
    );
};

export default CardAnimal;
