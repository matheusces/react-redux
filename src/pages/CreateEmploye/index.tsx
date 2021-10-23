import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

import './createEmploye.css';

export const CreateEmploye = () => {
    function submitForm() {};

    return (
        <div className="create-content">
            <div className="max-create-content">
                <h4>Cadastro de Funcionário</h4>
                <div className="form-create-content">
                    <Form onSubmit={submitForm} className="mb-3">
                        <div className="group-1">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Nome"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Nome"/>
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Sobrenome"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Sobrenome"/>
                            </FloatingLabel>
                        </div>

                        <div className="group-2">
                            <FloatingLabel id="select" controlId="floatingSelect" label="Works with selects">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Selecione uma opção</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                                id="date"
                                controlId="floatingInput"
                                label="Data de aniversário"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Data de nascimento" />
                            </FloatingLabel>

                            <FloatingLabel
                                id="salary"
                                controlId="floatingInput"
                                label="Salário"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="Salário" />
                            </FloatingLabel>
                        </div>

                        <div className="group-3">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="nome@exemplo.com" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="Senha">
                                <Form.Control type="password" placeholder="Senha" />
                            </FloatingLabel>
                        </div>

                        <Button type="submit">Cadastrar Funcionário</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};