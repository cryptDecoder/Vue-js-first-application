const buttonEL = document.querySelector('button')
const inputEL = document.querySelector('input')
const listEL = document.querySelector('ul')

function addMyGoal() {
    console.log("adding my goals to list")
    const enteredGoal = inputEL.value
    console.log(enteredGoal)
    const listItemEL = document.createElement('li')
    listItemEL.textContent = enteredGoal
    listEL.appendChild(listItemEL)
    inputEL.value = ''
    
}

buttonEL.addEventListener('click', addMyGoal);