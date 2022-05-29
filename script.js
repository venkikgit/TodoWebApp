const input = document.getElementById('input-info-val');
const addbtn = document.getElementById('input-info-btn');
addbtn.addEventListener('click',function(){
     if(input.value.trim()!=0){
    let localItems = JSON.parse(localStorage.getItem('Todo'));
    if(localItems ===null){
        listarray =[]
    }else{
        listarray = localItems;
    }
    listarray.push(input.value);
    localStorage.setItem('Todo',JSON.stringify(listarray));
    }
    showlist();
});

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

  function deleteTask(index) {  
    let localItems = JSON.parse(localStorage.getItem('Todo'));
    listarray.splice(index,1);
    localStorage.setItem('Todo', JSON.stringify(listarray));
    showlist();

  }
  function clearAll () { 
      localStorage.clear();
      showlist();
   }

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