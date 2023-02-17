import { Box, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import GameCard from "../GameCard/GameCard";

const ratingOptions = [
    {
        value: 'All',
        label: "All",
    },
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

const CardHolder = () => {

    const [rating, setRating] = useState("All");

    const [games, setGames] = useState([]);

    const [update, setUpdate] = useState(true);

    const getGames = () => {
        if (rating === "All") {
            axios.get(process.env.REACT_APP_BACKEND + "/api/games")
                .then(result => result.data)
                .then(response => {
                    console.log(response);
                    setGames(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            axios.get(process.env.REACT_APP_BACKEND + "/api/games?rating=" + rating)
                .then(result => result.data)
                .then(response => {
                    console.log(response);
                    setGames(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    useEffect(() => {
        getGames();
    }, [])
    useEffect(() => {
        getGames();
    }, [rating])

    useEffect(() => {
        getGames();
    }, [update])

    return (

        <Box sx={{ marginTop: 4 }}>
            <TextField
                sx={{ marginBottom: 2 }}
                label="rating"
                variant="outlined"
                fullWidth={true}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                select
            >
                {ratingOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            {
                games.map((item, index, array) => {
                    return (
                        <Fragment key={"CARD" + index}>
                            <GameCard {...item} update={update} setUpdate={setUpdate} />
                        </Fragment>
                    )
                })
            }

        </Box>

    )
}

export default CardHolder;