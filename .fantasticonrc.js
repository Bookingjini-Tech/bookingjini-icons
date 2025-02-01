module.exports = {
    inputDir: './dist/svg', // Directory containing your SVG icons
    outputDir: './dist/fonts', // Directory where the generated assets will be saved
    fontTypes: ['woff2', 'woff'], // Generate font files
    assetTypes: ['css', 'json', "ts"], // Ensure CSS is generated along with JSON metadata
    name: 'bookingjini-icons', // Name of the font
    prefix: 'icon', // Prefix for CSS classes (e.g., .icon-home)
    formatOptions: {
        css: {
            fontDisplay: 'swap', // Ensures smooth font rendering
        },
    },
    normalize: true, // Normalizes SVGs to maintain consistent proportions
    fontHeight: 1000, // Helps maintain icon proportions
    descent: 200, // Adjusts vertical alignment
};
