// --- Array Storage Code ---
var codeMorse = [];

// Click/KeyPress - Call Event
document.querySelector('#btn').addEventListener('click', () => generation_code());
window.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        constrols_code();
    };
});

// --- Validation letter code ---
function constrols_code() {
    const text_main = document.querySelector('#text').value;
    if(text_main) {
        const text_upper = text_main.toLowerCase();
        const array_letter = text_upper.split('');
        array_letter.forEach(element => {
            switch(element) {
                case 'a':
                    generation_code('.-');
                    break;
                default:
                    console.log('Inválido!')
            };
        });
    };
};

function generation_code(letter) {
    console.log(letter);
};
