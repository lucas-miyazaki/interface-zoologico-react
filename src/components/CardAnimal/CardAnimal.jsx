import './CardAnimal.css'
import imgNotFound from '../../assets/img-not-found.png'

function CardAnimal({ animal }) {

    const exibeID = () => {
        console.log(animal.idanimal, "\n", animal);
    }

    let conteudoEspecifico;

    if (animal.tipoanimal === "Ave") {
        conteudoEspecifico = <p>Envergadura: {animal.envergadura}</p>;
    } else if (animal.tipoanimal === "Mamifero") {
        conteudoEspecifico = <p>Raça: {animal.especie}</p>;
    } else if (animal.tipoanimal === "Reptil") {
        conteudoEspecifico = <p>Escamas: {animal.tipodeescamas}</p>;
    }

    return (
        <div className='card-animal'>
            <img src={imgNotFound} alt="Imagem não encontrada" onClick={exibeID} />
            <p>Nome: {animal.nomeanimal}</p>
            <p>Gênero: {animal.generoanimal}</p>
            <p>Espécie: {animal.tipoanimal}</p>
            {conteudoEspecifico}
        </div >
    );
}

export default CardAnimal;