document.getElementById('year').textContent = new Date().getFullYear();
(function(){
  var mail = atob('c2FsZXNAc3Rv' + 'Y2Vycy5jb20=');
  document.querySelectorAll('[data-mail]').forEach(function(el){
    el.setAttribute('href', 'mailto:' + mail + '?subject=' + encodeURIComponent('STOCERS trees, 200+ every year'));
  });
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .nat-trees').forEach(function(el){ obs.observe(el); });
})();
