var app = app || {};

app.allMenuItemsView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addMenuItem, this);
 		return this;
  },

 addMenuItem: function(menuItem) {
 		var menuItemView = new app.menuItemView ({ model: menuItem });
 		this.$el.append(menuItemView.render().el);
 }

});