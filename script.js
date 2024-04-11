// Array de números inteiros
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isReversed = false;

// Função para exibir o array original ou revertido
function toggleArray() {
    const array = isReversed ? originalArray.slice().reverse() : originalArray;
    document.getElementById('arrayDisplay').textContent = isReversed ? 'Array Revertido: ' + array.join(', ') : 'Array Original: ' + array.join(', ');
    isReversed = !isReversed;
}

// Chama a função ao carregar a página
window.onload = toggleArray;
