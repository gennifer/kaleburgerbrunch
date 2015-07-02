var app = app || {};

app.menuItemView = Backbone.View.extend({

  tagName: "article",
  className: "menuItemListItem",

  template: _.template( $("#menuItemElement").html() ),

  render: function() {
    var menuItemTemplate = this.template(this.model.toJSON());
    this.$el.html(menuItemTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});