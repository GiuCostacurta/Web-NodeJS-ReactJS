import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';
 
interface IAluno{
    id: number;
    nome: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}
 
const Alunos: React.FC = () => {
 
    const [alunos, setAlunos] = useState<IAluno[]>([])
 
    useEffect(() => {
        loadTasks()
    }, [])
 
    async function loadTasks() {
        const response = await api.get('/alunos')
        console.log(response);
        setAlunos(response.data)
    }
 
    function formatDate(date: Date){
        return moment(date).format('DD/MM/YYYY')
    }
 
    return (
        
        <div className="container">
            <br />
            <h1>Página de Alunos</h1>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Data de Atualização</th>
                    <th>Status</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{formatDate(aluno.updated_at)}</td>
                                <td>{aluno.finished ? "Finalizado" : "Pendente"}</td>
                                <td>
                                    <Button size="sm" variant="primary">Editar</Button>{' '}
                                    <Button size="sm" variant="success">Finalizar</Button>{' '}
                                    <Button size="sm" variant="warning">Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
 
export default Alunos;