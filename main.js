let ElForms = document.querySelector("#formss")
let ElFirstNameinput = document.querySelector("#f-name")
let ElLastNameinput = document.querySelector("#l-name")
let ElTelinput = document.querySelector("#tell")
let ElSellect = document.querySelector("#sellection")

ElSellect.addEventListener("click",filteringg)

// let ElName = document.querySelector("#namee")
// let ElFName = document.querySelector("#familia")
// let ElTel = document.querySelector("#telnumber")
// let ElNumber = document.querySelector("#numm")

let ElNumber= 1;
let Elbody = document.querySelector("#elbody")

ElForms.addEventListener('submit', (e) => {
  e.preventDefault();

  let ElName =  ElFirstNameinput.value;
  let ElFName =  ElLastNameinput.value;
  let ElTel = ElTelinput.value;

  let tr = document.createElement("tr")
  tr.innerHTML = `<th id="numm" scope="row">${ElNumber}</th>
  <td id="namee">${ElName}</td>
  <td id="familia">${ElFName}</td>
  <td id="telnumber">${ElTel}</td>`
  Elbody.appendChild(tr)

  ElNumber++

  ElFirstNameinput.value = ""
  ElLastNameinput.value = ""
  ElTelinput.value = ""

  // let ism = {
  //   name: `${ElName}`
  // }
  // let familyada = {
  //   lastname :`${ElFName}`
  // }
  // let teln ={
  //   telefon:``
  // }

})

function filteringg(e) {
  const selectchilds = ElSellect.childNodes
  for(let i = 0; i < selectchilds.length; i++) {
    const todo = selectchilds[i]
    switch (e.target.value){
      case 'all':
      // case (friend)

    }
  }
}



















































































