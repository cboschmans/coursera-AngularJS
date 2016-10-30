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
    dataService.getItemsForCategory=function(shortName){
      console.log(shortName)
        return $http({method:'GET',url:(ApiBasePath+"/menu_items.json"),params:{category:shortName}});
    };
  }
})();