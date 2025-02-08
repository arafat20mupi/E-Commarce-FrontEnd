import { useForm, useFieldArray } from "react-hook-form";
import { FaPlus, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
import toast from 'react-hot-toast'
const AddProduct = () => {
  const axios = useAxiosPublic();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      originalPrice: "",
      discount: "",
      description: "",
      colors: "",
      sizes: "",
      images: [""],
      category: "",
      faqs: [{ question: "", answer: "" }],
     
      remainingProducts: 0,
      productDetails: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  };

  const onSubmit = async (data) => {
    try {
      const imageFiles = data.image;
      const imageUrls = await Promise.all(
        Array.from(imageFiles).map((file) => uploadImageToCloudinary(file))
      );

      const formattedData = {
        name: data.name,
        originalPrice: data.originalPrice,
        discount: data.discount,
        description: data.description,
        colors: data.colors,
        sizes: data.sizes,
        images: imageUrls,
        category: data.category,
        faqs: data.faqs,
        remainingProducts: data.remainingProducts,
        productDetails: data.productDetails,
      };

      const response = await axios.post("/api/products", formattedData);
      console.log("Product added successfully:", response.data);
      toast.success('Product added successfully');
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
              placeholder="Enter product name"
            />
          </div>
          
          <div>
            <label className="block text-gray-700">Original Price</label>
            <input
              type="number"
              {...register("originalPrice")}
              className="input input-bordered w-full"
              placeholder="Enter original price"
            />
          </div>
          <div>
            <label className="block text-gray-700">Discount</label>
            <input
              {...register("discount")}
              className="input input-bordered w-full"
              placeholder="Enter discount"
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              {...register("category")}
              className="input input-bordered w-full"
              placeholder="Enter category"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Enter product description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-700">Colors</label>
            <input
              {...register("colors")}
              className="input input-bordered w-full"
              placeholder="Enter colors"
            />
          </div>
         
          <div>
            <label className="block text-gray-700">Sizes</label>
            <input
              {...register("sizes")}
              className="input input-bordered w-full"
              placeholder="Enter sizes"
            />
           
          </div>
          <div>
            <label className="block text-gray-700">Remaining Products</label>
            <input
            type="number"
              className="input input-bordered w-full"
              {...register('remainingProducts')}
              placeholder="Enter remaining products"
            />
            
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Product Details</label>
          <textarea
            {...register("productDetails")}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Enter product details"
          />
        </div>

        {/* Add Faq */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-4">FAQ</h3>
          {fields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">Question</label>
                <input
                  {...register(`faqs.${index}.question`)}
                  className="input input-bordered w-full"
                  placeholder="Enter question"
                />
              </div>
              <div>
                <label className="block text-gray-700">Answer</label>
                <textarea
                  {...register(`faqs.${index}.answer`)}
                  className="textarea textarea-bordered w-full"
                  rows="3"
                  placeholder="Enter answer"
                />
              </div>
              <button type="button" onClick={() => remove(index)} className="btn btn-danger">
                <FaTrash /> Remove FAQ
              </button>
            </div>
          ))}
          <button type="button" onClick={() => append({ question: "", answer: "" })} className="btn btn-primary">
            <FaPlus /> Add FAQ
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Product Images</label>
          <input
            type="file"
            className="file-input file-input-primary"
            multiple
            {...register('image')}
          />
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
