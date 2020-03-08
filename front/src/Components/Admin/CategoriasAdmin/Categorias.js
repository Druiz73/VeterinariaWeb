import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Checkbox, Table } from 'reactstrap';
import config from '../../../config/config';

export default function Categorias(props) {
    const [category, setcategory] = useState({
        categorias: [],
        nombre: ""
    });

    function handleInput(e) {
        const { name, value } = e.target;//destructurin de los valores enviados por el metodo onchange de cada input
        let regex = new RegExp("^[ñíóáéú a-zA-Z0-9 /@/ /./]+$");
        for (let i = 0; i <= value.length - 1; i++) {
            let letra = value[i]
            if (!regex.test(letra) || !letra === " ") {
                return;
            }
        }
        setcategory({
            ...category,
            [name]: value.toUpperCase()
        })

    }

    function get() {
        fetch(`${config.apiUrl}/categorias`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setcategory({
                    categorias: data
                })
                console.log(data)
            });
    }

    function save(nombre) {
        fetch(`${config.apiUrl}/categorias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre
            })
        })
            .then(resp => resp.json())
            .then(data => {
                get();
            })
    }
    
   function deleteCategory(id) {

        fetch(`${config.apiUrl}/categorias/${id}`, {
            method: 'DELETE'
        })
            .catch(err => console.error(err))
            .then((data) => {
               get();
            })
    }

    useEffect(() => {
        get();
    }, []);

    return (
        <div className="container">
            <div className="row mt-5">
                <Form className="col-12 col-lg-6 mx-auto text-center">
                    <h2>Crear Categoria</h2>
                    <FormGroup>
                        <Label for="categoria">Nombre</Label>
                        <Input type="text" name="nombre" value={category.nombre} placeholder="nombre categoria" onChange={(e) => handleInput(e)} />
                    </FormGroup>
                    <FormGroup >
                        <Button onClick={() => save(category.nombre)}>Crear</Button>
                    </FormGroup>
                </Form>
                <div className="col-12 col-lg-6">
                    <Table>
                        <thead>
                            <tr>
                                <th>Categorias</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.categorias.map((element) => (
                                <tr key={element._id}>
                                    <td>{element.nombre}</td>
                                    {/* <td> <Button type="button" onClick={() => props.editCategory({ id: element._id, nombre: element.nombre })} className="btn btn-primary" data-toggle="modal" data-target="#editModal" > Editar </Button></td>*/}
                                    <td><Button onClick={() => deleteCategory(element._id)}>Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
