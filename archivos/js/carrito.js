const mostrarCarritoEnHTML = () => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'));
    const carritoContainer = document.getElementById('mostrarCarrito');

    carritoContainer.innerHTML = ''; 

    if (carritoLS && carritoLS.length > 0) {
        carritoLS.forEach((producto, indice) => {
            const productoHTML = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${producto.imgUrl}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <p class="card-text">Precio: ${producto.precio}</p>
                            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${indice})">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
            carritoContainer.innerHTML += productoHTML;
        });
    } else {
        carritoContainer.innerHTML = 'El carrito está vacío.';
    }
};

const eliminarProducto = (indice) => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'));
    carritoLS.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carritoLS));
    mostrarCarritoEnHTML();
};


mostrarCarritoEnHTML();




