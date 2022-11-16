import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: "contain bg-no-repeat",
            }}
            className="p-10 ">

            <div className='footer'>
                <div>
                    <span className="font-bold text-xl text-neutral">Services</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="font-bold text-xl text-neutral">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="font-bold text-xl text-neutral">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
            </div>

            <div className='footer-center p-4 text-base-content'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer; <h2>footer</h2>


