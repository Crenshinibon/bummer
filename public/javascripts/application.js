// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function() { 
    $(window).resize(function() {      
          updateArea();
      });  

      function updateArea() {
      var height = getHeight(); 
      var area = $('#products_list');
      var parentHeight = area.parent().innerHeight();
          
      area.height(parentHeight - height);
      }
      
    function getHeight() {
      var height = 0;

      var idArray =['#products_header','#products_buttons']
      for(var i=0; i < idArray.length; i++){
        height += $(idArray[i]).outerHeight();
      }
      
      return height;
    }
    updateArea();
}
