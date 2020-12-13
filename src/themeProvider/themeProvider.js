import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Roboto Slab' , 'Bree Serif' ,  'Lato' ].join(','),

    },
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#000'
        },
        
        mainColor : {
            color: 'red'
        }
    },
})

theme = responsiveFontSizes(theme);

export default theme;