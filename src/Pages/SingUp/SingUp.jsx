import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const SingUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSingUp = (data) => {
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='bg-white shadow-2xl p-10 rounded-lg'>
                <h2 className='text-2xl font-bold text-secondary text-center'>SingUp</h2>

                <form onSubmit={handleSubmit(handleSingUp)}>

                    <div className="form-control  lg:w-96">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"{...register("name", { required: true })}
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control  lg:w-96">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"{...register("email", { required: true })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control lg:w-96 mt-4">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"{...register("password",
                            {
                                required: "Password is required",
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*+=])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' },
                                minLength: { value: 6, message: "Password Must be 6 Characters" }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn mt-8 w-full bg-neutral text-white' value="Sing Up" type="submit" />
                </form>
                <p className='mt-5 text-neutral text-center'>Please Login? <Link to='/login' className='text-secondary font-semibold'> Already Have an Account</Link> </p>
                <div className="divider font-semibold">OR</div>
                <button className="btn btn-outline bg-secondary border-0 text-white w-full mt-4">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;