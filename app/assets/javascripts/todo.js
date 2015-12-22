window.Todo = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function(){
    new Todo.Routers.AppRouter();  // sets up the routes
    Backbone.history.start(); // start listening to route changes
  }
};

$(Todo.initialize);

