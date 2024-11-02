// script.js
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        // Sembunyikan semua konten
        document.querySelectorAll('section.collapse').forEach(section => {
            section.classList.remove('show');
        });

        // Tampilkan konten yang sesuai dengan menu yang diklik
        const target = item.getAttribute('href');
        const targetContent = document.querySelector(target + 'Content');
        if (targetContent) {
            targetContent.classList.add('show');
        }
    });
});
