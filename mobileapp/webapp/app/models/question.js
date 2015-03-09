import DS from 'ember-data';

export default DS.Model.extend({
    question: DS.attr('string'),//string for question text
	owner: DS.attr(),//owner
	answered: DS.attr('boolean'),//trueor false attribute
    lecture: DS.belongsTo('lecture', {async: true})//one to many relationship
});
