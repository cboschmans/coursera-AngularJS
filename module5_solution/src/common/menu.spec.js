describe("menuitemByLetterNumberCombination",function(){
var menu;
var $httpBackend;
var ApiPath;

beforeEach(function(){
module('common');
inject(function($injector){
  menu=$injector.get('MenuService');
  $httpBackend=$injector.get('$httpBackend');
  ApiPath=$injector.get('ApiPath');
});
});

it('should return one menuitem object when LN combi is on menu', function(){
  $httpBackend.expectGET(ApiPath+"/menu_items/B1.json").respond({ id:12,short_name:"B1",name:"Beef Egg Roll",
  description:"eggroll with cabbage, carrots and beef",price_small:null,price_large:3,
  small_portion_name:null,large_portion_name:null,created_at:"2016-11-02T13:50:21.290Z",
  updated_at:"2016-11-02T13:50:21.290Z",category_short_name:"B",image_present:true });

menu.getMenuItemByLetterNumber('B1').then(function(response){
  expect(response).toEqual({ id:12,short_name:"B1",name:"Beef Egg Roll",
  description:"eggroll with cabbage, carrots and beef",price_small:null,price_large:3,
  small_portion_name:null,large_portion_name:null,created_at:"2016-11-02T13:50:21.290Z",
  updated_at:"2016-11-02T13:50:21.290Z",category_short_name:"B",image_present:true });
  });
$httpBackend.flush();
});

it('should return no menuitem object when LN combi is not on menu', function(){
  $httpBackend.expectGET(ApiPath+"/menu_items/B.json").respond({status:"500",error:"Internal Server Error"});
  menu.getMenuItemByLetterNumber('B').then(function(response){
        expect(response).toEqual({status:"500",error:"Internal Server Error"});
      });
          $httpBackend.flush();
    });
});
