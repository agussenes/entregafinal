

const pid = getParamUrl('pid')

const producto = await getProduct(pid)

const detalleProducto = document.querySelector('#detalleProducto')
detalleProducto.classList.add('w-100')

renderProducto(producto, detalleProducto)

let button = document.querySelector('#agregarCarrito')
button.addEventListener('click', () => agregarAlCarrito(producto))