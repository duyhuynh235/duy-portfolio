/**
 * Huỳnh Nhật Duy — Java Backend Portfolio
 * Main JavaScript (Theme toggle & interaction)
 */

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        if (theme === 'dark') {
            icon.className = 'bi bi-sun-fill text-warning';
        } else {
            icon.className = 'bi bi-moon-stars-fill text-secondary';
        }
    }
}

// Khởi tạo theme từ localStorage khi tải trang
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-bs-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon(savedTheme);
});
