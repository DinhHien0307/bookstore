module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'homebg-img1': "url('/src/assets/homebg.jpg')"
            }
        },
    },
    plugins: [
        require("tw-elements/dist/plugin")
    ],
}
