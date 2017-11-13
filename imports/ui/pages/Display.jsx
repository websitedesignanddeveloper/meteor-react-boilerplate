import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Items } from '../../api/User.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


export default class Display extends React.Component{
	constructor(props) {
      super(props);
	  Meteor.subscribe( 'Items', function() {
		console.log(Items.find().fetch());
		this.customer = Items.find().fetch();
		});
	  this.state = {
			 name: '',
			 description: '',
			 quantity: '',
			 amount: '',
			 customer:[]
		  }
   };
   componentWillMount(){
	var context = this;	
	Tracker.autorun(function(){
	   var data = Items.find().fetch();
	   let customer = data.map((data)=>{
		return (
			<TableRow key={data._id}>
				<TableRowColumn>{data.name}</TableRowColumn>
				<TableRowColumn>{data.description}</TableRowColumn>
				<TableRowColumn>{data.quantity}</TableRowColumn>
				<TableRowColumn>{data.amount}</TableRowColumn>
				<TableRowColumn>
					<NavLink to={"/additem/" + data._id}><RaisedButton label="Edit" primary={true}  className=""/>
					</NavLink>
					<NavLink to={"/removeitem/" + data._id}><RaisedButton label="Delete" secondary={true} className="" /></NavLink>
				</TableRowColumn>
			</TableRow>
		);
	})
	context.setState({customer:customer});
	 console.log('state',context.state.customer);
	 });
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
		<div className='Display'>
		  <h3></h3>
		   <MuiThemeProvider>
			<Table>
				<TableHeader>
				  <TableRow>
					<TableHeaderColumn>Name</TableHeaderColumn>
					<TableHeaderColumn>Description</TableHeaderColumn>
					<TableHeaderColumn>Quantity</TableHeaderColumn>
					<TableHeaderColumn>Amount</TableHeaderColumn>
					<TableHeaderColumn>Action</TableHeaderColumn>
				  </TableRow>
				</TableHeader>
				<TableBody>
				{this.state.customer}
				</TableBody>
			  </Table>
			</MuiThemeProvider>
		</div>
	  );
	}
}
