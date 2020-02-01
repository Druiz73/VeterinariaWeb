import React from 'react'
import { Link } from 'react-router-dom'

export default class Consultas extends React.Component{
    render(){
        return(
            <Link className="nav-link text-white" to="/contact">Consultas</Link>
        )
    }
}