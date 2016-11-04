(function(){
  'use strict';
  angular.module('public')
  .controller('OptinController',OptinController);
  OptinController.$inject=['RegistrationService','MenuService'];
  function OptinController(RegistrationService,MenuService){
    var optin=this;

    optin.register=function(){
  RegistrationService.user.firstName=optin.firstName;
RegistrationService.user.lastName=optin.lastName;
RegistrationService.user.email=optin.email;
RegistrationService.user.phoneNumber=optin.phoneNumber;
MenuService.getMenuItemByLetterNumber(optin.favorite).then(function(response){
RegistrationService.user.favorite= response;

});
    };

  }

})()
