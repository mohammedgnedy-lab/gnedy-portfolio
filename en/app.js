// فلترة الأعمال
document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.work-card');

  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      const val = p.dataset.filter;
      cards.forEach(card => {
        const cats = (card.dataset.category || '').split(',').map(s => s.trim());
        if (val === 'all' || cats.includes(val)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
