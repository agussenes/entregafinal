// -------index---------
const getProducts = async () => {
    const respuesta = await fetch('/archivos/data/data.json')
    return await respuesta.json()
}

const renderProductos = (productos, elemento) => {
    productos.forEach(producto => {
        
        const card = document.createElement('div')
        card.classList.add('card', 'col-3')

        card.innerHTML = `
            <div class='card-body'> 
                <a href="/detalle.html?pid=${producto.id}">
                    <img src="${producto.imgUrl}" class='card-img-top w-100'>
                    <h3>Nombre: ${producto.nombre}</h3>
                    <p>Precio: ${producto.precio}</p>
                </a>
            </div>
        `
        elemento.appendChild(card)
    })
}




// --------------detalle------------

const getParamUrl = (param) => {
    const urlParam = new URLSearchParams(window.location.search)
    
    return parseInt(urlParam.get(param))
}


const getProduct = async (pid) => {
    const respuesta = await fetch('/archivos/data/data.json')
    const data =  await respuesta.json()

    return data.find(producto => producto.id === pid)
}

const renderProducto = (producto, elemento) => {

    
    const div = document.createElement('div')
    div.classList.add('row', 'w-100')

    div.innerHTML = `
        <div class='col-6'>
            <img src="${producto.imgUrl}" class='card-img-top w-75'> 
            </div>
        <div class='col-6'>            
                <h3>Nombre: ${producto.nombre}</h3>
                <p>Categoría: ${producto.categoria}</p>
                <h3>Precio: ${producto.precio}</h3>
                <p>Informacion: ${producto.informacion}</p>
                <button class='btn btn-outline-success' id='agregarCarrito'>Agregar el carrito</button>            
        </div>                    
    `
    elemento.appendChild(div)

}

const agregarAlCarrito = (producto) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    if (carritoLS) {
        const existIndice = carritoLS.findIndex(prod => prod.id === producto.id)
        if (existIndice===-1) {
            producto.cantidad = 1
            carritoLS.push(producto)
        } else {
            carritoLS[existIndice].cantidad += 1
        }
        localStorage.setItem('carrito', JSON.stringify(carritoLS))
        Toastify({
            text: 'Producto agregado al carrito -> ',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()
    } else {
        producto.cantidad = 1
        localStorage.setItem('carrito', JSON.stringify([producto]))
        Toastify({
            text: 'Producto agregado al carrito --> ',
            duration: 3000,
            destination: 'carrito.html'
        }).showToast()
    }
}