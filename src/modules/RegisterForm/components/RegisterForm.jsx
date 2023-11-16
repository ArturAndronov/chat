import React, { Component } from 'react';
import { Button, Block } from '../../../components';

import { LockOutlined, UserOutlined,MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';

import { Link } from 'react-router-dom';


class RegisterForm extends Component {
    render() {
        const success = true;

        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    {success ? ( <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="E-mail"
                            validateStatus="success"
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your E-mail!' }]}
                        >
                            <Input size="large" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            validateStatus="success"
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Введите имя" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus="success"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Введите пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus="success"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Повторите пароль"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link  className='auth__register-link' to="/login">
                                Войти в аккаунт
                            </Link>
                        </Form.Item>


                    </Form> ) : ( 
                    <div className='auth__success-block'>
                        <ExclamationCircleTwoTone />
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подстверждение аккаунта.</p>
                    </div>
                    )}
                </Block>
            </div>
        )
    }
}


export default RegisterForm;