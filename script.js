const lists = document.querySelectorAll('.list');
const input = document.getElementById('cardInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('list1');

let cardCount = 4; // you already have card1 to card4 in the HTML

// puts the drag listeners on a card (works for old and new cards)
function setupCard(card) {
    card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', card.id);
        e.dataTransfer.effectAllowed = 'move';
        setTimeout(() => card.classList.add('dragging'), 0);
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
    });
}

// set up the cards that already exist in the HTML
document.querySelectorAll('.card').forEach(setupCard);

// create a new card
function addCard() {
    const text = input.value.trim();
    if (text === '') return; // ignore empty text

    cardCount++;

    const card = document.createElement('div');
    card.classList.add('card');
    card.draggable = true;
    card.id = 'card' + cardCount;
    card.textContent = text;

    setupCard(card);
    todoList.appendChild(card);

    input.value = '';
    input.focus();
}

addButton.addEventListener('click', addCard);

// pressing Enter also adds the card
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') addCard();
});

// the lists
lists.forEach(list => {
    list.addEventListener('dragover', e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    list.addEventListener('dragenter', e => {
        e.preventDefault();
        list.classList.add('over');
    });

    list.addEventListener('dragleave', e => {
        if (!list.contains(e.relatedTarget)) {
            list.classList.remove('over');
        }
    });

    list.addEventListener('drop', e => {
        e.preventDefault();
        const card = document.getElementById(e.dataTransfer.getData('text/plain'));
        if (card) list.appendChild(card);
        list.classList.remove('over');
    });
});