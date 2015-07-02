var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"strMan" : "strManDescription",
	"fortuneTell": "fortuneTellDescription",
	"beardLady" : "beardLadyDescription",
	"fireEat" : "fireEatDescription"
},

noCopy: function() {
  $("#copy").html("");
},

strManDescription: function() {
  $("#copy").html("Seasonal vegetable & local tofu scramble over herb roasted potatoes and kale burger. Served with a side of fresh salsa or beetsup.");
},

fortuneTellDescription: function() {
  $("#copy").html("House-made whole-wheat biscuits (gf + $1) with kale burger and a seasonal vegetable & local tofu scramble, topped with a cashew hollandaise sauce.");
},

beardLadyDescription: function() {
  $("#copy").html("House-made whole-wheat biscuits (gf + $1) with kale burger and a sasonal vegetable & local tofu scramble, topped with a mushroom & herb gravy.");
},

fireEatDescription: function() {
  $("#copy").html("Kale burger, black beans, seasonal vegetable & local tofu scramble stacked between corn tostadas, and smothered in roasted tomatillo salsa.");
}
});


