module Api
  class TodosController < ApplicationController
    def index
      @todos = Todo.all
      render :json => @todos
    end

    def show
      @todo = Todo.find(params[:id])
      render :json => @todo
    end

    def create
      @todo = Todo.new(todo_params)

      if @todo.save
        render :json => @todo
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

