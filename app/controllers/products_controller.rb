class ProductsController < ApplicationController
  
  def new
    Product.create!(:name => "")
    
    if(params.has_key?(:product))
      @selected = Product.find(params[:product][:id])
    end
    
    @products = Product.all
  end
  
  def show
    if(params.has_key?(:product))
      @prev_selected = Product.find(params[:product][:id])
    end
    
    @new_selected = Product.find(params[:clicked_id])
  end
  
end