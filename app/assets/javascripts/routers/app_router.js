window.Todo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "todosIndex",
    "todos/new": "todosNew"
  },

  todosIndex: function() {
    var indexView = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });

    Todo.Collections.todos.fetch(); 

    $("body").html(indexView.render().$el);
  },

  todosNew: function() {
    var newView = new Todo.Views.TodosNew();
    $("body").html(newView.render().$el);
  }
});

