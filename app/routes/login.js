import Ember from 'ember';

export default Ember.Route.extend({

	titleToken: 'Login',

	renderTemplate() {
		this.render( 'login' );
	}

});
