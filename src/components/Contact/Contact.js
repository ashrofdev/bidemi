import React from 'react';
import './contact.css'


import { firebaseDB } from '../../Server';


const Contact = () => {
    const onMessageSend = async () => {
        alert('Sending...')
        await firebaseDB.ref('clients').push().set({
            name: document.querySelector('.name').value,
            email: document.querySelector('.mail').value,
            phone: document.querySelector('.num').value,
            message: document.querySelector('.message').value,
        }).then(snapshot=>{
            console.log(snapshot)
            alert('Message sent successfuly')
        }).catch(err=>{
            console.log(err)
            alert('Unable to send message')
        })
        document.querySelector('input').value = ''
        document.querySelector('textarea').value = ''
    }
    return (
        <div className="section contact">
            <div className="section_content">
                <h2 className="heading">contact me</h2>
                <div className="options">
                    <div className="left">
                        <div className="line">
                            <h4>PHONE</h4>
                            <p>📞 +2348047593857</p>
                        </div>
                        <div className="line">
                            <h4>EMAIL</h4>
                            <p>📨 example@example.com</p>
                        </div>
                        <div className="line">
                            <h4>ADDRESS</h4>
                            <p>No 23, Ajakuta street, no-entry, Ibadan.</p>
                        </div>
                        

                    </div>
                    <div className="right">
                        <input className="name" required placeholder="Enter your name"/>
                        <input className="mail" required type="email" placeholder="Email address"/>
                        <input className="num" type="number" placeholder="Phone no"/>
                        <textarea className="message" placeholder="Enter your message"/>
                        <button onClick={onMessageSend}>SEND</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;