class ProductsController < ApplicationController
  
  def create
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
    
    @new_selected = Product.find(params[:id])
  end
  
  def update
    @product = Product.find(params[:id])
    @product.name = params[:product][:name]
    @product.save
  end
  
  def edit
    @product = Product.find(params[:id])
  end
  
  def destroy
    @to_delete = Product.find(params[:id])
    @to_delete.destroy
    
    @to_select = Product.first();
  end
end