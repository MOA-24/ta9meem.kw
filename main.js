// Ta9meemkw — Main JS

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Order tabs
document.querySelectorAll('.order-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.order-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Order form submit — sends via WhatsApp
function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const product = form.product.value;
  const qty = form.quantity.value;
  const notes = form.notes.value.trim();

  const productLabels = {
    'medal': 'Medal — ميدالية',
    'sticker': 'Sticker — ستيكر',
    'birthday-card': 'Birthday Card — بطاقة عيد ميلاد'
  };

  const msg = `مرحبا Ta9meemkw 👋

*طلب جديد / New Order*
━━━━━━━━━━━━━━━━
👤 الاسم / Name: ${name}
📞 الهاتف / Phone: ${phone}
🎁 المنتج / Product: ${productLabels[product] || product}
🔢 الكمية / Qty: ${qty}
${notes ? `📝 ملاحظات / Notes:\n${notes}` : ''}
━━━━━━━━━━━━━━━━
شكراً! / Thank you!`;

  const url = `https://wa.me/96599280845?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  document.getElementById('formSuccess').classList.add('show');
  form.reset();
  setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 5000);
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .stat-card, .contact-card').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});
