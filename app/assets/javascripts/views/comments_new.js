window.Todo.Views.CommentsNew = Backbone.View.extend({
  initialize: function(options){
    this.todo = options.todo; 
  },

  events: {
    "submit form": "submit"
  },

  template: JST["comments/new"],

  render: function() {
    var renderedContent = this.template({
      todo: this.todo
     });

    this.$el.html(renderedContent);

    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["comment"];
    var comment = new Todo.Models.Comment(params);

    comment.save({}, {
      success: function () { view.todo.comments().add(comment) }
    })
  }
})

