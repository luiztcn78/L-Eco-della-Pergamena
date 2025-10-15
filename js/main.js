// Main application module - orchestrates the entire game
import { gameState } from './gameState.js';
import { uiManager } from './ui.js';
import { MESSAGES, ELEMENTS } from './constants.js';

class GameController {
    constructor() {
        // Aguardar um frame para garantir que o DOM está totalmente renderizado
        setTimeout(() => {
            this.initializeGame();
            this.setupEventListeners();
        }, 0);
    }

    // Initialize game state and UI
    initializeGame() {
        // Update UI with initial state
        uiManager.updateInventory(gameState);
        uiManager.updateMessage(MESSAGES.WELCOME);
        
        // Log initialization for debugging
        console.log('Game initialized with state:', gameState.export());
        console.log('DOM elements found:', {
            diary: document.getElementById(ELEMENTS.DIARY),
            lectionary: document.getElementById(ELEMENTS.LECTIONARY),
            stainedGlass: document.getElementById(ELEMENTS.STAINED_GLASS)
        });
    }

    // Set up all event listeners
    setupEventListeners() {
        const diary = uiManager.getElement(ELEMENTS.DIARY);
        const lectionary = uiManager.getElement(ELEMENTS.LECTIONARY);
        const stainedGlass = uiManager.getElement(ELEMENTS.STAINED_GLASS);

        console.log('Setting up event listeners for:', { diary, lectionary, stainedGlass });

        // Diary interaction
        if (diary) {
            uiManager.addEventListener(diary, 'click', () => this.handleDiaryClick());
            console.log('Diary event listener added');
        } else {
            console.error('Diary element not found');
        }

        // Lectionary interaction
        if (lectionary) {
            uiManager.addEventListener(lectionary, 'click', () => this.handleLectionaryClick());
            console.log('Lectionary event listener added');
        } else {
            console.error('Lectionary element not found');
        }

        // Stained glass interaction
        if (stainedGlass) {
            uiManager.addEventListener(stainedGlass, 'click', () => this.handleStainedGlassClick());
            console.log('Stained glass event listener added');
        } else {
            console.error('Stained glass element not found');
        }

        // Debug functionality
        uiManager.addEventListener(document, 'keydown', (e) => this.handleKeyPress(e));
    }

    // Handle diary click event
    handleDiaryClick() {
        console.log('Diary clicked!');
        if (!gameState.diaryRead) {
            uiManager.updateMessage(MESSAGES.DIARY_FIRST);
            gameState.diaryRead = true;
            uiManager.updateInventory(gameState);
            uiManager.addSuccessAnimation(uiManager.getElement(ELEMENTS.DIARY));
        } else {
            uiManager.updateMessage(MESSAGES.DIARY_REPEAT);
        }
    }

    // Handle lectionary click event
    handleLectionaryClick() {
        console.log('Lectionary clicked!');
        if (gameState.diaryRead && !gameState.verseFound) {
            uiManager.updateMessage(MESSAGES.LECTIONARY_SECOND);
            gameState.verseFound = true;
            uiManager.updateInventory(gameState);
            uiManager.addSuccessAnimation(uiManager.getElement(ELEMENTS.LECTIONARY));
        } else if (!gameState.diaryRead) {
            uiManager.updateMessage(MESSAGES.LECTIONARY_FIRST);
        } else {
            uiManager.updateMessage(MESSAGES.LECTIONARY_REPEAT);
        }
    }

    // Handle stained glass click event
    handleStainedGlassClick() {
        console.log('Stained glass clicked!');
        if (gameState.verseFound && !gameState.codexFound) {
            uiManager.updateMessage(MESSAGES.STAINED_GLASS_SECOND);
            gameState.codexFound = true;
            uiManager.updateInventory(gameState);
            uiManager.addSuccessAnimation(uiManager.getElement(ELEMENTS.STAINED_GLASS));
            
            // Game completion logic
            this.handleGameCompletion();
        } else if (!gameState.verseFound) {
            uiManager.updateMessage(MESSAGES.STAINED_GLASS_FIRST);
        } else {
            uiManager.updateMessage(MESSAGES.STAINED_GLASS_REPEAT);
        }
    }

    // Handle game completion
    handleGameCompletion() {
        console.log('Game completed! Final state:', gameState.export());
        
        // Could add additional completion logic here
        // Such as showing a completion screen, saving progress, etc.
    }

    // Handle keyboard events for debugging
    handleKeyPress(event) {
        // 'D' key for debug info
        if (event.key === 'd' || event.key === 'D') {
            console.log('Current game state:', gameState.export());
            console.log('DOM elements:', {
                diary: document.getElementById(ELEMENTS.DIARY),
                lectionary: document.getElementById(ELEMENTS.LECTIONARY),
                stainedGlass: document.getElementById(ELEMENTS.STAINED_GLASS)
            });
        }
        
        // 'R' key to reset game
        if (event.key === 'r' || event.key === 'R') {
            gameState.reset();
            uiManager.updateInventory(gameState);
            uiManager.updateMessage(MESSAGES.WELCOME);
            console.log('Game reset');
        }
    }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing game...');
    const game = new GameController();
    
    // Make game instance available globally for debugging
    window.game = game;
    
    console.log('L\'Eco della Pergamena game loaded successfully!');
});

// Export for potential testing or extension
export { GameController };