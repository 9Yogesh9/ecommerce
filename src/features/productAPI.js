export function fetchProduct() {
    return new Promise((resolve) => {
        const products = fetch("https://my-json-server.typicode.com/9Yogesh9/ecommerce/cart")
            .then((response) => response.json())
            .then((data) => {
                const mod_data = data.map(item => {
                    item.stock = 10;
                    return item;
                })
                // console.log(`Async fetch ${JSON.stringify(mod_data)}`);
                return mod_data;
            });
        resolve(products);
    })
}

