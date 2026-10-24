
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1000 },
  ]);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const selectProduct = (e) => {
    const selectedId = e.target.value;
    setId(selectedId);

    const p = products.find(
      (item) => item.id === Number(selectedId)
    );

    setName(p ? p.name : "");
    setPrice(p ? p.price : "");
  };

  const updateProduct = (e) => {
    e.preventDefault();

    setProducts(
      products.map((p) =>
        p.id === Number(id)
          ? { ...p, name, price: Number(price) }
          : p
      )
    );

    alert("Product Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-blue-600">
          Product Management
        </h1>

        <h2 className="mb-2 font-semibold">Product List</h2>

        {products.map((p) => (
          <div key={p.id} className="border-b p-2">
            {p.name} - ₹{p.price}
          </div>
        ))}

        <form onSubmit={updateProduct} className="mt-5">
          <label className="mb-2 block">Select Product</label>
          <select
            className="mb-3 w-full rounded border p-2"
            value={id}
            onChange={selectProduct}
            required
          >
            <option value="">Choose Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <input
            className="mb-3 w-full rounded border p-2"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="mb-4 w-full rounded border p-2"
            type="number"
            min="0"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <button className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
