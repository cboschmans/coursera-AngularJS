(function(){
  'use strict';
  angular.module('common')
  .directive("lncombinationexists",LNCombinationExistsValidator);

  LNCombinationExistsValidator.$inject=['MenuService'];
function LNCombinationExistsValidator(MenuService){
  var ddo= {
    require: 'ngModel',
    link: function(scope, elm, attrs, ngModel) {
      ngModel.$asyncValidators.lncombinationexists = function(modelValue, viewValue) {
        console.log(scope);
        console.log(ngModel);
var exists=MenuService.getMenuItemByLetterNumber(modelValue).then(function(result){
  if (result==undefined) return false;
  else {return true;}
});
      return exists;
      };
    }
  };
  return ddo;
}

})()
