import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const EmailForm = () => {

    const form = useRef()

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_5ka9bv9', 'template_p9ob0jo', form.current, 'OnmnH2zSMoC9UfBmX')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Contact with me!</h1>
                        <p className="py-6">Please send your message</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name :</span>
                                </label>
                                <input type="text" name='user_name' placeholder="Type your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email :</span>
                                </label>
                                <input type="email" name='user_email' placeholder="Type your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message :</span>
                                </label>
                                <textarea name='message' className="textarea input-bordered" placeholder="Type your message" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Send" className='btn btn-sm btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;