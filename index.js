// write js code here corresponding to index.html
// You should add submit event on the form



document.querySelector("#masaiForm").addEventListener("submit",masaileague)

masaidata=JSON.parse(localStorage.getItem("schedule"))||[]


function masaileague(){

event.preventDefault()


masaiobj={
    matchNum:masaiForm.matchNum.value,
    teamA :masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,

}
masaidata.push(masaiobj)
console.log(masaidata)

localStorage.setItem("schedule",JSON.stringify(masaidata))
window.location.href="./matches.html"



}
