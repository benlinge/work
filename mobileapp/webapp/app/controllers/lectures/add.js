import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    	add_lecture: function() {//add_lecture action used from form
        	var controller = this;

			var new_lecture_text = controller.get('newLecture');//set to lecture title input area
			var new_lecture_date = controller.get('newDate');//set to date input area
			if(new_lecture_text) {//if input not empty
				var new_lecture = controller.store.createRecord('lecture', {//create record with...
   					title: new_lecture_text,//lecture title text
					date: new_lecture_date,//date text
    				owner: 31//owner
				});
				//Saving the lecture
				new_lecture.save().then(function() {//Returns a promise
    				controller.set('newLecture', '');//clears input area
					controller.set('newDate', '');//clears input area
    				controller.transitionToRoute('lectures');//navigates back to the lectures page
				});	
			} else {//if input is empty
    			alert('You have not added any text');//feedback
			}
    	}
	}
});