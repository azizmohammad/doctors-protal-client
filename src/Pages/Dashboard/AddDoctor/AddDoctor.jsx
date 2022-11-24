import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const imagesHostKey = process.env.REACT_APP_IMBB_KEY;
    // console.log(imagesHostKey);
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const navigate = useNavigate();

    const { data: specialtys, } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appoinmentSpcelty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        const image = data.img[0];
        const fromData = new FormData();
        fromData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imagesHostKey}`;

        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url,
                    }
                    // save doctor information to data base
                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearar ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.name} is Added SuccessFully`);
                            navigate('/dashboard/managedoctor');
                        })
                }
            })
    }

    return (
        <div className='w-96'>
            <h2 className="text-3xl text-secondary mb-6 font-semibold">Add A Doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control  lg:w-96">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"{...register("name", { required: true })}
                        className="input input-bordered w-full" placeholder='Name' />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control  lg:w-96">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"{...register("email", { required: true })}
                        className="input input-bordered w-full" placeholder='Email' />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control lg:w-96 mt-4">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty", { required: true })}
                        className="select select-bordered  w-full ">
                        {
                            specialtys?.map(specialty =>
                                <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>
                            )
                        }
                    </select>

                </div>
                <div className="form-control  lg:w-96">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"{...register("img", { required: true })}
                        className="input input-bordered w-full" placeholder='Name' />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>

                <input className='btn mt-8 w-full bg-primary border-0 text-white' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;