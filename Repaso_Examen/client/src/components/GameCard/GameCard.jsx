import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";


const GameCard = (props) => {

    const handleDelete = () => {

        axios.delete(process.env.REACT_APP_BACKEND + "/api/games/" + props._id)
            .then(result => result.data)
            .then(response => {
                console.log(response);
                props.setUpdate(!props.update);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.releaseDate}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.company}
                </Typography>
                <Typography variant="body2">
                    {props.category}
                </Typography>
                <Typography variant="h6">
                    {props.rating}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={handleDelete} >Eliminar</Button>
            </CardActions>
        </Card>
    )
}

export default GameCard;