module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:'class',
    theme: {
      extend: {
        screens:
        {
          "other":{'min' : '340px', 'max': '1200px'},//changes for responsive even sapcing cards
        },
        colors:
        {
           darkbg : "#1E293B",
        }
      },
    },
    plugins: [],
  }