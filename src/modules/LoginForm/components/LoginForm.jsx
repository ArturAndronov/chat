import React, { Component } from 'react';
import { Button, Block } from '../../../components';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';

import { Link } from 'react-router-dom';


class LoginForm extends Component {
    render() {
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            validateStatus="success"
                            hasFeedback
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus="success"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to="/register">
                            Зарегистрироваться
                        </Link>
                    </Form>
                </Block>
            </div>
        )
    }
}


export default LoginForm;