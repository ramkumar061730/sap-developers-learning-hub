function filterByTag(tag, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.course-card').forEach(card => {
    const tags = card.dataset.tags || '';
    card.classList.toggle('hidden', tag !== 'all' && !tags.includes(tag));
  });
}

function filterCourses() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.course-card').forEach(card => {
    const title = (card.dataset.title || '').toLowerCase();
    const tags  = (card.dataset.tags || '').toLowerCase();
    const desc  = (card.querySelector('.card-desc')?.textContent || '').toLowerCase();
    card.classList.toggle('hidden', q && !title.includes(q) && !tags.includes(q) && !desc.includes(q));
  });
}
