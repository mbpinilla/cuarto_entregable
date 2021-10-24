//Constantes
const button = document.querySelector(".button");
const imprimir = document.querySelector("#imprimir");
const contenedor = document.querySelector(".contenedor")
const table = document.querySelector(".table");
//arreglos
let arreglo = [];
let error = [];

//Eventos
button.addEventListener("click",capturarInformacion)
imprimir.addEventListener("click",imprimirArreglo)

//Elementos HTML
const mensaje = document.createElement("DIV");
mensaje.classList.add("elemento");


//funciones
function capturarInformacion () {
    const datos = {
    nombre : document.querySelector("#nombre").value,
    telefono : document.querySelector("#telefono").value,
    correo : document.querySelector("#correo").value,
    }

    if(datos.nombre==="" || datos.telefono==="" || datos.correo ===""){
        error.push("Faltan datos por diligenciar")
        recorrerArreglo()
        setTimeout((e) => {
        mensaje.remove();
        }, (3000));
               
        return;   
    } else {
        arreglo.push(datos)
        arregloString = JSON.stringify(arreglo)
        localStorage.setItem("datos",arregloString)
        limpiar();
    }
}

function limpiar (){
    nombre.value=""
    telefono.value=""
    correo.value=""
}

function recorrerArreglo(){
    error.forEach(element => {
        contenedor.append(mensaje)
        mensaje.textContent=element;
    });   
}

function imprimirArreglo(){
    const arregloStringConversion = JSON.parse(localStorage.getItem("datos"));
    
    arregloStringConversion.forEach((value) => {
    const impresion = document.createElement("tr");
    impresion.classList.add("th")
    impresion.innerHTML=`
        
        <td> 
        ${value.nombre}
        </td>
        
        <td> 
        ${value.telefono}
        </td>
        
        <td> 
        ${value.correo}
        </td>
        
        `;
        
        table.appendChild(impresion)
        
    }
    )
}