const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

/*Agregamos la fechs*/
const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString( 'es', { month: 'short'});
    dateYear.textContent = date.toLocaleString( 'es', { year: 'numeric'});
};

const addNewTask = event=>{
    event.preventDefault(); //para que no nos habra en otra pagina
    const {value} =event.target.taskText;
    if(!value)return //si no se ha escrito un nuevo recordatorio el sistema mo hace nada

    const task = document.createElement('div'); // agregamos un div
    task.classList.add('task', 'roundBorder'); //agregamos el task 
    task.addEventListener('click', changeTaskState) //al hacer click marcamos como done
    task.textContent = value;   //agregamos el value
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event =>{
    event.target.classList.toggle('done');
};

const order =() => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done]; //retornamos primero el toDo despues el done
};

const renderOrderedTasks = () =>{
    order().forEach(el => tasksContainer.appendChild(el))
};

setDate();