const btnAdd = document.getElementById("btnAdd");
const listContainer = document.getElementById("list-container");
const form = document.getElementById("form-input-box");

//Funcion para añadir las tareas
function addTask() {

	var addTask = document.getElementById("add-task").value;
	if (addTask.length == 0) {
		

	}else{
		//Creando la etiqueta "li" donde se agregrará la tarea
		let li = document.createElement("li");
		li.innerHTML = addTask;
		listContainer.appendChild(li);
		addTask.value = "";

		//Agregando imagen de borrar
		var image = document.createElement('img');
		image.src = '../img/delete.png';
		li.appendChild(image);
	}
	addTask.value = "";
	saveData();
}

//Evento click en el boton añadir
btnAdd.addEventListener("click", ()=>{
	addTask();
	saveData();
});

//Evento click para tachar la tarea
listContainer.addEventListener("click", function(e){

	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();

		Swal.fire(
		  'Good job!',
		  'You clicked the button!',
		  'success'
		)
	}
	else if(e.target.tagName === "IMG"){
		e.target.parentElement.remove();
		saveData();
	}

}, false);

//Funcion para guardar los datos en el localStorage
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
	form.reset(); //Resetear el formulario
}

//Funcion para mostrar las tareas desde el localStorage
function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}

showTask()
