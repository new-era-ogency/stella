/**
 * Stella Restaurant — client-side behaviour (Alpine.js components, Lucide, nav scroll).
 * Load order: lucide.min.js → app.js → alpinejs (defer).
 */

function menuBoard() {
  return {
    activeCategory: 'starters',
    eurRate: 1.95583,
    categories: [
      { id: 'starters', label: 'Starters' },
      { id: 'main', label: 'Main' },
      { id: 'bbq', label: 'BBQ' },
      { id: 'desserts', label: 'Desserts' },
      { id: 'drinks', label: 'Drinks' },
    ],
    eurFromBgn(bgn) {
      return (Number(bgn) / this.eurRate).toFixed(2);
    },
    formatBgn(bgn) {
      return Number(bgn).toFixed(2).replace('.', ',') + ' лв.';
    },
    dishes: {
      starters: [
        {
          id: 'st1',
          name: 'Traditional Shopska Salad',
          note: 'Cold starter classic — sirene (white brine cheese), cucumbers, peppers, olives, sunflower oil dressing.',
          bgn: 15.9,
          img: 'https://placehold.co/800x600/242420/d4af37/png?text=Shopska+Salad',
        },
        {
          id: 'st2',
          name: 'Smoked Trout Rillettes',
          note: 'Local Black Sea trout, capers, chive crème fraîche, brioche crisps.',
          bgn: 22.9,
          img: 'https://placehold.co/800x600/282828/d4af37/png?text=Smoked+Trout',
        },
        {
          id: 'st3',
          name: 'Beef Tartare Stella',
          note: 'Prime beef tenderloin cap, cornichons, quail egg, pepper tuile.',
          bgn: 28.5,
          img: 'https://placehold.co/800x600/303030/d4af37/png?text=Beef+Tartare',
        },
        {
          id: 'st4',
          name: 'Grilled Vegetables & Goat Cheese',
          note: 'Aubergines, zucchini, marinated peppers, balsamic glaze.',
          bgn: 17.9,
          img: 'https://placehold.co/800x600/252525/d4af37/png?text=Veg+Starter',
        },
      ],
      main: [
        {
          id: 'm1',
          name: 'Whole Grilled Seabass',
          note: 'Fish & seafood — seabass stuffed with lemons & herbs; lemon-brown butter (+150g side).',
          bgn: 38.9,
          img: 'https://placehold.co/800x600/242420/d4af37/png?text=Seabass',
        },
        {
          id: 'm2',
          name: 'Black Angus Ribeye Steak',
          note: 'Main course steak — rosemary butter, Cabernet jus (+ side of your choice).',
          bgn: 76.9,
          img: 'https://placehold.co/800x600/383838/d4af37/png?text=Ribeye',
        },
        {
          id: 'm3',
          name: 'Slow-Braised Beef Cheek',
          note: 'Root vegetable purée, red wine glacé — comfort-forward winter favourite.',
          bgn: 35.9,
          img: 'https://placehold.co/800x600/343434/d4af37/png?text=Beef+Cheek',
        },
        {
          id: 'm4',
          name: 'Lamb Cutlets Herb Crust',
          note: 'Rack trim, yoghurt-mint relish, smoky aubergine.',
          bgn: 51.9,
          img: 'https://placehold.co/800x600/323232/d4af37/png?text=Lamb',
        },
      ],
      bbq: [
        {
          id: 'b1',
          name: "Chef's Pork Skewer Platter",
          note: 'Stella barbecue — glazed pork cubes, spiced onion, pickles & flatbread.',
          bgn: 29.9,
          img: 'https://placehold.co/800x600/242420/d4af37/png?text=Pork+Skewers',
        },
        {
          id: 'b2',
          name: 'BBQ Pork Ribs (Half Rack)',
          note: 'House smoker glaze; coleslaw with apple cider dressing.',
          bgn: 33.9,
          img: 'https://placehold.co/800x600/484848/d4af37/png?text=Ribs',
        },
        {
          id: 'b3',
          name: 'Kyufte & Kebapche Trio',
          note: 'Grill speciality — spiced minced pork & beef, lyutenitsa, roasted peppers.',
          bgn: 25.9,
          img: 'https://placehold.co/800x600/2a2a2a/d4af37/png?text=BBQ+Mince',
        },
        {
          id: 'b4',
          name: 'Charcoal-Spiced Chicken Thigh',
          note: 'Yoghurt-marinated, pomegranate molasses drizzle, pickled onion.',
          bgn: 22.9,
          img: 'https://placehold.co/800x600/454545/d4af37/png?text=Chicken+BBQ',
        },
      ],
      desserts: [
        {
          id: 'd1',
          name: 'Baklava & Rose Ice Cream',
          note: 'Layered walnuts, golden syrup, Bulgarian yoghurt ice cream scoop.',
          bgn: 15.9,
          img: 'https://placehold.co/800x600/3a3835/d4af37/png?text=Baklava',
        },
        {
          id: 'd2',
          name: 'Dark Chocolate Délice',
          note: 'Pistachio praline, salt caramel core, cacao nib tuile.',
          bgn: 14.9,
          img: 'https://placehold.co/800x600/393939/d4af37/png?text=Chocolate',
        },
        {
          id: 'd3',
          name: 'Raspberry Vanilla Panna Cotta',
          note: 'Mascarpone set cream, marinated berries, iced basil oil.',
          bgn: 13.9,
          img: 'https://placehold.co/800x600/474747/d4af37/png?text=Panna+Cotta',
        },
      ],
      drinks: [
        {
          id: 'dk1',
          name: 'Stella Signature Spritz',
          note: 'Aperitifs — grapefruit, prosecco cordial, gold leaf.',
          bgn: 13.9,
          img: 'https://placehold.co/800x600/404040/d4af37/png?text=Spritz',
        },
        {
          id: 'dk2',
          name: 'House Red (glass)',
          note: 'Local Thracian Valley blend · sommelier’s pour.',
          bgn: 13.9,
          img: 'https://placehold.co/800x600/505050/d4af37/png?text=House+Wine',
        },
        {
          id: 'dk3',
          name: 'Barrel-aged Negroni',
          note: 'Gin-forward classic, orange oils, Stella ice stamp.',
          bgn: 16.9,
          img: 'https://placehold.co/800x600/444444/d4af37/png?text=Negroni',
        },
        {
          id: 'dk4',
          name: 'Coffee & Digestif Duo',
          note: 'Double espresso · 40ml Bulgarian aged rakia.',
          bgn: 12.9,
          img: 'https://placehold.co/800x600/3d3d3d/d4af37/png?text=Coffee+Rakia',
        },
      ],
    },
  };
}

/* Lucide: initial pass + after Alpine mounts dynamic DOM */
if (typeof lucide !== 'undefined' && lucide.createIcons) {
  lucide.createIcons();
}

document.addEventListener('alpine:initialized', function () {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
});

(function initFooterYear() {
  var yEl = document.getElementById('stella-year');
  if (yEl) yEl.textContent = String(new Date().getFullYear());
})();

(function initNavScroll() {
  var header = document.getElementById('site-header');
  if (!header) return;

  var threshold = 24;

  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

(function initScrollReveal() {
  var mm = window.matchMedia('(prefers-reduced-motion: reduce)');
  var io = null;

  function revealAll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  function setup() {
    if (mm.matches || typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.09 }
      );
    }
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (!el.classList.contains('is-visible')) {
        io.observe(el);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
  document.addEventListener('alpine:initialized', setup);
})();
