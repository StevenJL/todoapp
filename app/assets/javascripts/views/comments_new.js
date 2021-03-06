window.Todo.Views.CommentsNew = Backbone.View.extend({
  initialize: function(options){
    this.todo = options.todo; 
  },

  events: {
    "submit form": "submit",
    "keyup textarea": "handleKeyup"
  },

  template: JST["comments/new"],

  render: function() {
    var renderedContent = this.template({
      todo: this.todo
     });

    this.$el.html(renderedContent);

    return this;
  },

  handleKeyup: function(event) {
    this.renderPreview();
  },

  renderPreview: function() {
    var content = this.$("textarea").val();
    var previewContent = marked(_.escape(content));
    this.$(".preview").html(previewContent);
  },

  submit: function(event) {
    var view = this;
    event.preventDefault();

    var params = $(event.currentTarget).serializeJSON()["comment"];
    var comment = new Todo.Models.Comment(params);

    comment.save({}, {
      success: function () { view.todo.comments().add(comment) }
    })
  }
})

