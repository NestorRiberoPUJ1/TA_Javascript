import { Button, TextField, Paper, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ratingOptions = [
    {
        value: 'E',
        label: 'E',
    },
    {
        value: 'E10+',
        label: 'E10+',
    },
    {
        value: 'T',
        label: 'T',
    },
    {
        value: 'M',
        label: 'M',
    },
    {
        value: 'AO',
        label: 'AO',
    },
    {
        value: 'RP',
        label: 'RP'
    }
];

const CreateForm = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");

    const [errors, setErrors] = useState({})

    const handleCreate = () => {
        let data = {
            name,
            company,
            releaseDate,
            rating,
            category
        }
        console.log(data);

        axios.post(process.env.REACT_APP_BACKEND + "/api/games", data)
            .then(result => result.data)
            .then(response => {
                console.log(response);
                setName("");
                setCompany("");
                setReleaseDate("");
                setRating("");
                setCategory("");
                setErrors({});
            })
            .catch(error => {
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            })

    }

    useEffect(() => {
        if (name.length !== 0 && name.length < 3) {
            setErrors({
                name: {
                    message: "Must be 3"
                }
            })
        }
        else if (name.length > 10) {
            setErrors({
                name: {
                    message: "Must less than 10"
                }
            })
        }
        else {
            setErrors({})
        }
    }, [name])

    return (
        <Paper sx={{ padding: 4, width: "400px" }}>
            <TextField
                sx={{ marginBottom: 2 }}
                label="name"
                variant="outlined"
                fullWidth={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : ""} />
            <TextField
                sx={{ marginBottom: 2 }}
                label="company"
                variant="outlined"
                fullWidth={true}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                error={errors.company ? true : false}
                helperText={errors.company ? errors.company.message : ""} />
            <TextField
                sx={{ marginBottom: 2 }}
                label="rating"
                variant="outlined"
                fullWidth={true}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                error={errors.rating ? true : false}
                helperText={errors.rating ? errors.rating.message : ""}
                select
            >
                {ratingOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                sx={{ marginBottom: 2 }}
                label="release date"
                variant="outlined"
                fullWidth={true}
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                error={errors.releaseDate ? true : false}
                helperText={errors.releaseDate ? errors.releaseDate.message : ""} />
            <TextField
                sx={{ marginBottom: 2 }}
                label="category"
                variant="outlined"
                fullWidth={true}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                error={errors.category ? true : false}
                helperText={errors.category ? errors.category.message : ""} />
            <Button variant="contained" color="primary" onClick={handleCreate}>
                Create
            </Button>
        </Paper>
    )
}

export default CreateForm;