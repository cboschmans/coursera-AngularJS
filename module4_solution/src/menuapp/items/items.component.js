(function() {
  angular.module('MenuApp')
  .component('items',   {
      templateUrl:'src/menuapp/items/items.component.html',
      controllerAs:"category",
        bindings:{
      items:'<'
    }});
})();
