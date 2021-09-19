import React from 'react';
import { ImUsers } from "react-icons/im";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
    }

    return (
        <div className="text-center mx-auto md:w-8/12 lg:w-1/2">
            <p className="py-2 text-lg">Add Product</p>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Product Name" {...register("name", {required: true, maxLength: 20})} className="border-2 border-current outline-none w-full p-2 mb-1.5"/>
                <span className="text-red-500">{errors.name?.type === 'required' && "Product name is required"}</span>
                <br/>

                <input type="number" placeholder="Product Price" {...register("price", {required: true, maxLength: 20})} className="border-2 border-current outline-none w-full p-2 mb-1.5"/>
                <span className="text-red-500">{errors.price?.type === 'required' && "Product Price is required and value must be a number"}</span>
                <br/>

                <input type="number" placeholder="Profit Percentage" {...register("profit", {required: true, maxLength: 30, message: "Entered value does not match email format"})} className="border-2 border-current outline-none w-full p-2 mb-1.5"/>
                <span className="text-red-500">{errors.profit?.type === 'required' && "Profit Percentage is required and value must be a number"}</span>
                <br/>

                <input type="text" placeholder="Product Type" {...register("type", {required: true, maxLength: 30})} className="border-2 border-current outline-none w-full p-2 mb-1.5"/>
                <span className="text-red-500">{errors.type?.type === 'required' && "Product Type is required"}</span>
                <br/>
                
                <input type="file" placeholder="Product Image" {...register("img", {required: true})} className="border-2 border-current outline-none w-full p-2 mb-1.5"/>
                <span className="text-red-500">{errors.img?.type === 'required' && "Product Image is required"}</span>
                <br/>

                <input className="outline-none w-full p-2 mb-1.5 text-white bg-black" type="submit" value="Add Products" />
            </form>
        </div>
    );
};

export default AddProduct;