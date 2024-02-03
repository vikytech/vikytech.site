(function() {
  $('#markdown-toc').hover(function() {
    return $(this).attr('data-bs-content', 'Table of Content');
  });

  $("#markdown-toc a").click(function() {
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

  $("#comments_in_post").click(function() {
    var disqus_shortname;
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    disqus_shortname = 'vikytech';
    return function() {
      var s;
      s = document.createElement('script');
      s.async = true;
      s.type = 'text/javascript';
      s.src = '//' + disqus_shortname + '.disqus.com/count.js';
      return (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    };
  });

}).call(this);
