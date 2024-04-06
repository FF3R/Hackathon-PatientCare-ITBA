import React from 'react';
import './sidebar.css';

const SidebarNavigation = () => {
 return (
    <nav class="sidebar-navigation">
	<ul>
		<li class="active">
        <i class="fa fa-tachometer" aria-hidden="true"></i>

			<span class="tooltip">Dashboard</span>
		</li>
		<li>
        <i class="fa fa-address-book-o" aria-hidden="true"></i>

			<span class="tooltip">Pacientes</span>
		</li>
		<li>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

			<span class="tooltip">Formularios</span>
		</li>

		<li>
        <i class="fa-solid fa-gear"></i>
			<span class="tooltip">Ajustes</span>
		</li>
	</ul>
</nav>
 );
};

export default SidebarNavigation;
