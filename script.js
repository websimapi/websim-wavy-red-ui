const ASSETS = [
    '/zigzag.png',
    '/arrow_up.png',
    '/zigzag_arrow_right.png',
    '/flower.png',
    '/house.png'
];

const REPEATS = 4;
const PATTERN_LENGTH = ASSETS.length;
const TOTAL_COLUMNS = PATTERN_LENGTH * REPEATS;

function createPatternColumns(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < TOTAL_COLUMNS; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        
        // Determine which texture to use based on index
        const assetIndex = i % PATTERN_LENGTH;
        const assetUrl = ASSETS[assetIndex];
        
        col.style.backgroundImage = `url(${assetUrl})`;
        
        // Stagger animation slightly for dynamic feel
        col.style.animationDelay = `${i * -0.5}s`;
        
        container.appendChild(col);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createPatternColumns('header-pattern');
    createPatternColumns('footer-pattern');
});