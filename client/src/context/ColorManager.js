import React, { Component } from 'react';
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
// export const colorManager = React.createContext({
//     colors:['#fb8072', '#8dd3c7','#ffffb3','#bebada','#80b1d3','#fdb462','#b3de69','#fccde5','#bc80bd','#ccebc5','#ffed6f'],
//     lockedWords: ['', '','','','','','','','','','']
// });

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);