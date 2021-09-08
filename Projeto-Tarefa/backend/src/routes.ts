import { Router, request, response, Request, Response} from 'express'
 
import { getTasks } from './controller/TasksController';
import { saveTask } from './controller/TasksController';
import { getTask } from './controller/TasksController';
import { updateTask } from './controller/TasksController';
import { deleteTask } from './controller/TasksController';
import { finishedTask } from './controller/TasksController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)
 
export default routes


