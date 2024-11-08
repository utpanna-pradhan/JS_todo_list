function addtolist(){
    //access both input field and todo div
    var taskname=document.getElementById('taskname').value
    //main div
    var tododiv = document.getElementById('mytodo')

    //in todo div we have 2 things,1 is the li task and other one is the delete button
    //li is the list item and delete item
    //we can not add this two item directly, we need to put them inside a parent div
    //when we click on add button we will create a new div ,then create a li item then create delete btn
    //now add the li item and delete btn inside new div
    //now add new div inti todo main div
    var newtodoitem = document.createElement('div')

    //empty li element store value
    var todoname = document.createElement('li')
    //add text to this empty li
    todoname.innerText = taskname

    //create empty delete btn
    var deletebtn = document.createElement('i')
    //add class to i to become delete btn
    deletebtn.classList.add('fa-regular')
    deletebtn.classList.add('fa-trash-can')

    //add li and delete btn to todo main div
    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    //add new div in to todo div ie tododiv
    tododiv.appendChild(newtodoitem)
}

// delete button task
//access main todo div 
var tododiv = document.getElementById('mytodo')
//add event listner on click after clicking on main div execute delete function
tododiv.addEventListener('click' , deleteitem)

//entire mytodo contain all task,clicking on wherever inside mydoto deleteitem() will executed
//check whether we are clicking on delete button or somewhere else

//if click on li nothing will happen,when we click on delete button then remove the parent element i.r the entire line, check if classlist[o] is fa-regular i.e the initial class for i then it will perform delete operation
function deleteitem(e){
   const element = e.target
   if(element.classList[0] =='fa-regular')
   {
    element.parentElement.remove()
   }
}
