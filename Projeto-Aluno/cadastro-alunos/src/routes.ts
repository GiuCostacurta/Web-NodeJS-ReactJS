import { Router, request, response, Request, Response} from 'express'
 
const routes = Router()
 
import { getAlunos } from './controller/AlunoController';
import { saveAluno } from './controller/AlunoController';
import { getAluno } from './controller/AlunoController';
import { updateAluno } from './controller/AlunoController';
import { deleteAluno } from './controller/AlunoController';
import { finishedAluno } from './controller/AlunoController';

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Cadastro de Alunos' })
})
 
routes.get('/alunos', getAlunos)
routes.post('/alunos/salvar', saveAluno)
routes.get('/alunos/:id', getAluno)
routes.put('/alunos/:id', updateAluno)
routes.delete('/alunos/:id', deleteAluno)
routes.patch('/alunos/:id', finishedAluno)
 
export default routes
