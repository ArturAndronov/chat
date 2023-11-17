import React from 'react';
import { Button, Block } from '../../../components';

import { LockOutlined, UserOutlined, MailOutlined, ExclamationCircleTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';

import { Link } from 'react-router-dom';

const success = true;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        isSubmitting
    } = props;
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {success ? (<Form
                    onSubmit={handleSubmit}
                    className="login-form"
                >
                    <Form.Item
                        validateStatus={
                            !touched.email ? "" : errors.email ? 'error' : 'success'}
                        hasFeedback
                        help={!touched.email ? "" : errors.email}
                    >
                        <Input
                            size="large"
                            id="email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="E-mail"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </Form.Item>
                    <Form.Item
                        validateStatus="success"
                        hasFeedback
                    >
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Введите имя" />
                    </Form.Item>
                    <Form.Item
                        validateStatus={
                            !touched.password ? "" : errors.password ? 'error' : 'success'}
                        hasFeedback
                        help={!touched.password ? "" : errors.password}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Введите пароль"
                            size="large"
                            id='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus="success"
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Повторите пароль"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Ошибка!</span>}
                        <Button onClick={handleSubmit} size="large" type="primary">
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Link className='auth__register-link' to="/login">
                            Войти в аккаунт
                        </Link>
                    </Form.Item>


                </Form>) : (
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

export default RegisterForm;