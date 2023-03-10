export function getLocalData() {
    return localStorage.ecommerce ? JSON.parse(localStorage.ecommerce) : false;
}

export function setLocalData(products, cart) {
    // console.log("Getting cart ");
    // console.log(cart);
    const ecom = {
        products,
        cart
    };
    localStorage.setItem('ecommerce', JSON.stringify(ecom));
}

export function getCart() {
    return JSON.parse(localStorage.getItem('ecommerce')).cart;
}

export function setCart(cart) {
    const local = getLocalData();
    local.cart = cart;
    setLocalData(local.products, local.cart);
}

export function addToCart(item) {
    const cart = JSON.parse(JSON.stringify(getCart()));
    const exists = cart.map(e => e.id).indexOf(item.id);
    const pickItem = JSON.parse(JSON.stringify(item));

    if (exists < 0) {
        pickItem.stock = 1;
        cart.push(pickItem);
    } else {
        cart[exists].stock += 1;
    }

    setCart(cart);
}

export function subtractFromCart(item) {
    const cart = JSON.parse(JSON.stringify(getCart()));
    if (cart.length === 0) return cart;

    const exists = cart.map(e => e.id).indexOf(item.id);
    // console.log("Stock : ", cart[exists]?.stock - 1);
    if (cart[exists].stock - 1 === 0) {
        cart[exists].stock -= 1;

        setCart(cart.filter(e => e.stock !== 0));

    } else {
        cart[exists].stock -= 1;
        setCart(cart);
    }

}