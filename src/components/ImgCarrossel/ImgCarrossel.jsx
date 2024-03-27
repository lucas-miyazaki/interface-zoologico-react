import React from 'react';
import './ImgCarrossel.css';
import Carousel from "react-bootstrap/Carousel"
import Animal1 from '../../assets/animais/animais1.jpg';
import Animal2 from '../../assets/animais/animais2.jpg';
import Animal3 from '../../assets/animais/animais3.jpg';
import Animal4 from '../../assets/animais/animais4.jpg';
import Animal5 from '../../assets/animais/animais5.jpg';

function ImgCarrossel() {
    return (
        <>
        <div className='ctn-carrossel'>
            <Carousel>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Animal1}
                        alt="Imagem #1"
                    />
                    <Carousel.Caption>
                        <h3>Tucano (opcional)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia deserunt asperiores similique ullam maiores labore voluptate nemo nam blanditiis, neque rem impedit quos dolore! Illum dicta itaque et obcaecati! (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Animal2}
                        alt="Imagem #2"
                    />
                    <Carousel.Caption>
                        <h3>Matando a sede (opcional)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde consequatur veniam cum, possimus natus. Amet, ea nihil aperiam officiis tenetur consequuntur quaerat tempora aliquam velit doloribus in ullam aspernatur! (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Animal3}
                        alt="Imagem #3"
                    />
                    <Carousel.Caption>
                        <h3>Posando para a foto (opcional)</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veniam earum mollitia aut voluptates autem sunt sint soluta quidem obcaecati fuga id quam qui, reiciendis fugit ab quis laborum provident? (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Animal4}
                        alt="Imagem #4"
                    />
                    <Carousel.Caption>
                        <h3>Maurício? (opcional)</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quo placeat animi molestiae quam repudiandae consequatur non expedita explicabo sunt ipsa, nam ratione nemo beatae omnis, praesentium alias quisquam atque? (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Animal5}
                        alt="Imagem #5"
                    />
                    <Carousel.Caption>
                        <h3>Zoológico (opcional)</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil numquam quas at dolorum culpa eum cum! Animi, amet neque officiis laboriosam nostrum eligendi quis porro atque dolores ut perspiciatis totam? (opcional)</p>
                    </Carousel.Caption>
                </Carousel.Item>

                
            </Carousel>
        </div>
        </>
    );
}

export default ImgCarrossel;
