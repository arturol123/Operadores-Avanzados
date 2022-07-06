const contenedorProductos = document.getElementById("contenedor-productos2")
let Producto

if (localStorage.getItem("id")){ 
    Producto = JSON.parse(localStorage.getItem("id"));
}


// Crea todas las card en base a la informacion de la hoja Stock.js
ShowProduct(StockAlmacen.filter(item => item.id == Producto))

function ShowProduct(array){
// Crea todas las card en base a la informacion de la hoja Stock.js

    contenedorProductos.innerHTML = ""


array.forEach(el => {
        let div =document.createElement("div")
    div.className = "producto"

    div.innerHTML =`<div class ="card">
                        <div class ="card-image">
                          <img src="${el.LinkImg2}">  
                        </div>

                        <div class="card-content">
                            <p class="card-title">${el.Marca}</p>
                            <hr>
                            <p class="PrecioNormal"> $ ${el.Precio}</p>
                            <p class="PrecioEspecial"> $ ${el.Precio - (el.Precio * 0.16)} Precio con Descuento</p>
                                <div class="Cantidad">
                                    <button id="Btn"> - </button>
                                    <label id="Qty"> 0 </label>
                                     <button id="Btn"> + </button>
                                </div>
                               <br>
                            <button id="btnComprar" class="bntComprar">Comprar</button>
                        </div>
                    </div>
                    <br>
                    <div class="Desc">${el.Descripcion}</div>`


contenedorProductos.appendChild(div)

    })
}