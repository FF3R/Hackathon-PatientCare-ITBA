import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

const SidebarNavigation = () => {
 return (

    <nav className="sidebar-navigation">
	<ul>
		<li>
      
        <i className="fa fa-tachometer" aria-hidden="true"></i>
        <span className="tooltip">Dashboard</span>
       

		</li>
		<li>
        <i className="fa fa-address-book-o" aria-hidden="true"></i>

			<span className="tooltip">Pacientes</span>
		</li>
		<li>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>

			<span className="tooltip">Formularios</span>
		</li>

		<li>
        <i className="fa-solid fa-gear"></i>
			<span className="tooltip">Ajustes</span>
		</li>
	</ul>
</nav>

 );
};

export default SidebarNavigation;
