import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const LimitTags = () => {
    const top100Films = [
        {title: 'The Shawshank Redemption', year: 1994},
        {title: 'The Godfather', year: 1972},
        {title: 'The Godfather: Part II', year: 1974},
        {title: 'The Dark Knight', year: 2008},
        {title: '12 Angry Men', year: 1957},
        {title: "Schindler's List", year: 1993},
        {title: 'Pulp Fiction', year: 1994},
        {title: 'Braveheart', year: 1995},
        {title: 'M', year: 1931},
        {title: 'Requiem for a Dream', year: 2000},
        {title: 'Amélie', year: 2001},
        {title: 'A Clockwork Orange', year: 1971},
        {title: 'Like Stars on Earth', year: 2007},
        {title: 'Taxi Driver', year: 1976},
        {title: 'Lawrence of Arabia', year: 1962},
        {title: 'Double Indemnity', year: 1944},

    ];
    return (
        <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
            renderInput={(params) => (
                <TextField {...params} label="limitTags" placeholder="Favorites"/>
            )}
            sx={{width: '500px'}}
        />
    );
}

export default LimitTags;