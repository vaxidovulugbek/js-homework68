let elform = document.querySelector("#form")
let elbtngroup = document.querySelector(".btn-group")
let ellist = document.querySelector("#list")
// let elinput = document.querySelector(".input")
let elFirstname = document.querySelector("#first-name")
let elLastname = document.querySelector("#last-name")
let elTel = document.querySelector("#tel")
let elcategory = document.querySelector(".category")

let newarr = []
let newlistarr = []
elform.addEventListener("submit" , (e) => {
  e.preventDefault()
  newarr.push({
    fname: elFirstname.value,
    lname: elLastname.value,
    tel: elTel.value,
    categorilar: elcategory.value,
    
  })
  // console.log(newarr);
  newlistarr = newarr.map((item) => {
    return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
    // return `<li class="list-group-item d-flex justify-content-around"><span >${item.fname}</span> <span >${item.lname}</span>  <span >${item.lname}</li>`
  })
  
  ellist.innerHTML = newlistarr.join("")
  elFirstname.value = ""
  elLastname.value = ""
  elTel.value = ""
  elcategory.value = ""
})


elbtngroup.addEventListener("click", (e) => {
  let newBaddiy = newarr.filter((item) => {
    return item.categorilar == e.target.textContent ;

  });
  if (e.target.textContent == "All") {
    newBaddiy = newarr
  }
  newlistarr = newBaddiy.map((item) => {
    return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
  })
  ellist.innerHTML =  newlistarr.join("")
})
































