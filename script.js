document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase(); 
        const items = document.querySelectorAll('.search-item'); 
        
        items.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            
            // keywword thanh tim kiem
            if (title.includes(keyword)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
