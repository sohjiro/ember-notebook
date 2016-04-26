import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      var notebook = this.store.createRecord('notebook', {
        subject: this.controller.get('subject')
      });

      notebook.save().then(() => {
        console.log('save succesful');
        this.controller.set('message', `A new notebook with the name ${this.controller.get('subject')} was added!`);
        this.controller.set('name', null);
      }, function() {
        console.log('save failed');
      });
    }
  }
});
