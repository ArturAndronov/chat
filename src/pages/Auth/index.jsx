import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./Auth.scss";

import { LoginForm, RegisterForm } from '../../modules';

const Auth = () => {
    return (
        <section className='auth'>
            <div className='auth__content'>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </div>
        </section>
    );
}

export default Auth;
