var todos=[];
var input=prompt("what would you like to do?");

while(input !=="quit")
{
if(input =="list")
{
	listTodo();
}
else if(input =="new")
{
	newTodo();
}
else if(input =="delete")
{
    deleteTodo();
}
var input=prompt("what would you like to do?");
}
console.log("OK ,You Quit The App!");


function listTodo(){

	console.log("***********");
	todos.forEach(function(todo)
	{
	console.log(todo);
});
	console.log("***********");
}
function newTodo(){
	  var newtodos=prompt("Enter new todo");
	todos.push(newtodos);
}

function deleteTodo(){
	var index=prompt("Enter a specific posion to delete todos");
    todos.slice(index,1);
    console.log("Delete todo");
}