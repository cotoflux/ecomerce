
import data from './data.js' 

let app = document.querySelector('#app')
let container = document.createElement('div')
// fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data=>console.log(data))
data.forEach(item=>{
  
  let producto = document.createElement('div')
  let izquierda= document.createElement('div')
  let derecha = document.createElement('div')
  
  let imagen = document.createElement('img')
  imagen.src=item.img
  imagen.classList.add('imagen')
  
  let ancor = document.createElement('a')
  ancor.appendChild(imagen)
  ancor.href="www.google.es";
  let titulo=document.createElement('p')
  titulo.innerHTML=item.title
  let value=document.createElement('p')
  value.innerHTML=item.value
  let description=document.createElement('p')
  description.innerHTML=item.description


 
  izquierda.appendChild(ancor)
  izquierda.appendChild(titulo)
  izquierda.appendChild(value)

  derecha.appendChild(description)


  producto.appendChild(izquierda)
  producto.appendChild(derecha)

  container.appendChild(producto)

})

app.appendChild(container)