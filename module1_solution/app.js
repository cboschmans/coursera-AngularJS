(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller("LunchCheckController",LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
      $scope.menu="";
      $scope.sayMessage = function () {
          var lunchItems=  $scope.menu.split(',');
        if (lunchItems.length===1 && lunchItems[0]===""){
    $scope.message="Please enter data first";
  } else if(lunchItems.length>2){
    $scope.message="Too much";
  }
    else {
    $scope.message="Enjoy";
  }
  };
};
})();
