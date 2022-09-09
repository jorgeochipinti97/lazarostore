import Head from 'next/head'
import React, { FC } from 'react'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { Box, Button, Divider, Typography } from '@mui/material';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
interface Props {
    children: React.ReactNode,
    title: string
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
            <footer style={{ backgroundColor: 'black' }}>
            <Box sx={{pt:1}}>
                <Divider sx={{ my: 1,backgroundColor:'white' }} />
            </Box>
                <Box>
                    <Box display='flex' justifyContent='center'>
                        <Button sx={{ color: 'whitesmoke', border: '1px solid white', m: 3 }} variant='outlined' >
                            <WhatsAppIcon sx={{ fontSize: 25, m: 1 }} />
                        </Button >
                        <Button sx={{ color: 'white', border: '1px solid white', m: 3 }} variant='outlined' >
                            <InstagramIcon sx={{ fontSize: 25, m: 1 }} />
                        </Button>
                        <Button sx={{ color: 'white', border: '1px solid white', m: 3 }} variant='outlined' >
                            <EmailOutlinedIcon sx={{ fontSize: 25, m: 1 }} />
                        </Button>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' sx={{ p: 1 }}>
                    <CopyrightOutlinedIcon sx={{fontSize:20, mr:1}}/><Typography variant='subtitle1'>All rights reserved Lazaro</Typography>
                </Box>
                <Box display='flex' justifyContent='center'>
                    <CodeOutlinedIcon /><Typography variant='subtitle1'>Development by Jorge Ochipinti</Typography>
                </Box>
            </footer>
        </>
    )
}
