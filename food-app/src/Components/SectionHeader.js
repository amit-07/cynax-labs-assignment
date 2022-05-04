import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
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
            style={{width: "50px", height: "50px"}}
        >
            <PersonSearchOutlinedIcon style={{color: "#3A53A2"}}/>
        </Paper>
        <div style={{display: "flex", flexDirection: "column", width: "27%", alignItems: "flex-start"}}>
            <Typography variant="p">
                Adverse effects and contradications
            </Typography>
            <div>
                <Typography variant="h6">
                    546
                </Typography>
                <div><BorderLinearProgress variant="determinate" value={50} /> </div>
            </div>
        </div>
    </Box>
  );
}

export default SectionHeader;