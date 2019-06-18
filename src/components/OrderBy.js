import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function OrderBy() {

    const [value, setValue] = React.useState('Id');

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Order by</FormLabel>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="Id" control={<Radio/>} label="Id"/>
                    <FormControlLabel value="Computer" control={<Radio/>} label="Computer"/>
                    <FormControlLabel value="Company" control={<Radio/>} label="Company"/>
                    <FormControlLabel value="Introduced" control={<Radio/>} label="Introduced"/>
                    <FormControlLabel value="Discontinued" control={<Radio/>} label="Discontinued"/>
                </RadioGroup>
            </FormControl>

        </div>
    );
}