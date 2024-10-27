// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona została w pełni załadowana.');

    // Przykład dodania dynamicznego zachowania
    const alertElement = document.querySelector('.alert');
    if (alertElement) {
        alertElement.addEventListener('closed.bs.alert', function () {
            console.log('Ostrzeżenie zostało zamknięte.');
        });
    }
});
