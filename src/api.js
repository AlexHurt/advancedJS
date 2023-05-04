async function loadProducts() {
    const response = await fetch("http://localhost:3000/list", {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    });
    return await response.json()
}

async function addProduct(id) {
    const response = await fetch("http://localhost:3000/add", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id.toString() })
    })
    const resJson = await response.json()
    return parseInt(resJson.count)
}

async function removeProduct(id) {
    const response = await fetch("http://localhost:3000/add", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: "-" + id.toString() })
    })
    const resJson = await response.json()
    return parseInt(resJson.count)
}

export { loadProducts, addProduct, removeProduct }