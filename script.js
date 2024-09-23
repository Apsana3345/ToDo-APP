const checkboxList=document.querySelectorAll('.custom-checkbox')
const inputFields=document.querySelectorAll('.goal-list')
const errorLabel=document.querySelector('.errorlabel')
const progressBar=document.querySelector('.progressBar')
const progressValue=document.querySelector('.progress-value')

const allGoals=JSON.parse(localStorage.getItem('allGoals')) ||{}

let completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length;
 progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`
//  progressValue.style.width=`${completedGoalsCount/3*100}%`
// console.log(completedGoalsCount);



checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allGoalsFilled=[...inputFields].every(function(input){
            return input.value
        })
        if (allGoalsFilled){
        checkbox.parentElement.classList.toggle("completed");
        progressValue.style.width=`${completedGoalsCount/3*100}%`
        const inputId=checkbox.nextElementSibling.id
        allGoals[inputId].completed=!allGoals[inputId].completed
        completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length;
        progressValue.style.width=`${completedGoalsCount/3*100}%`
        progressValue.firstElementChild.innerText=`${completedGoalsCount}/3 completed`
localStorage.setItem('allGoals',JSON.stringify(allGoals))
        // errorLabel.style.display = 'none'; // Hide the error label
        // progressBar.classList.remove('show-error');

    }
    else {
        // errorLabel.style.display = 'block'; // Show the error label
        progressBar.classList.add('show-error'); // Add error class to progress bar
    }


    })
})
inputFields.forEach((input)=>{
//    console.log(  allGoals[input.id])
   input.value= allGoals[input.id].name
   if(allGoals[input.id].completed){
    input.parentElement.classList.add('completed')
   }
        // if (input.value.trim() !== '') {
        //     input.style.color = 'black'; 
        // } else {
        //     input.style.color = '#D9D9D9';
        // }

    input.addEventListener('focus',()=>{
        // if (input.value.trim()===''){
        //     input.style.color='black';
        // }
        progressBar.classList.remove('show-error');
    })

    // input.addEventListener('blur', () => {
    //     if (input.value.trim() === '') {
    //         input.style.color = '#D9D9D9'; 
    //     }})
    
    input .addEventListener('input',(e)=>{
        allGoals[input.id]={name:input.value,completed:false,}
     localStorage.setItem('allGoals' ,JSON.stringify(allGoals))
    })
        
})