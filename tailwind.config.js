/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        whitesmoke: {
          "100": "#efefef",
          "200": "#e7e9ed",
        },
        orangered: "#f0591d",
        lightsteelblue: "#acb3c2",
        darkslategray: {
          "100": "#454545",
          "200": "#2f4f4f",
        },
        color: "#c8191c",
        "ppp-white": "#fff",
        gray: {
          "100": "#888",
          "200": "#1e1e1e",
          "300": "#111",
        },
        lightgray: "#d6d6d6",
        firebrick: "rgba(200, 25, 28, 0.2)",
        "ppp-grey": "#d7dedd",
        crimson: "#ed4042",
        "gantt-ui-design": "#fd7542",
        "black-40": "#9a9a9a",
        "black-80": "#333",
      },
      spacing: {},
      fontFamily: {
        alegreya: "Alegreya",
        outfit: "Outfit",
        "alegreya-sans-sc": "'Alegreya Sans SC'",
        "open-sans": "'Open Sans'",
        "playwrite": "'Playwrite CU', sans-serif",
      },
    },
    fontSize: {
      lg: "18px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      mini: "15px",
      base: "16px",
      "base-3": "15.3px",
      "base-9": "15.9px",
      "base-1": "15.1px",
      "mini-9": "14.9px",
      "base-6": "15.6px",
      "65xl": "84px",
      "6xl": "25px",
      "23xl": "42px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "2xl-4": "21.4px",
      mid: "17px",
      "15xl-6": "34.6px",
      "9xl": "28px",
      "2xl": "21px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      sm: "14px",
      xl: "20px",
      "3xs": "10px",
      "111xl": "130px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
