import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";


export default function SendEmailVerification() {

    const { user, emailVerifiy } = useContext(AuthContext);

    const sendVerification = async () => {
        await emailVerifiy();
        toast.success(`Verification email sent to ${user?.email}`);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Verify your email</h2>
                    <p>If you don't verify email you can't access most of the content of this site</p>
                    <div className="card-actions justify-end">
                        <button onClick={sendVerification} className="btn">Send Verification</button>
                    </div>
                </div>
            </div>
        </div>
    )
}