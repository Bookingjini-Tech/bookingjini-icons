module.exports = {
    multipass: true,
    plugins: [
        { name: 'removeViewBox', active: false },
        { name: 'removeDimensions', active: true },
        { name: 'convertColors', params: { currentColor: true } },
        { name: 'cleanupNumericValues', params: { floatPrecision: 2 } }
    ]
};
