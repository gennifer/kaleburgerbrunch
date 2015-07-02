var beardedLady = new app.menuItem({
  name: "The Bearded Lady",
  price: 10,
  img: "images/beardedLady.jpg",
  link: "beardLady"
});

var fortuneTeller = new app.menuItem({
  name: "The Fortune Teller",
  price: 10,
  img: "images/fortuneTeller.jpg",
  link: "fortuneTell"
});

var strongMan = new app.menuItem({
  name: "The Strong Man",
  price: 10,
  img: "images/strongMan.jpg",
  link: "strMan"
});

var fireEater = new app.menuItem({
  name: "The Fire Eater",
  price: 10,
  img: "images/fireEater.jpg",
  link: "fireEat"
});

var menuItemGroup = new app.BrunchMenuItems([
  beardedLady, fortuneTeller, strongMan, fireEater
]);

var menuItemGroupView = new app.allMenuItemsView({ collection: menuItemGroup});

$("#allMenuItems").html(menuItemGroupView.render().el);

var menuItemRouter = new app.Router();

Backbone.history.start();