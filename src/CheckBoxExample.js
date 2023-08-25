import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";

const CheckBoxExample = () => {
    const [checked, setChecked] = React.useState('');
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    }
    const [checked1, setChecked1] = React.useState('');
    const handleCheckboxChange1 = (event) => {
        setChecked1(event.target.checked);
    }

    return (
        <Stack>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox name="all" onChange={handleCheckboxChange} checked={checked}/>}
                    label="all"
                />
                <FormControlLabel
                    control={<Checkbox name="hidden" onChange={handleCheckboxChange1} checked={checked1}/>}
                    label="hidden"
                />
            </FormGroup>
        </Stack>
    )
}
export default CheckBoxExample;
