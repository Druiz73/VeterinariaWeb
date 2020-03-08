import React, { useState, useEffect } from 'react';
import './Registro.css';
import { useForm } from 'react-hook-form'
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import BackgroundLogin from './../../image/BackgroundLogin.jpg';

let renderCount = 0;

export default function Registro() {
    const [imagen, setimagen] = useState({
        imageUrl: []
    })

    const { register, handleSubmit } = useForm();
    renderCount++;

    const onSubmit = data => console.log(data);
    const [imgUrl, setImgUrl] = useState('')

    const [registro, setRegistro] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        provincia: '',
        domicilio: '',
        edad: ''
    })

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setRegistro({
            ...registro,
            [name]: value
        })
        console.log(registro)
    }


    function handleImage(e) {
        // get the files
        let files = e.target.files;

        // Process each file
        var allFiles = [];
        for (var i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    base64: reader.result,
                };

                // Push it to the state
                allFiles.push(fileInfo);

                // If all files have been proceed
                setimagen({
                    ...imagen,
                    imageUrl: allFiles
                })
            }
        } // for

    }
    function handleImage(e) {
        // get the files
        let files = e.target.files;

        // Process each file
        var allFiles = [];
        for (var i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    base64: reader.result,
                };

                // Push it to the state
                allFiles.push(fileInfo);

                // If all files have been proceed
                setimagen({
                    ...setImgUrl,
                    imageUrl: allFiles
                })
            }
        } // for
    }

    function save(nombre, apellido, edad, email, password, provincia, domicilio, imagen) {
        if(nombre==="" || apellido==="" || edad==="" || email==="" || password==="" || provincia==="" || domicilio==="" || imagen==="" ){
            alert("Debe completar los campos requeridos")
        }
        else{
            fetch("http://localhost:4000/user/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: imagen,
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password,
                    provincia: provincia,
                    domicilio: domicilio,
                    edad: edad
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log("chorceeee:",data)                
                    if (data.error === "user already") {
                        alert("El usuario ya existe!")
                    }
    
                })
        }      
    }


    return (
        <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src={BackgroundLogin} alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Employee</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control"  placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked />
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female" />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter Your Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}