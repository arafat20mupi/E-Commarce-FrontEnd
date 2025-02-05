import { useForm } from "react-hook-form";
import { FaPlus, FaTrash } from "react-icons/fa";

const AddProduct = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: "",
      rating: "",
      price: "",
      originalPrice: "",
      discount: "",
      description: "",
      colors: "",
      sizes: "",
      images: ["", "", ""],
    },
  });

  const images = watch("images");

  const onSubmit = (data) => {
    console.log("Product Data:", data);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              {...register("name")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Rating</label>
            <input
              {...register("rating")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              {...register("price")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Original Price</label>
            <input
              {...register("originalPrice")}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Discount</label>
            <input
              {...register("discount")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Colors</label>
            <select
              {...register("colors")}
              className="select select-bordered w-full"
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Sizes</label>
            <select
              {...register("sizes")}
              className="select select-bordered w-full"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Product Images</label>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder={`Image URL ${index + 1}`}
                  {...register(`images.${index}`)}
                />
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                  onClick={() => {
                    const newImages = [...images];
                    newImages[index] = "";
                    setValue("images", newImages);
                  }}
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 btn btn-primary flex items-center gap-2"
        >
          <FaPlus /> Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
