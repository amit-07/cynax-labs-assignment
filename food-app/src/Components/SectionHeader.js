import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Grid from "@mui/material/Grid";
import BorderLinearProgress from './LinearProgressBar';



const SectionHeader = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128
                }
            }}
        >
            <Paper elevation={3}
                sx={{
                    '& > :not(style)': {
                        width: 50,
                        height: 50
                    }
                }}
                style={{ width: "50px", height: "50px" }}
            >
                <PersonSearchOutlinedIcon style={{color: "#5d5be0"}}/>
            </Paper>
            <div style={{ display: "flex", flexDirection: "column", width: "27%", alignItems: "flextart", textAlign: "left" }}>
                <Typography variant="p">
                    Adverse effects and contradications
                </Typography>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "spaceBetween" }}>
                    <Typography variant="h6">
                        546
                    </Typography>
                    <Grid spacing={1} container style={{alignItems: "center"}}>
                        <Grid xs item style={{flex: "0.3"}}>
                            <BorderLinearProgress variant="determinate" value={95} backgroundColor="#5d5be0"/>
                        </Grid>
                        <Grid xs item style={{paddingLeft: "0", flex: "0.3"}}>
                            <BorderLinearProgress variant="determinate" value={35} backgroundColor=""/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box>
    );
}

export default SectionHeader;