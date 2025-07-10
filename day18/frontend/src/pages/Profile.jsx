import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Profile = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState("");
  const [price, setPrice] = useState(-1);

  const getData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/products`,
        { method: "GET" }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.data.products);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      // Consider showing a user-friendly error message here
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const title = e.target.title.value;
      const price = e.target.price.value;
      const description = e.target.description.value;
      const quantity = e.target.quantity.value;

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/products`,
        {
          method: "POST",
          body: JSON.stringify({ title, price, description, quantity }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add product");
      }

      alert("Product added successfully!");
      getData(); // Refresh the product list
      e.target.reset(); // Clear the form
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert(`Something went wrong: ${error.message}`);
    }
  };

  const handelEditProduct = async (productId) => {
    if (price == -1) {
      alert("Can not set price in negative no");
      return;
    }
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/products/${productId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ price: price }),
          headers: { "content-type": "application/json" },
        }
      );
      if (!res.ok) {
        alert("Server not Updated Product Data");
        return;
      }
      setPrice(-1);
      setEditProductId("");
      getData();
    } catch (error) {
      alert("Error", error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <Header />
      <h1 className="text-4xl font-extrabold text-center text-gray-800 my-8">
        Manage Products
      </h1>

      {/* --- Product Form --- */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-700 mb-2 text-center">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 font-semibold mb-1">
              Title:
            </label>
            <input
              id="title"
              name="title"
              className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Product Title"
              required
            />
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 font-semibold mb-1">
              Price:
            </label>
            <input
              id="price"
              name="price"
              className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Price"
              step="0.01"
              required
            />
          </div>
          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-gray-700 font-semibold mb-1"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              placeholder="Product Description"
              rows="2"
              required
            ></textarea>
          </div>
          {/* Quantity */}
          <div className="flex flex-col">
            <label
              htmlFor="quantity"
              className="text-gray-700 font-semibold mb-1"
            >
              Quantity:
            </label>
            <input
              id="quantity"
              name="quantity"
              className="p-1  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              placeholder="Quantity"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* --- Product List --- */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Your Products
        </h2>
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products found. Add some above!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((pro) => (
              <div
                key={pro._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {pro.title.toUpperCase()}
                </h3>
                {pro._id === editProductId ? (
                  <>
                    <input
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      placeholder="Enter price"
                    />
                    <button onClick={() => setEditProductId("")} className="p-1 px-2 mt-1 rounded-sm bg-amber-300 m-1 hover:bg-amber-500">Cancel</button>
                    <button onClick={() => handelEditProduct(pro._id)} className="p-1 px-2 mt-1 rounded-sm bg-amber-300 hover:bg-amber-500">
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-lg text-green-600 font-semibold mb-1">
                      ₹{pro.price}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {pro.description}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Quantity: {pro.quantity}
                    </p>
                    <button
                      onClick={() => {
                        setEditProductId(pro._id);
                      }}
                      className="p-1 px-2 mt-1 rounded-sm bg-amber-300 hover:bg-amber-500"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
