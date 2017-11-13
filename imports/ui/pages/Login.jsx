import React from 'react';
import { Users } from '../../api/User.js';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component{
	
	constructor(props) {
      super(props);
	   Meteor.loggingOut(Meteor.userId());
	  this.state = {
		 email: '',
		 password: '',
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
   componentDidMount(){
		componentHandler.upgradeDom();
	}

   handleSubmit(event) {
    event.preventDefault();
	 Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
      if(err){
        alert(err.reason);
      } else {
        this.props.history.replace("/display");
      }
    });
	}
  
  shouldComponentUpdate() {
    return true;
  }
render(){
  return (
		<div className="mdl-layout mdl-js-layout">
			<main className="mdl-layout__content card-panel teal lighten-2">
				<h3>Login Form</h3>
				<form className="mdl-cell--6-col">
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <input className = "mdl-textfield__input" name="email" type = "email" id = "email" value = {this.state.email}  
						 onChange = {this.updateState}/>
						 <label className = "mdl-textfield__label" htmlFor = "email">Email : </label>
					  </div>
					  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						<input className = "mdl-textfield__input" name="password" type = "password" id = "password" value = {this.state.Password}
						onChange = {this.updateState}/>
						<label className = "mdl-textfield__label" htmlFor = "password">Password : </label>
					  </div>
					   <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
						 <div className="mdl-card__actions  mdl-cell--12-col homepage_button">
						 <RaisedButton label="submit" primary={true} className = "" name="submit" type = "submit" id = "btnSubmit" 
						 onClick={this.handleSubmit.bind(this)} value="LOGIN"/>&nbsp;&nbsp;
						 <RaisedButton label="Cancel" onClick={this.handleCancel.bind(this)} secondary={true} className=""/>
						</div>
						</div>
				</form>
			</main>
		</div>
		);
	}
}
