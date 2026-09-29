/* console.log("ello \n")
const name = "Rizzler dude"
console.log(name) */

/* let names = prompt("Enter your name: ");
console.log(names);
console.log(typeof names); */

const inp = document.getElementById("NameInput")
const btn = document.getElementById("NameButton")
const op = document.getElementById("output")
const form = document.getElementById("myform")

form.addEventListener("submit",
    function(e){
    e.preventDefault()
       const name = inp.value
       op.textContent = name
    })

    form.addEventListener("submit",
    function(e){
    e.preventDefault()
       const name = inp.value
       op.textContent = name
    }
)

 
