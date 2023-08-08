

const listadoProductos = document.querySelector('#listadoProductos')
listadoProductos.classList.add('row', 'w-100')

const productos = await getProducts()

renderProductos(productos, listadoProductos)
