import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';



const AddProject = () => {
    const { register, handleSubmit } = useForm();
    // const imageBbKey = process.env.REACT_APP_imageBbApiKey;


    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ["/myServices"],
        queryFn: async () => {
            try {
                const res = await fetch("https://my-portfolio-server-side.vercel.app/myServices")
                const data = res.json()
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })


    const addProjectHandler = data => {
        // console.log(data);
        const serviceName = data.serviceName;
        const service = services.find(service => service.name === serviceName)
        // console.log(service);

        const image = data.imageURL[0];
        const formData = new FormData()
        formData.append('image', image)
        // console.log(formData);

        if (data.imageURL) {
            const imageBbKey = process.env.REACT_APP_imgBb_Key;
            console.log(imageBbKey);
            const imageBbUrl = `https://api.imgbb.com/1/upload?key=${imageBbKey}`;
            fetch(imageBbUrl, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    // console.log(imageData?.data?.image?.url);
                    const imageURL = imageData?.data?.image?.url;
                    data.imageURL = imageURL
                    data.serviceId = service._id
                    // console.log(data);
                    if (data) {
                        fetch("https://my-portfolio-server-side.vercel.app/addProject", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })
                            .then(res => res.json())
                            .then(result => {
                                toast.success(result?.message)
                            })
                    }
                })
        }






    }

    if (isLoading) {
        return <div className='text-center text-xl text-blue-600'>
            <h5>Loading...</h5>
        </div>
    }

    console.log(services);

    return (
        <div className='my-12'>
            <div className="w-full">
                <div className='my-4'>
                    <h3 className='text-3xl text-lime-600 text-center'>Add Project</h3>
                </div>
                <div className=" w-full md:w-2/3 mx-auto ">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-200">
                        <form onSubmit={handleSubmit(addProjectHandler)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name :</span>
                                </label>
                                <select {...register("serviceName")} type="text" name='serviceName' className="input input-bordered" required>
                                    <option value="">Select One</option>
                                    {
                                        services &&
                                        services.map(service => <option
                                            key={service?._id}
                                            value={service?.name}
                                        >
                                            {service?.name}
                                        </option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Name :</span>
                                </label>
                                <input {...register("name")} type="text" name='name' placeholder="Type your project name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">GitHub Link :</span>
                                </label>
                                <input {...register("gitHub")} type="text" name='gitHub' placeholder="Put your project gitHub link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Live side Link :</span>
                                </label>
                                <input {...register("liveSide")} type="text" name='liveSide' placeholder="Put your project live side link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Project Duration :</span>
                                </label>
                                <input {...register("duration")} type="number" name='duration' placeholder="Type your project duration (days)" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Used Technologies :</span>
                                </label>
                                <input {...register("technologies")} type="text" name='technologies' placeholder="Type your technologies (A comma must be used after each technology.)" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Features :</span>
                                </label>
                                <textarea {...register("featureLine1")} name='featureLine1' className="textarea input-bordered mb-2" placeholder="Line 1" required></textarea>
                                <textarea {...register("featureLine2")} name='featureLine2' className="textarea input-bordered mb-2" placeholder="Line 2" required></textarea>
                                <textarea {...register("featureLine3")} name='featureLine3' className="textarea input-bordered mb-2" placeholder="Line3" required></textarea>
                                <textarea {...register("featureLine4")} name='featureLine4' className="textarea input-bordered mb-2" placeholder="Line4" required></textarea>
                                <textarea {...register("featureLine5")} name='featureLine5' className="textarea input-bordered mb-2" placeholder="Line5" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select your project photo :</span>
                                </label>
                                <input {...register("imageURL")} type="file" name='imageURL' className="input input-bordered" required />
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

export default AddProject;