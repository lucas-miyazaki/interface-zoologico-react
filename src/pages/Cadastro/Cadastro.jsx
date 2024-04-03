import FormAnimal from "../../components/FormAnimal/FormAnimal";
import Navegacao from '../../components/Navegacao/Navegacao';
import './Cadastro.css'
function Cadastro() {
    return (
        <>
            <Navegacao />
            <div className="divCadastro">
                <h1 className="cadastro">Cadastro de ave</h1>
                <FormAnimal />
            </div>
        </>
    );
}

export default Cadastro