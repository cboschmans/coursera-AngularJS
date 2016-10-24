(function () {
  'use strict';
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .controller('MenuListController',MenuListController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo={
      restrict:"E",
      templateUrl:'foundItems.html',
      scope:{
        list:'<foundItems',
        onRemove:'&'
      },
      controller:'MenuListController as menuResult',
      bindToController:true
    };
    return ddo;
  }

  function MenuListController(){
    var menuResult=this;
    menuResult.isEmpty=function(){
      if (menuResult.list==undefined)
      return false;
      else
      return menuResult.list.length===0;
    };
  }
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var searchForm=this;
    searchForm.searchForFood=function(searchTerm){
      MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result){
        searchForm.foundItems=result;});};
        searchForm.removeMenuItem=function(index){
          searchForm.foundItems.splice(index,1);
          console.log(searchForm.foundItems.length);
        };
      }

      MenuSearchService.$inject=['$http','$filter']
      function MenuSearchService($http,$filter){
        var menuSearch=this;
        menuSearch.getMatchedMenuItems=function (searchTerm){
          return $http({method:'GET',url:('https://davids-restaurant.herokuapp.com/menu_items.json')}).then(function  (response) {
            var foundItems=[];
            if (searchTerm!=undefined && 0!==searchTerm.length)
            foundItems =$filter('filter')(response.data.menu_items,{description:searchTerm.toString()});
            return foundItems;
          });
        };
      }

    })();
