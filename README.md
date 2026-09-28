

Readme · MD
# Simple Board
 
A simple task board built with plain HTML, CSS and JavaScript. Add tasks by typing them and drag the cards between the **To Do**, **In Progress** and **Done** lists.
 
**Live demo:** https://Yuri-Gonch.github.io/to-do-list/
 
## Features
 
- Add new cards by typing text and clicking **Add Card** (or pressing Enter)
- Drag and drop cards between the three lists
- Highlight on the list where the card will be dropped
- Responsive layout (the lists stack on small screens)
## Technologies
 
- HTML5
- CSS3 (Flexbox)
- JavaScript (Drag and Drop API and DOM manipulation, no libraries)
## How to run
 
1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/simple-board.git
```
2. Open the folder in VS Code.
3. Open `index.html` in the browser, or use the **Live Server** extension.
## Project structure
 
```
simple-board/
├── index.html   # page structure
├── style.css    # styles
└── script.js    # drag and drop logic and card creation
```
 
## How it works
 
- Each card has `draggable="true"` and a unique `id`.
- On `dragstart`, the card's id is saved in `dataTransfer`.
- Each list listens for `dragover` and `drop`, and moves the card with `appendChild`.
- New cards are created with `document.createElement` and receive the same drag listeners as the existing ones.
## Possible improvements
 
- Save the cards with `localStorage`
- Delete and edit cards
- Choose which list a new card is added to
## Author
 
Made by Yuri while learning web development.
 
