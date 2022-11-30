import { createCards } from "../createCards.js";
import { API_BUY_URL } from "../request.js";


const obtenerProductos = async () => {
  try {
    const request = await (await fetch(API_BUY_URL)).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};







document.addEventListener("DOMContentLoaded", async () => {
  const container = document.querySelector(".container");
  const producstInCartContainer = document.querySelector(".container");
  
  let cartProducts = [];
  showProducts();
  async function showProducts() {
   let products = await obtenerProductos();
    container.innerHTML = "";
    products.forEach((product) => {
      let btn;
      for (let index = 0; index < product.length; index++) {
        
        const element = product[index];

        console.log(element);
        btn += /*html*/ `
      <div class="card" style="width: 22rem;">
         <img src=${element.img} class="card-img-top" alt=${element.name}>
         <div class="card-body" style="font-size: 14px;">
             <p class="card-text text-secondary m-0">${element.type}</p>
             <p class="card-text fs-2 fw-semibold m-0 fw-bold">${element.name}</p>
             <p class="card-text text-secondary m-0">${element.weight}</p>
             <span class="card-text text-success fw-semibold m-0 fw-bold fs-5 pe-2">$${element.priceNow}</span>
             <span class="card-text text-decoration-line-through text-secondary m-0">$${element.priceOld}</span>
         </div>
        
     </div>
 `;
}
      console.log(product[0].name);
   

      const card = createCards(product, btn);
      container.innerHTML = card;
      
    });
    
    console.log(products);
  }})
  
  