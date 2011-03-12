// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var select = function(id) {
  $.ajax("/products/" + id, {
    "dataType":"script",
    "data": $(".product_list_element_selected input").serialize()
  });
};

var edit = function(id) {
  $.ajax("/products/" + id + "/edit", {
    "dataType":"script",
    "data": $(".product_list_element_selected input").serialize()
  });
};

var remove = function(id) {
  $.ajax("/products/" + id, {
    "type":"DELETE",
    "dataType":"script",
    "data": $(".product_list_element_selected input").serialize()
  });
};

var uploadProductName = function(evt, inp, id) {
  var keyCode = null;

  if( evt.which ) {
    keyCode = evt.which;
  } else if( evt.keyCode ) {
    keyCode = evt.keyCode;
  }
  if( 13 == keyCode ) {
    $.ajax("/products/" + id, {
      "type":"PUT",
      "dataType":"script",
      "data": $(inp).serialize()
    });
    return false;
  }
  return true;
};

$(document).ready(function(){
  
  // ajax request for adding a product
  $('#add_product_button').click(function(){
    $.ajax("/products", {
      "type":"POST",
      "dataType":"script",
      "data":$(".product_list_element_selected input").serialize() });
  });
  
});

