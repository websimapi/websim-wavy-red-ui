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

function updateTileSize() {
    // We calculate the exact pixel width of a column to ensure the 
    // background-position animation loops perfectly without jitter.
    const headerPattern = document.getElementById('header-pattern');
    if (headerPattern) {
        const colWidth = headerPattern.offsetWidth / TOTAL_COLUMNS;
        document.documentElement.style.setProperty('--tile-size', `${colWidth}px`);
    }
}

function createPatternColumns(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < TOTAL_COLUMNS; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        
        const assetIndex = i % PATTERN_LENGTH;
        const assetUrl = ASSETS[assetIndex];
        
        col.style.backgroundImage = `url(${assetUrl})`;
        // Stagger animation slightly for dynamic feel, using a larger spread
        col.style.animationDelay = `${i * -0.75}s`;
        
        container.appendChild(col);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createPatternColumns('header-pattern');
    createPatternColumns('footer-pattern');
    
    updateTileSize();
    window.addEventListener('resize', updateTileSize);
});