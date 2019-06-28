import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {main: '#282c34'},
        secondary: {main: '#ffffff'},
        background: {main: '#282c34'},
    },

    typography: {
        fontFamily: [
            'Viga'
        ].join(','),
        fontWeightMedium: 500,
        body1: {fontWeight: 500,},
        subtitle1: {fontSize: 15,},
        button: {fontStyle: 'italic',},
    },
});