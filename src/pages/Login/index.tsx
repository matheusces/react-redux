import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loadFailure, loadRequest, loadSuccess } from '../../store/reducer';

import './login.css';

export const Login = () => {
    const employe = useAppSelector((state) => state.employe.employe);
    const dispatch = useAppDispatch();

    async function handleLogin() {
        dispatch(loadSuccess({
            name: 'Matheus César',
            email: 'testando@gmail.com',
            password: 'testeSenha',
        }));
    }

    useEffect(() => {
        console.log(employe);
    }, [employe]);

    return (
        <div className="login-content">
            <div className="max-login-content">
                <h4>Login no Sistema</h4>
                <div className="form-login-content">
                    <Form.Floating className="mb-4">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="nome@exemplo.com"
                            value={employe.email}
                        />
                        <label htmlFor="floatingInputCustom">Endereço de Email</label>
                    </Form.Floating>

                    <Form.Floating>
                        <Form.Control
                            className="mb-4"    
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            value={employe.password}
                        />
                        <label htmlFor="floatingPasswordCustom">Senha</label>
                    </Form.Floating>

                    <Button onClick={handleLogin}>Entrar</Button>
                </div>
            </div>
        </div>
    )
};