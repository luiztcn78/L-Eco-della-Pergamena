// Game state management module
class GameState {
    constructor() {
        this.hasReadDiary = false;
        this.hasFoundVerse = false;
        this.hasFoundCodex = false;
    }

    // Getters for state properties
    get diaryRead() {
        return this.hasReadDiary;
    }

    get verseFound() {
        return this.hasFoundVerse;
    }

    get codexFound() {
        return this.hasFoundCodex;
    }

    // Setters with validation
    set diaryRead(value) {
        if (typeof value === 'boolean') {
            this.hasReadDiary = value;
        } else {
            console.warn('Invalid value for diaryRead:', value);
        }
    }

    set verseFound(value) {
        if (typeof value === 'boolean') {
            this.hasFoundVerse = value;
        } else {
            console.warn('Invalid value for verseFound:', value);
        }
    }

    set codexFound(value) {
        if (typeof value === 'boolean') {
            this.hasFoundCodex = value;
        } else {
            console.warn('Invalid value for codexFound:', value);
        }
    }

    // Reset game state
    reset() {
        this.hasReadDiary = false;
        this.hasFoundVerse = false;
        this.hasFoundCodex = false;
    }

    // Check if game is complete
    get isComplete() {
        return this.hasReadDiary && this.hasFoundVerse && this.hasFoundCodex;
    }

    // Export state for persistence
    export() {
        return {
            hasReadDiary: this.hasReadDiary,
            hasFoundVerse: this.hasFoundVerse,
            hasFoundCodex: this.hasFoundCodex
        };
    }

    // Import state
    import(state) {
        if (state && typeof state === 'object') {
            this.hasReadDiary = state.hasReadDiary || false;
            this.hasFoundVerse = state.hasFoundVerse || false;
            this.hasFoundCodex = state.hasFoundCodex || false;
        }
    }
}

// Export singleton instance
export const gameState = new GameState();