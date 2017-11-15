import React from 'react';
import { Tasks } from '../../api/User.js';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
export default class Home extends React.Component{
	
	constructor(props) {
		
      super(props);
	  this.state = {
		 name: '',
		 email: '',
		 address: '',
		 password: '',
		 cpassword: '',
	  }
      this.updateState = this.updateState.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleCancel = this.handleCancel.bind(this);
   };

   updateState(e) {
      this.setState({[e.target.name]: e.target.value});
	  
   }
   handleCancel(event)
   {
	window.location = "/";
   }
   handleSubmit(event) {
    event.preventDefault();
	Accounts.createUser({
			name:this.state.name,
			address:this.state.address,
            email: this.state.email,
            password: this.state.password,
        });
	window.location = "/";
	}
	
   shouldComponentUpdate() {
    return true;
  }
  componentDidMount(){
		componentHandler.upgradeDom();
	}

  
render(){
  return (
		<div className="mdl-layout mdl-js-layout">
			<main className="mdl-layout__content">
				<h3>Registartion Form</h3>
				<form className="mdl-cell--6-col" onSubmit={this.handleSubmit.bind(this)}>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="name" type = "text" id = "name" value = {this.state.name}  onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "name">Name : </label>
					  </div>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="email" type = "email" id = "email" value = {this.state.email}  onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "email">Email : </label>
					  </div>
					   <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="address" type = "text" id = "address" value = {this.state.address}  onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "address">Address : </label>
					  </div>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="password" type = "password" id = "password" value = {this.state.Password}  onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "password">Password : </label>
					  </div>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="cpassword" type = "password" id = "cpassword" value = {this.state.cpassword}  onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "cpassword">Cofirm Password : </label>
					  </div>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <div className="mdl-card__actions  mdl-cell--12-col homepage_button">
							 <RaisedButton label="Submit" primary={true} className = "" name="submit" type = "submit" id = "btnSubmit"/>&nbsp;&nbsp;
							 <NavLink to="/display"><RaisedButton label="Cancel" secondary={true} className=""/></NavLink>
						</div>
					  </div>
				</form>
			</main>
		</div>
	);
  }
}