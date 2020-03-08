import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
import config from '../../config/config';
import consultarTurno from './../FormConsultaVet/FormconsutalVet'


export default class Calendario extends Component {

    constructor() {
        super();

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);



        this.state = {
            day: Date
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{
                    backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%',
                    width: '2em', height: '2em', lineHeight: '2em', padding: 0
                }}>{date.day}</div>

            );
        }
        else {
            return date.day
        }
    }


    

    render() {

        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        return (
            <div className="container-fluid">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1 className="text-center">Elige una fecha para tu consulta</h1>
                    </div>
                </div>

                <div className="content-section implementation inputgrid-demo">

                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4 text-center">
                            <Calendar className="w-50" showIcon={true} dateFormat="dd/mm/yy"
                                value={this.state.date} onChange={(e) => this.props.horas(e)} >
                            </Calendar>
                        </div>
                    </div>

                </div>
           
               
            </div>
        );

    }
    handleClick(e) {
        console.log(e.value)
    }

}