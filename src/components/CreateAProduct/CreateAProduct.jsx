import React from "react";

const CreateAProduct = () => {
    const handleCreateAProduct = (e) => {
    e.preventDefault();
    };
  return (
    <div className="lg:w-1/2 mx-auto">
      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="title" className="input" />
          {/* email */}
          <label className="label">Image URL</label>
          <input type="text" className="input" name="image" />
          {/* bid amount */}
          <label className="label">Min Price</label>
          <input
            type="text"
            name="minPrice"
            className="input"
            placeholder="Min Price"
          />
          {/* bid amount */}
          <label className="label">Max Price</label>
          <input
            type="text"
            name="maxPrice"
            className="input"
            placeholder="Max Price"
          />
          <button className="btn btn-neutral mt-4">Add Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
