window.Todo.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],

  initialize: function(options) {
    this.listenTo(
      this.collection,
      "sync add",
      this.render
    )
  },

  // This only listens to events that happen
  // inside its $el
  events: {
    "click button#refresh": "refresh"
  },

  refresh: function(){
    var view = this;
    this.collection.fetch();  
  },

  render: function(){
    var renderedContent = this.template({
       todos: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
})

