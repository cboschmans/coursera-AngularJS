(function(){
angular.module('MenuApp').controller('CategoriesController', CategoriesController);
CategoriesController.$inject=['categories'];
function CategoriesController(categories){
var menu=this;
menu.categories=categories.data;
}
})()
