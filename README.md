
# EKart - React Redux <a href="https://ekart-yogesh.netlify.app/" target="_blank">Live App</a>

Build using ❤:
<div>

  <a href="">![reactjs](https://img.shields.io/badge/Reactjs-♥-brightgreen)</a>
  <a href="">![redux](https://img.shields.io/badge/Redux-CSS-orange)</a>
  <a href="">![responsive](https://img.shields.io/badge/Responsive-UI-yellow)</a>

</div>

A ecommerce app build using react and redux

### Features

⭕ API - typicode:
   * Fetch and show products fetched from the api - <code>https://my-json-server.typicode.com/</code>
   * In three cases the API will be called:
      * Initial Load of App.
      * If force reset is intiated.

⭕ Data maintained:
   * Product - Name, Price, Image, Stock, Details.
   * LocalStorage is used in sync with Redux State to keep data consistent even after refresh.
   * Products and Cart data are maintained and updated if there are any changes in product data.

⭕ Functions Provided:
   * Show and update cart item count.
   * You can modify the data for product - Name, Price, Details, Image.
   * You can delete the product, only if is not added to cart.
   * Sorting - sort the products from price high to low.
   * Add Product - You can add the product.
   * Alerts are triggered for specific events.
   * The cart data is persistent even if you reload the page or come back later.

⭕ Pages:
   * Home Page: Showing list of all the products in store.
   * Product Details: Show all the details for product.
   * Update Product: Add new product or edit the existing product. 
   * Cart Page : Shows the current cart items, shows the total cart value


### Installation

Run Ekart with npm

   * Download zip file from this repo or just <a href="https://github.com/9Yogesh9/ecommerce/archive/refs/heads/main.zip" target="_blank">click here !</a>
   * Navigate to the ecommerce folder
   * Run command ``` npm start ```
   * You can use the project at ``` http://localhost:3000 ```
   

### Screenshots

Home Page:
![App Screenshot](https://raw.githubusercontent.com/9Yogesh9/to-do-react/main/public/Screenshot%20dark.png)

Product details:
![App Screenshot](https://raw.githubusercontent.com/9Yogesh9/to-do-react/main/public/Screenshot%20light.png)