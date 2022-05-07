import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import VerticalProgressBar from './VerticalProgressBar';


const SectionContent = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 450,
                }
            }}
        >
            <Paper elevation={3}
                sx={{ height: 150, display: "flex", alignItems: "center" }}
            >
                <div style={{display: "flex"}}>
                    <div style={{display: "flex", width: "350px"}}>
                    <VerticalProgressBar top="1" bottom="1" />
                    <VerticalProgressBar top="1" bottom="0.7" />
                    <VerticalProgressBar top="0.7" bottom="0.9" />
                    <VerticalProgressBar top="1" bottom="1" />
                    <VerticalProgressBar top="1" bottom="0.5" />
                    <VerticalProgressBar top="0.6" bottom="1" />
                    <VerticalProgressBar top="0.5" bottom="1" />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                        <Typography variant='p' style={{textAlign: "left"}}>
                            {props.characteristics}
                        </Typography>
                        <Typography variant="p" style={{fontWeight: "bold"}}>
                            {props.percentage}% 
                            <Typography variant='p' style={{color: "green", fontWeight: "normal"}}><ArrowDropUpIcon style={{verticalAlign: "middle"}}></ArrowDropUpIcon>{props.change}%</Typography>
                        </Typography>
                    </div>
                </div>
            </Paper>
        </Box>
    );
}

export default SectionContent;