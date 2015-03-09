import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),//string for lecture text
	date: DS.attr('string'),//date set to string
	owner: DS.attr(),//owner
	questions: DS.hasMany('question', {async: true})//many to one relationship
});
