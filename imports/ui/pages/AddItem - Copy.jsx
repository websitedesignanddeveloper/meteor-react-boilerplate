import React from 'react';
import { Items } from '../../api/User.js';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddItem extends React.Component{
	
	constructor(props) {
      super(props);
	   Meteor.subscribe( 'Items', function() {
		console.log(Items.find().fetch());
		this.customer = Items.find().fetch();
		});
	  this.value = this.props.match.params.id;
	  if(this.value == undefined)
	  {
		  this.state = {
			 name: '',
			 description: '',
			 quantity: '',
			 amount: '',
			 Focusclass:'',
		  }
	  }
	  else
	  {
		this.ItemData = Items.find(this.value).fetch();
			this.state = {
				 name: this.ItemData[0].name,
				 description: this.ItemData[0].description,
				 quantity: this.ItemData[0].quantity,
				 amount: this.ItemData[0].amount,
				 Focusclass:'is-dirty',
			  }
			  
	  }
	 
      this.updateState = this.updateState.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleCancel = this.handleCancel.bind(this);
   };

   updateState(e) {
      this.setState({[e.target.name]: e.target.value});
	  //alert(e.target.name);
   }
   handleCancel(event)
   {
	window.location = "/display";
   }
   handleSubmit(event) {
    event.preventDefault();
	if(this.value == undefined)
	{
		Items.insert({
		  name:this.state.name,
		  description:this.state.description,
		  address:this.state.address,
		  quantity: this.state.quantity,
		  amount: this.state.amount,
		});
	}
	else
	{
		
		Items.update(this.value, {
		  $set: {name:this.state.name,
		  description:this.state.description,
		  address:this.state.address,
		  quantity: this.state.quantity,
		  amount: this.state.amount,
		  },
		});
		 
	}
	console.log(Items.find().fetch());
	this.props.history.replace("/display");
	}
	 componentDidMount(){
		componentHandler.upgradeDom();
	}

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return true;
  }
render(){
	
  return (

      <div className="mdl-layout mdl-js-layout">
				<main className="mdl-layout__content">
					<h3>Add Item</h3>
					<form className="mdl-cell--6-col" onSubmit={this.handleSubmit.bind(this)}>
						  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
							 <input className = "mdl-textfield__input" name="name" type = "text" id = "text1" value = {this.state.name}  onChange = {this.updateState}/>
							 <label className = "mdl-textfield__label" htmlFor = "text1">Name : </label>
						  </div>
						 <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
							 <input className = "mdl-textfield__input" name="description" type = "text" id = "text1" value = {this.state.description}  onChange = {this.updateState}/>
							 <label className = "mdl-textfield__label" htmlFor = "text1">Description : </label>
						  </div>
						  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
							 <input className = "mdl-textfield__input" name="quantity" type = "text" id = "text1" value = {this.state.quantity}  onChange = {this.updateState}/>
							 <label className = "mdl-textfield__label" htmlFor = "text1">Quantity : </label>
						  </div>
						  <div className = "mdl-textfield mdl-js-textfield mdl-cell--12-col  mdl-textfield--floating-label">
							 <input className = "mdl-textfield__input" name="amount" type = "text" id = "text1" value = {this.state.amount}  onChange = {this.updateState}/>
							 <label className = "mdl-textfield__label" htmlFor = "text1">Amount : </label>
						  </div>
						   <div className = "mdl-textfield mdl-js-textfield mdl-cell--6-col  mdl-textfield--floating-label">
							 <div className="mdl-card__actions  mdl-cell--12-col homepage_button">
							 <RaisedButton label="Submit" primary={true} className = "" name="submit" type = "submit" 
							 id = "text1"/>
							  </div>
						  </div>
						  <div className = "mdl-textfield mdl-js-textfield mdl-cell--6-col  mdl-textfield--floating-label">
							 <div className="mdl-card__actions  mdl-cell--12-col homepage_button">
								<RaisedButton label="Cancel" onClick={this.handleCancel.bind(this)} secondary={true} className=""/>
							  </div>
						  </div>
					</form>
				</main>
		</div>

  );
}
}
