import React from 'react';

const AddProduct = () => {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="name" defaultValue="" />
        </label>
        <label>
          Image: <input name="image" defaultValue="" />
        </label>
        <label>
          Price: <input name="price" defaultValue="" />
        </label>
        <label>
          Stock: <input name="stock" defaultValue="" />
        </label>
        <input type="hidden" name="id" defaultValue='' />
        <button type="submit">Submit form</button>
      </form>
    </div>
  )
}

export default AddProduct