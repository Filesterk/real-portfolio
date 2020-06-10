  $(function () {
      var filterMulti = $('.filter-2').filterizr({
          setupControls: false
      });
      $('#filter-2 li').click(function () {
          var multifilter = $(this).data('multifltr');
          if (multifilter === 'all') {
              $('#filter-2 li').removeClass('active');
              $(this).addClass('active');
              filterMulti.filterizr('filter', 'all');
              filterMulti._fltr._toggledCategories = {};
          } else {
              $('#filter-2 li[data-multifltr="all"]').removeClass('active');
              $(this).toggleClass('active');
              filterMulti.filterizr('toggleFilter', multifilter);
          }
      });
  });