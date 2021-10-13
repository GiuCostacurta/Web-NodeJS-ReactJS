import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'
import './index.css';
import api from '../../../services/api';
import moment from 'moment';
 
interface IAluno{
    id: number;
    nome: string;
    ra: string;
    dataNascimento: string;
    endereco: string;
    default: false
    matriculado: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Detail: React.FC = () => {
 
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [aluno, setAluno] = useState<IAluno>()
 
    function back(){
        history.goBack()
    }
 
    async function findAluno(){
        const response = await api.get<IAluno>(`/alunos/${id}`)
        console.log(response)
        setAluno(response.data)
    }
 
    useEffect(() => {
        findAluno()
    }, [id])
 
    return (
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Detalhes do Aluno</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{aluno?.nome}</Card.Title>
                    
                    <Card.Text>
                    {aluno?.ra}
                    <br/>
                    {aluno?.dataNascimento}
                    <br />
                    {aluno?.endereco}
                    <br />
                    {aluno?.matriculado ? "Matriculado" : "Pendente"}
                    <br />
                    <strong>Data de Cadastro: </strong>
                    {moment(aluno?.created_at).format('DD/MM/YYYY')}
                    <br />
                    </Card.Text>
                </Card.Body>
            </Card>
 
        </div>
    );
}
 
export default Detail;