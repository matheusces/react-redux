import React from "react";
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import './employes.css';

export const Employes = () => {
    const history = useHistory();

    function addNewEmploye() {
        history.push('/create-employe');
    }
    
    return (
        <div className="content">
            <div className="max-content">
                <div className="btn-content">
                    <p>Lista de funcionários</p>
                    <Button onClick={addNewEmploye}>Cadastrar novo funcionário</Button>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Cargo</th>
                            <th>Data de Aniversário</th>
                            <th>Salário</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className="icon"><AiOutlineEdit size={24} /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td>@fat</td>
                            <td className="icon"><AiOutlineEdit size={24} /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                            <td className="icon"><AiOutlineEdit size={24} /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};