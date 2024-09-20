const checkboxList=document.querySelectorAll('.custom-checkbox')
const inputFields=document.querySelectorAll('.goal-list')
const errorLabel=document.querySelector('.errorlabel')
const progressBar=document.querySelector('.progressBar')
const progressValue=document.querySelector('.progress-value')
checkboxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allFieldsFilled=[...inputFields].every(function(input){
            return input.value
        })
        if (allFieldsFilled){
        checkbox.parentElement.classList.toggle("completed");
        progressValue.style.width="45%"
        // errorLabel.style.display = 'none'; // Hide the error label
        // progressBar.classList.remove('show-error');

    }
    else {
        // errorLabel.style.display = 'block'; // Show the error label
        progressBar.classList.add('show-error'); // Add error class to progress bar
    }


    });
});
inputFields.forEach((input)=>{
    input.addEventListener('focus',()=>{
        progressBar.classList.remove('show-error')
    })
})