//Below line for accessing input input information
const input = document.getElementById('input-info-val');
//Below line for accessing add task button information
const addbtn = document.getElementById('input-info-btn');
//Below line to make changes based on add button click
addbtn.addEventListener('click',function(){
    //If statement checks if there exists only space inputs or unncessary spaces in the string in both ends and trims the spaces
     if(input.value.trim()!=0){
       //Create localItems to get local storage object
    let localItems = JSON.parse(localStorage.getItem('Todo'));
    //if local items contains no elements then we will create list array 
    //and set  the local storage information into list array
    if(localItems ===null){
        listarray =[]
    }else{
        listarray = localItems;
    }
    //To push enetered task info into list array
    listarray.push(input.value);
    //To store in the local storage in key value pairs
    localStorage.setItem('Todo',JSON.stringify(listarray));
    }
    //Function calling to display task info on the webpage
    showlist();
});

//Function to display task information
function  showlist() {
    let output ='';
    let showList = document.querySelector('.task-list');
    let localItems = JSON.parse(localStorage.getItem('Todo'));
    if(localItems ===null){
        listarray =[]
    }else{
        listarray = localItems;
    }

    const pending =document.getElementById('pending-num');
    pending.textContent = listarray.length;

    listarray.forEach((data, index)=>{

        output += `
        <ul class="task-list">
        <li class="item"><input id="check-box"type="checkbox">${data}<span onclick ="deleteTask(${index})"><i class="fas fa-circle-xmark"></i></span></li>
        </ul>
        `
      
    });
    showList.innerHTML = output;
  }

  showlist();
  //Function to delete the task

  function deleteTask(index) {  
    let localItems = JSON.parse(localStorage.getItem('Todo'));
    listarray.splice(index,1);
    localStorage.setItem('Todo', JSON.stringify(listarray));
    showlist();

  }
  //Function to clear tasks
  function clearAll () { 
      localStorage.clear();
      showlist();
   }

   //Below block for changing the finished task attributes to look different
   const allInputs = document.querySelectorAll("input");
   allInputs.forEach(input =>{
       input.addEventListener('click',ele=>{
           if(ele.target.checked){
               ele.target.parentElement.style.backgroundColor ="aquamarine";
           }else{
            ele.target.parentElement.style.backgroundColor ="";
           }
       });

   });