class DefineProductsController < ApplicationController
  
  def show
    @products = Product.all
    @selected = Product.first
  end
  
end
