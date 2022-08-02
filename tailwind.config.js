module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // Configure your color palette here
                "fb-blue-color": "#4267B2",
                "fb-gray-color": "#898F9C",
                main: "#F0F2F5",
            },
            borderWidth: {
                1: "1px",
            },
            width: {
                "1/10": "10%",
                "9/10": "90%",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["active"],
            backgroundColor: ["active"],
            padding: ["hover", "focus", "active"],
            scale: ["active", "group-hover"],
        },
    },
    plugins: [],
};