let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let Address = document.querySelector('#Address')
let EmailAddress = document.querySelector('#E-mail-Address')
let Password = document.querySelector('#Password')
let Comments = document.querySelector('#Comments')

document.querySelector('#send').addEventListener('click',validation)
function validation (){
/*alert('there an empty case ')*/
/*let passwordreg=(?=.*[A-Z]) ([0-9])* ([z-z])*/
if (firstName.value === "" || lastName.value ==="" || Address.value ==="" || EmailAddress.value ==="" || Password.value ==="" || Comments.value ==="") alert('One of the Inputs is empty')
if (Password.value.length<8 || !(Password.value.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g))){ 
    alert('The password must be a combination of charatacters , numbers and at least a capital letter')}

 if (!(EmailAddress.value.match(/[a-zA-Z0-9]@/ )))
 alert ("Doesn't have a valid e-mail adress ")
}