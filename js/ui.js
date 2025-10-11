import { ELEMENTS, ANIMATION_DURATION } from './constants.js';

// UI management module
class UIManager {
    constructor() {
        this.messageElement = document.getElementById(ELEMENTS.MESSAGE);
        this.diaryIcon = document.getElementById(ELEMENTS.DIARY_ICON);
        this.verseIcon = document.getElementById(ELEMENTS.VERSE_ICON);
        this.codexIcon = document.getElementById(ELEMENTS.CODEX_ICON);
    }

    // Update message display
    updateMessage(text) {
        if (this.messageElement) {
            this.messageElement.textContent = text;
        } else {
            console.error('Message element not found');
        }
    }

    // Update inventory icons
    updateInventory(state) {
        if (this.diaryIcon) {
            this.diaryIcon.classList.toggle('active', state.diaryRead);
        }
        
        if (this.verseIcon) {
            this.verseIcon.classList.toggle('active', state.verseFound);
        }
        
        if (this.codexIcon) {
            this.codexIcon.classList.toggle('active', state.codexFound);
        }
    }

    // Add success animation to element
    addSuccessAnimation(element) {
        if (element) {
            element.classList.add('success-animation');
            
            // Remove animation after duration
            setTimeout(() => {
                element.classList.remove('success-animation');
            }, ANIMATION_DURATION);
        }
    }

    // Get DOM element by ID
    getElement(id) {
        return document.getElementById(id);
    }

    // Add event listener to element
    addEventListener(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    }

    // Remove event listener from element
    removeEventListener(element, event, handler) {
        if (element) {
            element.removeEventListener(event, handler);
        }
    }
}

// Export singleton instance
export const uiManager = new UIManager();