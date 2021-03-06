makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.PortfolioTagView = Backbone.View.extend({

    tagName: 'a',
    className: 'portfolioTag',

    render: function () {
      var $el = $(this.el)
        .attr({class: this.className})
        .html(this.model.escape('name'));

      if (this.model.get('selected')) {
        $el.addClass('portfolioTag-isSelected');
      }

      $el.click(_.bind(this.onClick, this));
      return this;
    },

    onClick: function (/*e*/) {
      Backbone.history.navigate('/portfolios/tag/' + this.model.get('id'), {trigger: true});
    }

  }, {
    toTagClassName: function (str) {
      return _.trim(str).replace(/[\s\-]/, '_').toLowerCase();
    }
  });


})();
