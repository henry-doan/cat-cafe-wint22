class Api::CatsController < ApplicationController
  before_action :set_cat, only: [:show, :update, :destroy]

  # because of auth, it follow the parent and child pattern but the parent is 
  # the current login user -> current_user
  def index
    render json: current_user.cats
  end

  def show
    render json: @cat
  end

  def create
    @cat = current_user.cats.new(cat_params)
    if @cat.save
      render json: @cat
    else
      errKey = @cat.errors.messages.keys[0].to_s
      errValue = @cat.errors.messages.values[0][0]
      render json: { errors: "#{errKey} #{errValue}" }, status: :unprocessable_entity
    end
  end

  def update
    if @cat.update(cat_params)
      render json: @cat
    else
      errKey = @cat.errors.messages.keys[0].to_s
      errValue = @cat.errors.messages.values[0][0]
      render json: { errors: "#{errKey} #{errValue}" }, status: :unprocessable_entity
    end
  end

  def destroy
    @cat.destroy
    render json: { message: "Cat Released"}
  end

  def randocato
    render json: current_user.cats.all.sample
  end

  private 
    def set_cat
      @cat = current_user.cats.find(params[:id])
    end

    def cat_params
      params.require(:cat).permit(:name, :breed, :registry, :dob, :avatar)
    end
end
