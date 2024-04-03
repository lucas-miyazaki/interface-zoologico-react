import { useState } from 'react';
import "./FormAnimal.css"
function FormAnimal() {
    const [formData, setFormData] = useState({
        nomeAnimal: '',
        generoAnimal: '',
        idadeAnimal: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/new/ave", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                console.log('Formulário enviado com sucesso');
                // Limpa os campos após o envio bem-sucedido
                setFormData({
                    nomeAnimal: '',
                    generoAnimal: '',
                    idadeAnimal: '',
                });
            })
            .catch(error => {
                console.error('Erro:', error);
                setError('Erro ao enviar formulário. Por favor, tente novamente.');
            });
    };

    return (
        <>
            <div className='divCadastro'>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="nomeAnimal"
                            value={formData.nomeAnimal}
                            onChange={handleChange}
                            placeholder='Nome da ave: '
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="number"
                            name="idadeAnimal"
                            value={formData.idadeAnimal}
                            onChange={handleChange}
                            placeholder='Idade: '
                        />
                    </label>
                    <br />
                    <label>
                        <select
                            name="generoAnimal"
                            value={formData.generoAnimal}
                            onChange={handleChange}
                        >
                            <option value="macho">Macho</option>
                            <option value="femea">Fêmea</option>
                            <option value="desconhecido">Desconhecido</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default FormAnimal;
