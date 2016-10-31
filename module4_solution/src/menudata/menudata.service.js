(function() {
  'use strict';
  angular.module('data')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http','ApiBasePath'];
  function MenuDataService($http,ApiBasePath){
    var dataService=this;

    dataService.getAllCategories=function(){
      return $http({method:'GET',url:(ApiBasePath+"/categories.json")});
    };

    dataService.getItemsForCategory=function(name){
var items=dataService.getAllCategories().then(function(response){
      var category=response.data.filter(function(category){
      return  category.name===name;
    })[0];
console.log( category.short_name);
    return $http({method:'GET',url:(ApiBasePath+"/menu_items.json"),params:{category:category.short_name}});
    });
return items;
    };
  }
})();
