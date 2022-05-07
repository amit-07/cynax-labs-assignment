import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme, backgroundColor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? backgroundColor : '#308fe8',
        transform: ({ value }) => {
            return `translateY(${value}%) !important`;
        },
    },
    [`& .${linearProgressClasses.bar}:nth-child(2)`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#black' : '#308fe8',
    },
}));

export default BorderLinearProgress;