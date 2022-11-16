import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='mt-20 py-12' style={{
            background: `url(${appointment})`,
            backgroundSize: "contain bg-no-repeat",
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='text-center'>
                        <h3 className='text-secondary font-bold text-xl'>Contact Us</h3>
                        <h1 className='text-white font-bold text-3xl'>Stay connected with us</h1>
                        <form>
                            <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs mt-8" />
                            <input name='subject' type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs mt-5 block" />
                            <textarea name='message' type="text" placeholder="Your message" className="input input-bordered input-primary w-full max-w-xs mt-5 pt-3 h-28" />

                            <button type='subject' className="btn btn-primary bg-gradient-to-r from-primary to-secondary mx-auto text-white mt-10 block">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;