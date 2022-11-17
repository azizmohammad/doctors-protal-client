import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='bg-white shadow-2xl p-10 rounded-lg'>
                <h2 className='text-2xl font-bold text-secondary text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control  lg:w-96">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"{...register("email", { required: "Email Address is required" })}
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
                                minLength: { value: 6, message: "Password Must be 6 Characters" }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <Link className="label-text-alt link link-hover">Forgot password?</Link>

                    <input className='btn mt-8 w-full bg-neutral text-white' value="Login" type="submit" />
                </form>
                <p className='mt-5 text-neutral text-center'>New to Doctors Portal? <Link to='/singup' className='text-secondary font-semibold'>Create new account</Link> </p>
                <div className="divider font-semibold">OR</div>
                <button className="btn btn-outline bg-secondary border-0 text-white w-full mt-4">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;