import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType
});

Router.map(function() {//Application Map
  	this.resource('lectures', function() {//Lectures Main Page
  		this.route('add');//Add page
		this.route('questions');//Questions page
  	});
});

export default Router;