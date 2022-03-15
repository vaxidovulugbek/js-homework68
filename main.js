let ElForms = document.querySelector("#formss")
let ElFirstNameinput = document.querySelector("#f-name")
let ElLastNameinput = document.querySelector("#l-name")
let ElTelinput = document.querySelector("#tell")
let elSellect = document.querySelector("#sellection")

let elFriendBtn = document.querySelector("#friend")
let elFamilkBtn = document.querySelector("#family")
let elClassmatekBtn = document.querySelector("#classmad")

// ElSellect.addEventListener("click",filteringg)

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


  tr.className = elSellect.value;
  console.log(tr.className);
elFriendBtn.addEventListener("click", () =>{
    if(tr.className == 'friend') {
      tr.style.display = "flex !importand"
    }
    else {
      tr.style.display = "none"
    }
})
elFamilkBtn.addEventListener("click", () =>{
  if(tr.className == 'family') {
    tr.style.display = "flex !importand"
  }
  else {
    tr.style.display = "none"
  }
})
elClassmatekBtn.addEventListener("click", () =>{
  if(tr.className == 'classmates') {
    tr.style.display = "flex !importand"
  }
  else {
    tr.style.display = "none"
  }
})

})

















































































