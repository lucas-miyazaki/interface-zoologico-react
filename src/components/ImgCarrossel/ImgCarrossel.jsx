import { useState, useEffect } from 'react';
import './ImgCarrossel.css';
import Carousel from "react-bootstrap/Carousel"
import jsonData from "../../assets/json/imagens.json";


function ImgCarrossel() {
    const [ImgCarrossel, setImgCarrossel] = useState([]);

    useEffect(() => {
        setImgCarrossel(jsonData);
    });
    return (
            <div className='ctn-carrossel'>
                <Carousel>
                    {ImgCarrossel.map(animal => (
                    <Carousel.Item interval={1500}>
                        <img
                            className= "d-block w-100"
                            src={animal.src}
                            alt={animal.Caption}
                            style={{"height": "400px"}}
                        />
                        <Carousel.Caption>
                            <h3>{animal.Caption}</h3>
                            <p>{animal.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
            </Carousel>
        </div>
    );
}

export default ImgCarrossel;
