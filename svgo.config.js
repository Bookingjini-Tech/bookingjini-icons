module.exports = {
    multipass: true,
    plugins: [
        { name: 'removeViewBox', active: false },  // Preserve viewBox
        { name: 'removeDimensions', active: false },  // Preserve width/height
        { name: 'convertColors', active: false },  // Don't force currentColor
        { name: 'cleanupNumericValues', params: { floatPrecision: 2 } },
        { name: 'convertPathData', active: false },  // Prevent path distortion
        { name: 'removeUnknownsAndDefaults', active: false },  // Keep all default attributes
        { name: 'removeUselessStrokeAndFill', active: false },  // Preserve stroke and fill attributes
        { name: 'removeAttrs', params: { attrs: '(stroke|fill|fill-opacity|stroke-opacity)' }, active: false } // Prevent stripping important styles
    ]
};
