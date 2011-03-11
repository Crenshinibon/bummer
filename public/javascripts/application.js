// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var select = function(id) {
  $.ajax("/products/select", {
    "dataType":"script",
    "data": $(".product_list_element_selected input").serialize()
      + "&clicked_id=" + id
  });
}

$(document).ready(function(){
  
  // ajax request for adding a product
  $('#add_product_button').click(function(){
    $.ajax("/products/new", {
      "dataType":"script",
     "data":$(".product_list_element_selected input").serialize() });
  });
  
});

