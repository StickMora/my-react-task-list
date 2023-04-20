function TaskList() {
    return <form> <input type="text" placeholder="Agregar nueva tarea"/>
        <button className="btn-add" type="submit">Agregar</button>
        <h3>N° Tareas</h3>
        <h3>Tareas pendientes</h3>
    </form>
    
}
export default TaskList;