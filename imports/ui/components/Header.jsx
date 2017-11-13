import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
constructor(props) {
      super(props);
			this.state = {UserLoggedIn: false}
	  };
  render() {
	var loc = window.location;
	var url = window.location.href;  
	var arr = url.split("/");
	var page = arr[arr.length-1];
	var domain = window.location.host;
	if(page == 'register' || page == '')
	{ 
		this.state.UserLoggedIn = false;
	}
	else
	{
		this.state.UserLoggedIn = true;
	}
    return (
	<div>
      <header className='Header mdl-layout__header'>
		<div className = "tab-bar">
		<div className = "sub_tab_bar">
			{
			 this.state.UserLoggedIn
			   ? 
			   <div>
				<NavLink ClassName=" mdl-layout__tab is-active" exact to="/addItem">Add Item</NavLink>
				<NavLink ClassName=" mdl-layout__tab is-active" to="/display">Display</NavLink>
				<NavLink ClassName=" mdl-layout__tab is-active" exact to="/">logout</NavLink></div>
			   :
			    <div><NavLink ClassName=" mdl-layout__tab is-active" exact to="/register">Register</NavLink>
				<NavLink ClassName=" mdl-layout__tab is-active" exact to="/">Log In</NavLink></div>
		   }
		   
		</div>
		</div>
		<div className = "mdl-layout__header-row">
			<span className = "mdl-layout-title">Sample Demo Application</span>          
        </div>
      </header>
	 
	</div>
    );
  }
}
