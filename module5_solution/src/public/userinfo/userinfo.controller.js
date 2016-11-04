(function(){
  'use strict';
  angular.module("public")
  .controller("UserInfoController",UserInfoController);

  UserInfoController.$inject=['user'];
  function UserInfoController(user){
    var userInfo=this;
    userInfo.user=user;
  }
})()
