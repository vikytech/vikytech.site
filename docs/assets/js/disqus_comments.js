(function() {
  var disqus_config;

  disqus_config = function() {
    this.page.url = 'https://vikytech.in/assets/js/disqus_comments.js';
    this.page.identifier = 'https://vikytech.in/assets/js/disqus_comments.js';
    return false;
  };

  (function() {
    var d, s;
    d = document;
    s = d.createElement('script');
    s.src = 'https://vikytech.disqus.com/embed.js';
    s.setAttribute('data-bs-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    return false;
  });

}).call(this);
