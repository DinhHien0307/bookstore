module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'homebg-img1': "url('/src/assets/homebg.jpg')"
            },
            maxWidth: {
                '5/12': '41.666667%',
                '7/12': '58.333333%'
            }
        },
    },
    plugins: [
        require("tw-elements/dist/plugin")
    ],
}
