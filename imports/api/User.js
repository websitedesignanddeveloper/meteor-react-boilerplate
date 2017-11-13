import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';


export const Items = new Mongo.Collection('Items');
export default Items;
	if (Meteor.isServer) 
	{
		Meteor.publish( 'Items', function() {
		  var data = Items.find();
		  if ( data ) {
			return data;
		  } 
		  return this.ready();
		});
	}
	if (Meteor.isClient) {
		Meteor.subscribe( 'Items', function() {
			return Items.find();
		});
	}

	
 