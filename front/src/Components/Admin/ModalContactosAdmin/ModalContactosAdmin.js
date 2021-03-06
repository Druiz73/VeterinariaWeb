import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import config from '../../../config/config';

export default function ModalContaactosAdmin(props) {
    const [respuesta, setRespuesta] = useState('');

    function handleInput(e) {
        const value = e.target.value;
        setRespuesta(value)
    }

    var templateParams = {
        nombre: props.consultaModal.nombre,
        email: props.consultaModal.email,
        motivo: props.consultaModal.motivo,
        detalle: props.consultaModal.detalles,
        respuesta: respuesta
    }

    function handleClick(e) {
        e.preventDefault();
        if (respuesta != "") {
            emailjs.send('gmail', 'rc_vet_dev', templateParams, 'user_xNmjReQiAs114Qkpgf1t1')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    //actualizar mongo como respuesta enviada a la respuesta

                    fetch(`${config.apiUrl}/contact`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ id: props.consultaModal._id, respuesta: true })
                    })
                        .then(resp => resp.json())
                        .then(data => {
                        });

                    alert('Respuesta enviada a!');

                }, function (error) {
                    console.log('FAILED...', error);
                    alert('Error al enviar la respuesta !!');
                });
        } else {
            alert('Debe completar la RESPUESTA !')
        }
    }



    return (

        <React.Fragment>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contestar Consulta Web</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="modalBody" className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Nombre Apellido Remitente</label>
                                        <input readOnly type="text" className="form-control" value={props.consultaModal.nombre} name="nombre" id="nombre" placeholder="Nombre Apellido Remitente" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email Remitente</label>
                                        <input readOnly type="text" className="form-control" value={props.consultaModal.email} name="email" id="email"
                                            placeholder="remitente@dominio.com" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Motivo</label>
                                        <input readOnly type="text" className="form-control" value={props.consultaModal.motivo} name="motivo" id="motivo"
                                            placeholder="Motivo consulta" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Detalle</label>
                                        <input readOnly type="text" className="form-control" value={props.consultaModal.detalles} name="detalle" id="detalle"
                                            placeholder="Detalle consulta" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Respuesta</label>
                                        <textarea type="text" required onChange={(e) => handleInput(e)} className="form-control" name="respuesta" id="respuesta" placeholder="Respuesta al Cliente" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="modalFooter" className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={handleClick}>Enviar Respuesta</button>
                        </div>
                    </div>
                </div>
            </div>
            <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js">
            </script>
        </React.Fragment>
    );
}
