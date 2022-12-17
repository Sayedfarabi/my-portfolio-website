import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const addServiceHandle = data => {
        // console.log(data);
        if (data) {
            fetch("http://localhost:5000/addService", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    toast.success(result?.message)
                    // navigate("/")
                })
        }
    }
    return (
        <div className='mt-12'>
            <div className="w-full">
                <div className='my-4'>
                    <h3 className='text-3xl text-lime-600 text-center'>Add Service</h3>
                </div>
                <div className=" w-full md:w-2/3 mx-auto ">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
                        <form onSubmit={handleSubmit(addServiceHandle)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name :</span>
                                </label>
                                <input {...register("name")} type="text" name='name' placeholder="Type your Service name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service URL :</span>
                                </label>
                                <input {...register("photoURL")} type="text" name='photoURL' placeholder="Type your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add to Database" className='btn btn-sm btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;