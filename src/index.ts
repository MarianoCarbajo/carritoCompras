let input = document.getElementById("producto");
let btnAgregar = document.getElementById("agregar");
let btnTotal = document.getElementById("total");
let lista = document.getElementById("lista");
let sumaProducto: number = 0;

function agregarProducto(): void {
  let precioProducto: number = Number(input.value);
  sumaProducto += precioProducto;
  lista.innerHTML += `<li>$ ${precioProducto}</li>`;
}

function mostrarTotal(): void {
  lista.innerHTML += `Total de la compra: $ ${sumaProducto.toString()}`;
}

btnAgregar.addEventListener("click", agregarProducto);
btnTotal.addEventListener("click", mostrarTotal);
