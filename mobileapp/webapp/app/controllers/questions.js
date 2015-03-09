import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    	add_question: function() {//add_question action used from form
        	var controller = this;

			var new_question_text = controller.get('newQuestion');//set to input area
			if(new_question_text) {//if input not empty
				var new_question = controller.store.createRecord('question', {//create record with...
   					question: new_question_text,//question text
    				owner: 31//owner
				});
				//Saving the question
				new_question.save().then(function() {//Returns a promise
    				controller.set('newQuestion', '');//clears input area
    				controller.transitionToRoute('lectures');//navigates back to the lectures page
				});	
			} else {//if input is empty
    			alert('You have not added any text');//feedback
			}
    	}
	}
});
