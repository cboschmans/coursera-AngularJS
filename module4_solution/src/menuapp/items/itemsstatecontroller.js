
(function(){
  angular.module('MenuApp').controller('ItemsController',ItemsController);
  ItemsController.$inject=['items','title'];
function ItemsController(items,title){
  var category=this;
  category.items= items.data.menu_items;
  category.title=title;
}
  })()
