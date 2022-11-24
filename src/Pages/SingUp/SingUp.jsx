import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useToken from '../../hooks/useToken';



const SingUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleLogin, emailVerifiy, updateUserProfile } = useContext(AuthContext);
    const googleAuthProvider = new GoogleAuthProvider();

    const [createUserEmail, setCreateUserEmail] = useState('')
    // custom hooks
    const [token] = useToken(createUserEmail);
    // error state set
    const [error, setError] = useState('');

    // navigate
    const navigate = useNavigate();
    if (token) {
        navigate('/')
    }

    const handleSingUp = (data) => {
        console.log(data);
        // setError('');
        createUser(data.email, data.password, data.name)
            .then(result => {
                const user = result.user;
                console.log(user);
                // navigate('/login');
                toast.success('Verify Your Email Address')
                const userInfo = {
                    displayName: data.name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    }).catch((error) => {
                        console.log(error);
                    });
                emailVerifiy()
                    .then(() => {
                        // Email verification sent!
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email);
            })
    }




    // google login
    const handleGoogleSingIn = () => {
        googleLogin(googleAuthProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log('error', error.message))
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
                                minLength: { value: 6, message: "Password Must be 6 Characters" },
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*+=])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <p className='text-red-600'> {error} </p>

                    <input className='btn mt-8 w-full bg-neutral text-white' value="Sing Up" type="submit" />
                </form>
                <p className='mt-5 text-neutral text-center'>Please Login? <Link to='/login' className='text-secondary font-semibold'> Already Have an Account</Link> </p>
                <div className="divider font-semibold">OR</div>
                <button onClick={handleGoogleSingIn} className="btn btn-outline bg-secondary border-0 text-white w-full mt-4">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SingUp;