import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {main: '#FF9800'},
        secondary: {
            main: '#212121',
            second: '#FFFFFF'
        },
    },

    typography: {
        fontFamily: [
            'Viga',
            'Permanent Marker'
        ].join(','),
        fontWeightMedium: 500,
        body1: {fontWeight: 500,},
        subtitle1: {fontSize: 15,},
        button: {fontStyle: 'italic',},
    },
});
