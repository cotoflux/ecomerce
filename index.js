
import products from './data.js' 


function buildProduct(product){
  let content=`
  <div class="layoutProduct">
    <div>
      <a href="www.google.es">
        <img src="${product.img}" class="imagen">
      </a>
      <p>${product.name}</p>
      <p>${product.price}</p>
     <p>discount = ${product.price  * (product.discount/100)}
    </div>
    <div>
      <p>${product.description}</p>
    </div>
  </div>`

  let productDiv = document.createElement('div');
  productDiv.innerHTML= content;
  return productDiv;

}

function buildProductsList(){

  products.forEach(item=>{
    container.appendChild(buildProduct(item));
    //buildProduct(item);
  
  })
}

let app = document.querySelector('#app')
let container = document.createElement('div')


// fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data=>console.log(data))


app.appendChild(container)