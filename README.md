# L-Eco-della-Pergamena
A short point-and-click mystery game about finding a lost sacred manuscript. Built with vanilla JavaScript, HTML, and CSS to showcase DOM manipulation and state management skills. Explore a monastery archive and uncover its secrets.


L'Eco della Pergamena
A Medieval Monastery Adventure Game

About the Project
L'Eco della Pergamena (The Echo of the Parchment) is a point-and-click adventure game set in a medieval monastery. You play as a researcher tasked with finding a lost manuscript containing a divine melody that has been missing for centuries.

Story
You are in the archives of the Monastery of Monte Cassino. The abbot has given you a single task: find the legendary "Codice Manoscritto" containing the "Lost Chant of St. Benedict". To accomplish this, you must follow clues left in objects throughout the room.

How to Run the Project
Prerequisites
Modern web browser (Chrome, Firefox, Edge, Safari)

Python 3.x (optional, for local server)

Execution Methods
Method 1: Local Server (Recommended)
bash
# Navigate to the project folder
cd L-ECO-DELLA-PERGAMENA

# Run a local HTTP server
python -m http.server 8000

# Open in browser: http://localhost:8000
Method 2: With Node.js
bash
# If you have http-server installed
npx http-server

# Or install globally
npm install -g http-server
http-server
Method 3: With PHP
bash
php -S localhost:8000
Method 4: VS Code Extension
Install the "Live Server" extension

Right-click on index.html

Select "Open with Live Server"

How to Play
Objective
Find the lost manuscript "L'Eco della Pergamena" by following clues in the correct order.

Game Sequence
Click the Diary (brown object on the table)

Discover the first clue about where to search

Click the Lectionary (golden book on the shelf)

Find the verse that reveals the final clue

Click the Stained Glass (colored window)

Find the hidden manuscript

Interface
Main Scene: Monastery environment with interactive objects

Message Box: Shows clues and narrative

Inventory: Icons showing your progress

Tooltips: Hover over objects to see their names

Controls
Mouse: Click objects to interact

D Key: Debug mode (shows game state)

R Key: Reset game

Project Architecture
File Structure
text
L-ECO-DELLA-PERGAMENA/
├── js/
│   ├── constants.js    # Game texts and configurations
│   ├── gameState.js    # State management
│   ├── main.js         # Main controller
│   └── ui.js           # User interface
├── index.html          # Main structure
├── style.css           # Styles and design
├── LICENSE            # MIT License
└── README.md          # This file
Technologies Used
HTML5: Semantic structure

CSS3: Responsive design and animations

JavaScript ES6+: Game logic with modules

Module Pattern: Scalable modular architecture

JavaScript Modules
constants.js
javascript
// Centralizes all messages and configurations
export const MESSAGES = { ... };
export const ELEMENTS = { ... };
gameState.js
javascript
// Manages game state with encapsulation
export class GameState { ... }
ui.js
javascript
// Controls all user interface
export class UIManager { ... }
main.js
javascript
// Orchestrates game and events
import { gameState } from './gameState.js';
// ... other imports
Development
Technical Features
Modular Architecture: Organized and maintainable code

Separation of Concerns: Logic, UI and data separated

Responsive Design: Works on different screen sizes

Visual Feedback: Animations and transitions

Integrated Debug: Development tools

Design Patterns
Singleton: For state and UI managers

Module Pattern: Code organization in modules

Observer Pattern: Event listeners for interactions

Troubleshooting
Common Error: "Failed to load module"
Problem: ES6 modules not loading
Solution: Use a local HTTP server (don't open file directly)

Common Error: "404 File not found"
Problem: JavaScript files not found
Solution: Verify all 4 files are in the js/ folder

Debug Console
Open Console (F12) and check for these messages:

text
Main.js loaded successfully
GameController initialized  
Game initialized
License
This project is under the MIT License. See the LICENSE file for details.

Credits
Developed as a demonstration of modular software architecture using pure JavaScript, HTML5 and CSS3.

