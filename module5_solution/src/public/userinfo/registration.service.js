(function (){
  'use strict';
  angular.module('public')
  .service('RegistrationService',RegistrationService);

  function RegistrationService(){
    var registered=this;
    registered.user={};
registered.getUser=function(){
return  registered.user;
};
  }
})()
