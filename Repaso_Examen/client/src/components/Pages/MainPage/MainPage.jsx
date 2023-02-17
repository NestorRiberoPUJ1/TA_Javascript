import { Box } from "@mui/material";
import { Fragment } from "react";
import CardHolder from "../../CardHolder/CardHolder";
import CreateForm from "../../CreateForm/CreateForm";


const MainPage = () => {

    return (
        <Fragment>
            <Box sx={{ padding: 4 }}>
                <CreateForm />
                <CardHolder />
            </Box>
        </Fragment>
    )
}

export default MainPage;