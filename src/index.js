

//document.addEventListener("DOMContentLoaded",() => {
//  // your code here
//});

document.addEventListener('DOMContentLoaded',() => {
  let form=document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault()
    //console.log(e.target)
    //console.log(`e.target ${e.target}`)
    //console.log(`e.target.new_task_description ${e.target.new_task_description}`)
    //console.log(`e.target.new_task_description.value ${e.target.new_task_description.value}`)

    buildToDo(e.target.new_task_description.value)

  })
})


function buildToDo(todo) {
  let li=document.createElement('li')
  li.textContent=todo
  document.querySelector('#tasks').appendChild(li)
  console.log(li)
}


