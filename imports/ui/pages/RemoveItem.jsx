import React from 'react';
import { Items } from '../../api/User.js';
import { Button } from 'react-router-dom';
export default class AddItem extends React.Component{
	
	constructor(props) {
      super(props);
	  this.value = this.props.match.params.id;
	  if(confirm("Sure to delete?"))
	 {this.ItemData = Items.remove(this.value);}
	 window.location = "/display";
   };
}
