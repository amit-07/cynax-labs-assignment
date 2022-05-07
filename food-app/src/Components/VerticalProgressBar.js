import Grid from "@mui/material/Grid";
import BorderLinearProgress from "./LinearProgressBar";

const VerticalProgressBar = ({ top, bottom }) => {
    return (
        <Grid spacing={1} container style={{ flexDirection: "column", marginLeft: "0", justifyContent: "space-around", width: "200%"}}>
            <Grid spacing={1} container style={{ transform: "rotate(90deg)", justifyContent: "flex-start" }}>
                <Grid xs item style={{ flex: `${top}` }}>
                    <BorderLinearProgress variant="determinate" value={100} />
                </Grid>
            </Grid>
            <Grid spacing={1} container style={{ transform: "rotate(90deg)", justifyContent: "flex-end" }}>
                <Grid xs item style={{ flex: `${bottom}`}}>
                    <BorderLinearProgress variant="determinate" value={100} backgroundColor="#5d5be0" />
                </Grid>
            </Grid>
        </Grid>
    )
}


export default VerticalProgressBar;