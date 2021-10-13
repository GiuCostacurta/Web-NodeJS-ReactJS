import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../../services/api';
import './index.css';
import { useHistory, useParams } from 'react-router-dom';
 
interface IAluno{
    nome: string;
    ra: string;
    dataNascimento: string;
    endereco: string;
}
 
const Alunos: React.FC = () => {
    
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
  
    const [model, setModel] = useState<IAluno>({
        nome: '',
        ra: '',
        dataNascimento:'',
        endereco:''
    })
 
    useEffect(() => {
        console.log(id)
        if (id !== undefined) {
            findAluno(id)
        }
    }, [id])
 
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
 
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
 
        if (id !== undefined) {
            const response = await api.put(`/alunos/:id/${id}`, model)
        }
        else{
            const response = await api.post('alunos/salvar', model)
        }
        back()
    }
 
    function back(){
        history.goBack()
    }
 
    async function findAluno(id: string){
        const response = await api.get(`/alunos' ${id}`)
        console.log(response)
        setModel({
            nome: response.data.nome,
            ra: response.data.ra,
            dataNascimento: response.data.dataNascimento,
            endereco: response.data.endereco
        })
    }
 
    return (
        
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Novo Aluno</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            value={model.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                            type="text"
                            name="ra"
                            value={model.ra}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                   <Form.Group>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            type="text"
                            name="dataNascimento"
                            value={model.dataNascimento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>
 
                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="endereco"
                            value={model.endereco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>
 
                    <Button variant="dark" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
}
 
export default Alunos;