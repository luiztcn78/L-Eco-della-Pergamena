// Main application module - orchestrates the entire game
import { gameState } from './gameState.js';
import { uiManager } from './ui.js';
import { MESSAGES, ELEMENTS } from './constants.js';

class GameController {
    constructor() {
        this.initializeGame();
        this.setupEventListeners();
    }

    // Initialize game state and UI
    initializeGame() {
        // Update UI with initial state
        uiManager.updateInventory(gameState);
        uiManager.updateMessage(MESSAGES.WELCOME);
        
        // Log initialization for debugging
        console.log('Game initialized with state:', gameState.export());
    }

    // Set up all event listeners
    setupEventListeners() {
        const diary = uiManager.getElement(ELEMENTS.DIARY);
        const lectionary = uiManager.getElement(ELEMENTS.LECTIONARY);
        const stainedGlass = uiManager.getElement(ELEMENTS.STAINED_GLASS);

        // Diary interaction
        uiManager.addEventListener(diary, 'click', () => this.handleDiaryClick());

        // Lectionary interaction
        uiManager.addEventListener(lectionary, 'click', () => this.handleLectionaryClick());

        // Stained glass interaction
        uiManager.addEventListener(stainedGlass, 'click', () => this.handleStainedGlassClick());

        // Debug functionality
        uiManager.addEventListener(document, 'keydown', (e) => this.handleKeyPress(e));
    }

    // Handle diary click event
    handleDiaryClick() {
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
    const game = new GameController();
    
    // Make game instance available globally for debugging
    window.game = game;
    
    console.log('L\'Eco della Pergamena game loaded successfully!');
});

// Export for potential testing or extension
export { GameController };