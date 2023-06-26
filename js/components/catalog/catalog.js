function getFile(fileName) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', fileName, true);

        request.onload = function () {
            if (request.status === 200) {
                try {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject(new Error('Request failed. Status: ' + request.status));
            }
        };

        request.onerror = function () {
            reject(new Error('Request failed'));
        };
        request.send();
    });
}

function transitionToProduct(productString) {
    let product = JSON.parse(decodeURIComponent(productString));
    localStorage.setItem('name', product.name)
    localStorage.setItem('description', product.description)
    localStorage.setItem('composition', product.composition)
    localStorage.setItem('img', product.img)
    localStorage.setItem('price', product.price)
    localStorage.setItem('volume', product.volume)
    localStorage.setItem('type', product.type)

    location.assign('../product/product.html')
}

getFile('../../../statics/data/products.json')
    .then((data) => {
        let type = localStorage.getItem('type')
        let productsList = data.products
        let products = productsList.filter(product => {
            return product.type === type
        })
        const productListContainer = document.getElementById('product-list');
        products.forEach((product) => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
        <a onclick="transitionToProduct('${encodeURIComponent(JSON.stringify(product))}')"><h3>${product.name}</h3></a>
        <p>Цена: ${product.price}</p>
      `;
            productListContainer.appendChild(productElement);
        });
    })
    .catch((error) => {
        console.error(error);
        // Обработка ошибок
    });
