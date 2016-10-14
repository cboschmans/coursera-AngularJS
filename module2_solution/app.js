(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("BuyingService",BuyingService);

ToBuyController.$inject=['BuyingService','$scope'];
function ToBuyController(BuyingService,$scope){
  var toBuy=this;
toBuy.list=BuyingService.getInStockList();
toBuy.hasAnEmptyList=BuyingService.stockDepleted;
toBuy.buy=function(index){
  BuyingService.addToBasket(index);
};


}

AlreadyBoughtController.$inject=['BuyingService'];
function AlreadyBoughtController(BuyingService){
  var alreadyBought=this;
  alreadyBought.list=  BuyingService.getInBasketList();
 alreadyBought.hasAnEmptyList=BuyingService.basketEmpty;
}


function BuyingService(){
  var service=this;
  service.inStockList=[{name:'Double lait bar',quantity:4},{name:'Moka rum bar',quantity:5},{name:'hazelnut chocolat bar',quantity:6},{name:'fondant chocolat bar',quantity:7},{name:'milk chocolat bar',quantity:8}];
  service.inBasketList=[];
  service.stockDepleted= {};
  service.basketEmpty={};
service.stockDepleted.isTrue=listIsEmpty(service.inStockList);
service.basketEmpty.isTrue=listIsEmpty(service.inBasketList);
  service.getInStockList=function(){
    return service.inStockList;
  };
  service.addToBasket= function(index){
  service.inBasketList.push(service.inStockList[index]);
  service.inStockList.splice(index,1);
    service.stockDepleted.isTrue=  listIsEmpty(service.inStockList);
    service.basketEmpty.isTrue=  listIsEmpty(service.inBasketList);
};


service.getInBasketList=function(){
  return service.inBasketList;
  };


}
var listIsEmpty=function(list){
    return list===undefined  || list.length==0;
  };

})();
