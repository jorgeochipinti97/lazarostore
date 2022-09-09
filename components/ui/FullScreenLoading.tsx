import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';

export const FullScreenLoading = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px)'
        >
                <Typography sx={{ mb: 3, color: 'white', fontFamily: 'Anton' ,overflowY: 'hidden' }} variant="h4" >Lazaro Store </Typography>
                <Box display='flex' justifyContent='center' sx={{mb:3,overflowY: 'hidden' }}>
                    <AppleIcon sx={{ fontSize: 45 }} />
                </Box>
    
            <Typography sx={{ mb: 3, color: 'white' }} variant="h2" fontWeight={200} fontSize={20}>Cargando...</Typography>
            <CircularProgress thickness={2} />
        </Box>
    )
}
