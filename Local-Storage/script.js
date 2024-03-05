const form = document.querySelector("#forming"); // Select the form element with ID "forming"
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  const username = form.querySelector("#username").value;
  const email = form.querySelector("#email").value;
  const fill = form.querySelector("#fill").value;
  const formData = {
    name: username,
    email: email,
    fill: fill,
  };
  console.log(JSON.stringify(formData));

  localStorage.setItem("inputing", JSON.stringify(formData));
});
let count = localStorage.getItem("mytime") != null ? Number(localStorage.getItem("mytime")): 0
const time = document.querySelector("#counter")
time.innerHTML = `${count}`
function counter(num){
    count = count + num
    time.innerHTML = `${count}`
    localStorage.setItem("mytime", count)
}
const itme = document.querySelector('#itme')
const cost = document.querySelector('#cost')
const amount = document.querySelector('#amount')
const cart = document.querySelector('.cart')
const bill = document.querySelector('#total')
const mycart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): []
let total =  0
build()
function add(){
const obj = {
 itme : itme.value,
 price:Number(cost.value),
 amount:Number(amount.value)
}
mycart.push(obj)
localStorage.setItem("cart",JSON.stringify(mycart))
build()

}
function build(){
  total = 0
  cart.innerHTML = ""
  mycart.forEach((object) =>{
     total += (object.price * object.amount)
     cart.innerHTML += `<p>proudact- ${object.itme} | price = ${object.price}$ | amount = ${object.amount}</p>`
   })
   bill.innerHTML = `<p>the total cost is ${total}$</p>`
}