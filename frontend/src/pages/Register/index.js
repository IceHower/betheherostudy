import React, {useState} from 'react'
import './style.css'
import logo from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {  FiArrowLeft  } from 'react-icons/fi'
import api from '../../services/api'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const History = useHistory();
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data)
            alert(`Seu ID de acesso: ${response.data.id}`);
            History.push('/')
            

        } catch (err) {
            alert('Erro no cadastro tente novamente..');
        }

        
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the hero"/> 
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro aqui! e ajude pessoas a encontrarem a sua ONG :)</p>

                    <Link className="back-link" to ="/"><FiArrowLeft size="16" color="#E02041"/>Já tenho um cadastro</Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" 
                    value={name} 
                    onChange={e => setName(e.target.value)}/>

                    <input type="email" placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                    <input placeholder="WhatsApp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}/>
                    
                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}/>

                        <input placeholder="UF" style={{ width: 80 }} 
                        value={uf}
                        onChange={e => setUf(e.target.value)}/>

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}