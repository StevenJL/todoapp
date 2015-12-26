module Api
  class TodosController < ApplicationController
    def index
      @todos = Todo.all
      render :json => @todos
    end

    def show
      @todo = Todo.find(params[:id])
      @comments = @todo.comments
      render "todos/show"
    end

    def destroy
      @todo = Todo.find(params[:id])
      if @todo.destroy
        render :json => @todo
      else
        rails "Failed to destroy"
      end
    end

    def update
      @todo = Todo.find(params[:id])
      if @todo.update_attributes(todo_params)
        render "todos/show"
      else
        render :json => @todo.errors, :status => :unprocessable_entity
      end
    end

    def create
      @todo = Todo.new(todo_params)

      if @todo.save
        render "todos/show"
      else
        render :json => @todo.errors, :status => :unprocessable_entity
      end
    end

    private

    def todo_params
      params.require(:todo).permit(:title)
    end
  end
end

