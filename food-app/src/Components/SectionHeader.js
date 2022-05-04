import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";


const BorderLinearProgress = styled(LinearProgress)(({ theme, backgroundColor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? backgroundColor : '#308fe8',
    },
    [`& .${linearProgressClasses.bar}:nth-child(2)`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#black' : '#308fe8',
    },
}));


const SectionHeader = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
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
                        <Grid xs item style={{}}>
                            <BorderLinearProgress variant="determinate" value={95} backgroundColor="#5d5be0"/>
                        </Grid>
                        <Grid xs item style={{paddingLeft: "0", flex: "0.5"}}>
                            <BorderLinearProgress variant="determinate" value={50} backgroundColor=""/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box>
    );
}

export default SectionHeader;