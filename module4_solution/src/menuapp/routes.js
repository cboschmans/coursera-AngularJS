(function(){
  angular.module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject=[
    '$stateProvider','$urlRouterProvider'
  ];
  function RoutesConfig($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home',{
      url:'/',templateUrl:'src/menuapp/home.html'
    }).state('categories',{
      url:'/menucategories',
      templateUrl:'src/menuapp/categories/categories.html',
      controller:'CategoriesController as menu',
      resolve:{
        categories:['MenuDataService',function(MenuDataService){
              return MenuDataService.getAllCategories();
        }]
      }
    }).state('items',{
      url:'/category/{category_name}',
params:{category_short_name:null},
      templateUrl:'src/menuapp/items/items.html',
      controller:'ItemsController as category',
      resolve:{
        items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.category_short_name);
        } ],
        title:['$stateParams',function($stateParams){
          return $stateParams.category_name;
          } ]
      }
    });
  }
})();
