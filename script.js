const checkboxList=document.querySelectorAll('.custom-checkbox')
const inputFields=document.querySelectorAll('.goal-list')
const errorLabel=document.querySelector('.errorlabel')
const progressBar=document.querySelector('.progressBar')
const progressValue=document.querySelector('.progress-value')
const progresslabel=document.querySelector('.progress-label')
const final=document.querySelector('.final')



 const allQuotes=[
    'Raise the bar by completing your goals!',
    // 'First step is the bigger thing.',
    'Well begun , First step is the bigger thing.',
    'Just a step away ,keep going!',
    'Whoa !You just completed all the goals, time for chill :D',
 ]
const finalQuotes=[
    "“Move one step ahead, today!”",
    "“Keep Going , You're making great progress!”",
    // " “Half is already done”",
    "“One step away”",
    " “Congratulations!you have completed🎉”"
]

// const allGoals=JSON.parse(localStorage.getItem('allGoals')) ||{
//     first:{
//         name:'',
//         completed:false,
//     },
//     second:{
//         name:'',
//         completed:false,
//     },
//     third:{
//         name:'',
//         completed:false,
//     }
// }

const allGoals=JSON.parse(localStorage.getItem('allGoals')) ||{}

let completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length;
 progressValue.firstElementChild.innerText=`${completedGoalsCount}/${inputFields.length} completed`
 progresslabel.innerText=allQuotes[completedGoalsCount]
 final.innerText=finalQuotes[completedGoalsCount]
//  progressValue.style.width=`${completedGoalsCount/3*100}%`
// console.log(completedGoalsCount);



checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allGoalsFilled=[...inputFields].every(function(input){
            return input.value
        })
        if (allGoalsFilled){
        checkbox.parentElement.classList.toggle("completed");
        progressValue.style.width=`${(completedGoalsCount/inputFields.length)*100}%`
        const inputId=checkbox.nextElementSibling.id
        allGoals[inputId].completed=!allGoals[inputId].completed
        completedGoalsCount=Object.values(allGoals).filter((goal)=>goal.completed).length;
        progressValue.style.width=`${(completedGoalsCount/inputFields.length)*100}%`
        progressValue.firstElementChild.innerText=`${completedGoalsCount}/${inputFields.length }completed`
        progresslabel.innerText=allQuotes[completedGoalsCount]
        final.innerText=finalQuotes[completedGoalsCount]

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

    if(allGoals[input.id]){

        input.value= allGoals[input.id].name
        if(allGoals[input.id].completed){
         input.parentElement.classList.add('completed')
        }
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
        if(allGoals[input.id] &&allGoals[input.id].completed){
            input.value=allGoals[input.id].name
            return
           }
        if(allGoals[input.id] ){allGoals[input.id].name=input.value }
        else{
            allGoals[input.id]={
                name:input.value,
                completed:false,
            }
        }
     localStorage.setItem('allGoals' ,JSON.stringify(allGoals))
    })
        
})