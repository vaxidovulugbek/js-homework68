let ElForms = document.querySelector("#formss")
let ElFirstNameinput = document.querySelector("#f-name")
let ElLastNameinput = document.querySelector("#l-name")
let ElTelinput = document.querySelector("#tell")
let elbuttonl =  document.querySelector("#buttonl")

let ellist = document.querySelector("#list")
let elfnameoutput =  document.querySelector("#fname-output")
let ellnameoutput = document.querySelector("#lname-output")
let elteloutput = document.querySelector("#tel-output")

let elFriendBtn = document.querySelector("#friend")
let elFamilkBtn = document.querySelector("#family")
let elClassmatekBtn = document.querySelector("#classmad")

let friendoption = document.querySelector("#friendoption")
let familyoption = document.querySelector("#familyoption")
let classmateoption = document.querySelector("#classmateoption")

let sellection = document.querySelector("#sellection")

// let obj = []
// obj.push(ElFirstNameinput)
// obj.push(ElLastNameinput)
// obj.push(ElTelinput)
// console.log(obj);




let ElNumber= 1;
let Elbody = document.querySelector("#elbody")

// ElForms.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let ElName =  ElFirstNameinput.value;
//   let ElFName =  ElLastNameinput.value;
//   let ElTel = ElTelinput.value;

//   let tr = document.createElement("tr")
//   tr.innerHTML = `<th id="numm" scope="row">${ElNumber}</th>
//   <td id="namee">${ElName}</td>
//   <td id="familia">${ElFName}</td>
//   <td id="telnumber">${ElTel}</td>`
//   Elbody.appendChild(tr)
  
//   ElNumber++
  
  // ElFirstNameinput.value = ""
  // ElLastNameinput.value = ""
  // ElTelinput.value = ""


//   tr.className = elSellect.value;
  // console.log(tr.className);


  let friends = [];
  let family = [];
  let classmates = [];


  elbuttonl.addEventListener("click" , (e) =>{
    e.preventDefault()
    let li = document.createElement("li");
    li.className = "items";
    li.innerHTML = `
    <p class="pi" id="fname-output">${ElFirstNameinput.value}</p>
    <p class="pi" id="lname-output">${ElLastNameinput.value}</p>
    <p class="pi" id="tel-output">${ElTelinput.value}</p>`

    ellist.appendChild(li);
    ElFirstNameinput.value = ""
    ElLastNameinput.value = ""
    ElTelinput.value = ""
  })



  // function addinfo (e) {
  //   for (let i = 0; i < ellist.length; i++)
  //   e.preventDefault();
  //   let itemlar = document.createElement("li")
  //   itemlar.innerHTML = `<p class="pi" id="fname-output">${ElFName}</p>
  //   <p class="pi" id="lname-output">${ElName}</p>
  //   <p class="pi" id="tel-output">${ElTel}</p>`
    
    
  //   // `<th id="numm" scope="row">${ElNumber}</th>
  //   // <td id="namee">${ElName}</td>
  //   // <td id="familia">${ElFName}</td>
  //   // <td id="telnumber">${ElTel}</td>`

  //   itemlar.classList = "items"
  // }




  // shu joyidan sortirofka ketadi

// elFriendBtn.addEventListener("click", () =>{
//     if(tr.className == 'friend') {
//       tr.style.display = "flex !importand"
//     }
//     else {
//       tr.style.display = "none"
//     }
// })
// elFamilkBtn.addEventListener("click", () =>{
//   if(tr.className == 'family') {
//     tr.style.display = "flex !importand"
//   }
//   else {
//     tr.style.display = "none"
//   }
// })
// elClassmatekBtn.addEventListener("click", () =>{
//   if(tr.className == 'classmates') {
//     tr.style.display = "flex !importand"
//   }
//   else {
//     tr.style.display = "none"
//   }
// })

// })





