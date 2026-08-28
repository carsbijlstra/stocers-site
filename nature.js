/* STOCERS /nature — i18n, reveals, analytics events */
(function () {
  var T = {
    en: {
      'nav.home': 'Home', 'nav.product': 'Product', 'nav.nature': 'Nature',
      'badge.tip': '200+ trees every year',
      'hero.title': 'Trees funded in 2026', 'hero.sub': 'And at least 200 more every year.',
      'hero.nl': 'Netherlands', 'hero.cta': 'View the 2026 certificate',
      'credit': 'Photo: Trees for All',
      'r.trees': 'Trees funded', 'r.date': 'Certificate date', 'r.dateval': '20 Aug 2026',
      'r.num': 'Certificate number', 'r.partner': 'Official tree partner',
      'r.note': 'STOCERS is a Trees for All tree partner. Through this partnership we fund the planting of at least 200 trees every year.',
      'c.kicker': 'Certificate', 'c.title': 'Counted, not guessed.',
      'c.sub': 'We publish the proof behind our annual contribution.',
      'c.l1': 'Issued to', 'c.l2': 'Trees', 'c.l3': 'Date', 'c.dateval': '20 August 2026',
      'c.l4': 'Certificate no.', 'c.l5': 'Planted through', 'c.l6': 'Project countries',
      'c.countries': 'Netherlands and Vietnam',
      'c.view': 'View certificate', 'c.dl': 'Download PDF', 'c.file': 'Official Trees for All certificate (PDF)',
      'w.kicker': 'How it works', 'w.title': 'How our partnership works',
      'w.1t': 'STOCERS funds', 'w.1b': 'Every year, STOCERS contributes to tree planting through Trees for All.',
      'w.2t': 'Trees for All plants', 'w.2b': 'Trees for All works with its project partners to plant and grow trees in the Netherlands and abroad.',
      'w.3t': 'We publish the proof', 'w.3b': 'Each year we publish the confirmed number, location information and certificate here.',
      'i.kicker': '2026 impact', 'i.title': '200 trees, two countries', 'i.nl': 'The Netherlands',
      'i.note': 'Our 2026 Trees for All certificate confirms a contribution for 200 trees in the Netherlands and Vietnam.',
      'y.kicker': 'Impact areas', 'y.title': 'Why trees matter',
      'y.body': 'Trees contribute to climate resilience, biodiversity and healthier living environments. That is why STOCERS chooses to support tree planting through Trees for All.',
      'y.1': 'Better climate', 'y.2': 'Biodiversity', 'y.3': 'Healthy living conditions',
      'a.kicker': 'Archive', 'a.title': 'Our growing record', 'a.year': 'Year', 'a.trees': 'Trees',
      'a.where': 'Where', 'a.proof': 'Proof', 'a.where26': 'Netherlands + Vietnam', 'a.cert': 'Certificate 260343',
      'a.next': '2027: at least 200 trees, published as soon as the certificate is confirmed.',
      'z.title1': 'Nature provides.', 'z.title2': 'STOCERS gives back.',
      'z.body': 'Our commitment is simple: fund at least 200 trees every year through Trees for All, and publish the proof.',
      'z.cta1': 'Discover STOCERS', 'z.cta2': 'Become a dealer',
      'f.tag': 'Natural wood wool firelighters with reliable performance and honest value. One match, every time.',
      'f.explore': 'Explore', 'f.product': 'The product', 'f.sizes': 'Order sizes', 'f.dealers': 'Dealers',
      'f.dealer': 'Become a dealer', 'f.mail': 'Email us', 'f.natlink': '200+ trees every year',
      'f.cert': 'Certificate 2026', 'f.rights': 'All rights reserved.'
    },
    nl: {
      'nav.home': 'Home', 'nav.product': 'Product', 'nav.nature': 'Nature',
      'badge.tip': '200+ bomen per jaar',
      'hero.title': 'Bomen gefinancierd in 2026', 'hero.sub': 'En elk jaar minimaal 200 nieuwe.',
      'hero.nl': 'Nederland', 'hero.cta': 'Bekijk het certificaat 2026',
      'credit': 'Foto: Trees for All',
      'r.trees': 'Bomen gefinancierd', 'r.date': 'Datum certificaat', 'r.dateval': '20 aug 2026',
      'r.num': 'Certificaatnummer', 'r.partner': 'Officieel bomenpartner',
      'r.note': 'STOCERS is bomenpartner van Trees for All. Via dit partnerschap financieren wij elk jaar de aanplant van minimaal 200 bomen.',
      'c.kicker': 'Certificaat', 'c.title': 'Geteld, niet geschat.',
      'c.sub': 'Wij publiceren het bewijs achter onze jaarlijkse bijdrage.',
      'c.l1': 'Uitgereikt aan', 'c.l2': 'Bomen', 'c.l3': 'Datum', 'c.dateval': '20 augustus 2026',
      'c.l4': 'Certificaatnummer', 'c.l5': 'Geplant via', 'c.l6': 'Projectlanden',
      'c.countries': 'Nederland en Vietnam',
      'c.view': 'Bekijk certificaat', 'c.dl': 'Download pdf', 'c.file': 'Officieel certificaat van Trees for All (pdf)',
      'w.kicker': 'Hoe het werkt', 'w.title': 'Hoe ons partnerschap werkt',
      'w.1t': 'STOCERS financiert', 'w.1b': 'Elk jaar draagt STOCERS via Trees for All bij aan boomaanplant.',
      'w.2t': 'Trees for All plant', 'w.2b': 'Trees for All werkt samen met projectpartners om bomen te planten en te laten groeien in Nederland en in het buitenland.',
      'w.3t': 'Wij publiceren het bewijs', 'w.3b': 'Elk jaar publiceren wij hier het bevestigde aantal, de locatie-informatie en het certificaat.',
      'i.kicker': 'Impact 2026', 'i.title': '200 bomen, twee landen', 'i.nl': 'Nederland',
      'i.note': 'Ons Trees for All-certificaat van 2026 bevestigt een bijdrage voor 200 bomen in Nederland en Vietnam.',
      'y.kicker': 'Impactgebieden', 'y.title': 'Waarom bomen belangrijk zijn',
      'y.body': 'Bomen dragen bij aan een veerkrachtig klimaat, aan biodiversiteit en aan een gezondere leefomgeving. Daarom kiest STOCERS ervoor boomaanplant te steunen via Trees for All.',
      'y.1': 'Beter klimaat', 'y.2': 'Biodiversiteit', 'y.3': 'Gezonde leefomstandigheden',
      'a.kicker': 'Archief', 'a.title': 'Ons groeiende dossier', 'a.year': 'Jaar', 'a.trees': 'Bomen',
      'a.where': 'Waar', 'a.proof': 'Bewijs', 'a.where26': 'Nederland + Vietnam', 'a.cert': 'Certificaat 260343',
      'a.next': '2027: minimaal 200 bomen, gepubliceerd zodra het certificaat bevestigd is.',
      'z.title1': 'De natuur geeft.', 'z.title2': 'STOCERS geeft terug.',
      'z.body': 'Onze belofte is simpel: elk jaar minimaal 200 bomen financieren via Trees for All en het bewijs publiceren.',
      'z.cta1': 'Ontdek STOCERS', 'z.cta2': 'Dealer worden',
      'f.tag': 'Natuurlijke aanmaakwokkels van houtwol met betrouwbare prestaties en een eerlijke prijs. Eén lucifer, elke keer.',
      'f.explore': 'Ontdek', 'f.product': 'Het product', 'f.sizes': 'Ordergroottes', 'f.dealers': 'Dealers',
      'f.dealer': 'Dealer worden', 'f.mail': 'Mail ons', 'f.natlink': '200+ bomen per jaar',
      'f.cert': 'Certificaat 2026', 'f.rights': 'Alle rechten voorbehouden.'
    },
    de: {
      'nav.home': 'Startseite', 'nav.product': 'Produkt', 'nav.nature': 'Nature',
      'badge.tip': '200+ Bäume pro Jahr',
      'hero.title': 'Bäume finanziert im Jahr 2026', 'hero.sub': 'Und jedes Jahr mindestens 200 weitere.',
      'hero.nl': 'Niederlande', 'hero.cta': 'Zertifikat 2026 ansehen',
      'credit': 'Foto: Trees for All',
      'r.trees': 'Finanzierte Bäume', 'r.date': 'Datum des Zertifikats', 'r.dateval': '20. Aug. 2026',
      'r.num': 'Zertifikatsnummer', 'r.partner': 'Offizieller Baumpartner',
      'r.note': 'STOCERS ist Baumpartner von Trees for All. Über diese Partnerschaft finanzieren wir jedes Jahr die Pflanzung von mindestens 200 Bäumen.',
      'c.kicker': 'Zertifikat', 'c.title': 'Gezählt, nicht geschätzt.',
      'c.sub': 'Wir veröffentlichen den Nachweis unseres jährlichen Beitrags.',
      'c.l1': 'Ausgestellt für', 'c.l2': 'Bäume', 'c.l3': 'Datum', 'c.dateval': '20. August 2026',
      'c.l4': 'Zertifikat-Nr.', 'c.l5': 'Gepflanzt über', 'c.l6': 'Projektländer',
      'c.countries': 'Niederlande und Vietnam',
      'c.view': 'Zertifikat ansehen', 'c.dl': 'PDF herunterladen', 'c.file': 'Offizielles Trees for All Zertifikat (PDF)',
      'w.kicker': 'So funktioniert es', 'w.title': 'Wie unsere Partnerschaft funktioniert',
      'w.1t': 'STOCERS finanziert', 'w.1b': 'Jedes Jahr trägt STOCERS über Trees for All zur Baumpflanzung bei.',
      'w.2t': 'Trees for All pflanzt', 'w.2b': 'Trees for All pflanzt gemeinsam mit Projektpartnern Bäume in den Niederlanden und im Ausland und begleitet ihr Wachstum.',
      'w.3t': 'Wir veröffentlichen den Nachweis', 'w.3b': 'Jedes Jahr veröffentlichen wir hier die bestätigte Anzahl, Angaben zum Standort und das Zertifikat.',
      'i.kicker': 'Impact 2026', 'i.title': '200 Bäume, zwei Länder', 'i.nl': 'Niederlande',
      'i.note': 'Unser Trees for All Zertifikat 2026 bestätigt einen Beitrag für 200 Bäume in den Niederlanden und in Vietnam.',
      'y.kicker': 'Wirkungsfelder', 'y.title': 'Warum Bäume zählen',
      'y.body': 'Bäume tragen zu Klimaresilienz, Biodiversität und einem gesünderen Lebensumfeld bei. Deshalb unterstützt STOCERS Baumpflanzungen über Trees for All.',
      'y.1': 'Besseres Klima', 'y.2': 'Biodiversität', 'y.3': 'Gesunde Lebensbedingungen',
      'a.kicker': 'Archiv', 'a.title': 'Unsere wachsende Bilanz', 'a.year': 'Jahr', 'a.trees': 'Bäume',
      'a.where': 'Wo', 'a.proof': 'Nachweis', 'a.where26': 'Niederlande + Vietnam', 'a.cert': 'Zertifikat 260343',
      'a.next': '2027: mindestens 200 Bäume, veröffentlicht sobald das Zertifikat bestätigt ist.',
      'z.title1': 'Die Natur gibt.', 'z.title2': 'STOCERS gibt zurück.',
      'z.body': 'Unser Versprechen ist einfach: jedes Jahr mindestens 200 Bäume über Trees for All finanzieren und den Nachweis veröffentlichen.',
      'z.cta1': 'STOCERS entdecken', 'z.cta2': 'Händler werden',
      'f.tag': 'Natürliche Holzwolle-Anzünder mit verlässlicher Leistung und ehrlichem Preis. Ein Streichholz, jedes Mal.',
      'f.explore': 'Entdecken', 'f.product': 'Das Produkt', 'f.sizes': 'Bestellgrößen', 'f.dealers': 'Händler',
      'f.dealer': 'Händler werden', 'f.mail': 'Schreiben Sie uns', 'f.natlink': '200+ Bäume pro Jahr',
      'f.cert': 'Zertifikat 2026', 'f.rights': 'Alle Rechte vorbehalten.'
    },
    fr: {
      'nav.home': 'Accueil', 'nav.product': 'Produit', 'nav.nature': 'Nature',
      'badge.tip': '200+ arbres par an',
      'hero.title': 'Arbres financés en 2026', 'hero.sub': 'Et au moins 200 de plus chaque année.',
      'hero.nl': 'Pays-Bas', 'hero.cta': 'Voir le certificat 2026',
      'credit': 'Photo : Trees for All',
      'r.trees': 'Arbres financés', 'r.date': 'Date du certificat', 'r.dateval': '20 août 2026',
      'r.num': 'Numéro de certificat', 'r.partner': 'Partenaire arbres officiel',
      'r.note': 'STOCERS est partenaire arbres de Trees for All. Grâce à ce partenariat, nous finançons chaque année la plantation d\u2019au moins 200 arbres.',
      'c.kicker': 'Certificat', 'c.title': 'Compté, pas estimé.',
      'c.sub': 'Nous publions la preuve de notre contribution annuelle.',
      'c.l1': 'Délivré à', 'c.l2': 'Arbres', 'c.l3': 'Date', 'c.dateval': '20 août 2026',
      'c.l4': 'N° de certificat', 'c.l5': 'Planté via', 'c.l6': 'Pays des projets',
      'c.countries': 'Pays-Bas et Vietnam',
      'c.view': 'Voir le certificat', 'c.dl': 'Télécharger le PDF', 'c.file': 'Certificat officiel Trees for All (PDF)',
      'w.kicker': 'Comment ça marche', 'w.title': 'Comment fonctionne notre partenariat',
      'w.1t': 'STOCERS finance', 'w.1b': 'Chaque année, STOCERS contribue à la plantation d\u2019arbres via Trees for All.',
      'w.2t': 'Trees for All plante', 'w.2b': 'Trees for All plante et fait croître des arbres aux Pays-Bas et à l\u2019étranger avec ses partenaires de projet.',
      'w.3t': 'Nous publions la preuve', 'w.3b': 'Chaque année, nous publions ici le nombre confirmé, les informations de localisation et le certificat.',
      'i.kicker': 'Impact 2026', 'i.title': '200 arbres, deux pays', 'i.nl': 'Pays-Bas',
      'i.note': 'Notre certificat Trees for All 2026 confirme une contribution pour 200 arbres aux Pays-Bas et au Vietnam.',
      'y.kicker': 'Domaines d\u2019impact', 'y.title': 'Pourquoi les arbres comptent',
      'y.body': 'Les arbres contribuent à la résilience climatique, à la biodiversité et à un cadre de vie plus sain. C\u2019est pourquoi STOCERS soutient la plantation d\u2019arbres via Trees for All.',
      'y.1': 'Un meilleur climat', 'y.2': 'Biodiversité', 'y.3': 'Des conditions de vie saines',
      'a.kicker': 'Archives', 'a.title': 'Notre bilan qui grandit', 'a.year': 'Année', 'a.trees': 'Arbres',
      'a.where': 'Où', 'a.proof': 'Preuve', 'a.where26': 'Pays-Bas + Vietnam', 'a.cert': 'Certificat 260343',
      'a.next': '2027 : au moins 200 arbres, publiés dès que le certificat est confirmé.',
      'z.title1': 'La nature donne.', 'z.title2': 'STOCERS rend.',
      'z.body': 'Notre engagement est simple : financer au moins 200 arbres chaque année via Trees for All et en publier la preuve.',
      'z.cta1': 'Découvrir STOCERS', 'z.cta2': 'Devenir revendeur',
      'f.tag': 'Allume-feux naturels en laine de bois, fiables et au juste prix. Une allumette, à chaque fois.',
      'f.explore': 'Découvrir', 'f.product': 'Le produit', 'f.sizes': 'Formats de commande', 'f.dealers': 'Revendeurs',
      'f.dealer': 'Devenir revendeur', 'f.mail': 'Écrivez-nous', 'f.natlink': '200+ arbres par an',
      'f.cert': 'Certificat 2026', 'f.rights': 'Tous droits réservés.'
    }
  };
  var KEY = 'stocers-nature-lang';
  var LANGS = ['en', 'nl', 'de', 'fr'];

  function track(name, extra) {
    try {
      if (typeof window.va === 'function') window.va('event', Object.assign({ name: name }, extra || {}));
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: name }, extra || {}));
    } catch (e) {}
  }

  function apply(lang) {
    var dict = T[lang] || T.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v) el.textContent = v;
    });
    document.querySelectorAll('.na__row > span[data-l]').forEach(function (el, i) {
      var keys = ['a.year', 'a.trees', 'a.where', 'a.proof'];
      var k = dict[keys[i % 4]];
      if (k) el.setAttribute('data-l', k);
    });
    document.querySelectorAll('.langs__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  function detect() {
    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) > -1) return code;
    }
    return 'en';
  }

  apply(detect());

  document.querySelectorAll('.langs__btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      apply(lang);
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      track('language_change', { lang: lang });
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var mail = atob('c2FsZXNAc3Rv' + 'Y2Vycy5jb20=');
  document.querySelectorAll('[data-mail]').forEach(function (el) {
    el.setAttribute('href', 'mailto:' + mail + '?subject=' + encodeURIComponent('STOCERS x Trees for All'));
  });

  document.querySelectorAll('[data-ev]').forEach(function (el) {
    el.addEventListener('click', function () { track(el.getAttribute('data-ev')); });
  });

  // Desktop: show the original certificate PDF inline on first click (lazy, so the file
  // is never part of the initial load). Mobile: let the link open the native PDF viewer.
  var certBtn = document.querySelector('[data-cert-view]');
  var embed = document.querySelector('.nc__embed');
  if (certBtn && embed) {
    certBtn.addEventListener('click', function (e) {
      if (!window.matchMedia('(min-width:900px)').matches) return;
      e.preventDefault();
      if (!embed.getAttribute('data-loaded')) {
        var f = document.createElement('iframe');
        f.setAttribute('src', certBtn.getAttribute('href') + '#view=FitH');
        f.setAttribute('title', 'Trees for All certificate 260343');
        f.setAttribute('loading', 'lazy');
        embed.appendChild(f);
        embed.setAttribute('data-loaded', '1');
        embed.hidden = false;
      } else {
        embed.hidden = !embed.hidden;
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }

  track('nature_page_view');
  var marks = { 50: false, 90: false };
  window.addEventListener('scroll', function () {
    var h = document.documentElement;
    var pct = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
    if (!marks[50] && pct >= 50) { marks[50] = true; track('scroll_50'); }
    if (!marks[90] && pct >= 90) { marks[90] = true; track('scroll_90'); }
  }, { passive: true });
})();
