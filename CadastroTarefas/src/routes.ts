import { Router, request, response, Request, Response} from 'express'
 
import { getTasks, saveTask, getTask, updateTask, deleteTask, finishedTask } from './controller/TarefaController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Cadastro de Tarefas' })
})
 
routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)
 
export default routes
