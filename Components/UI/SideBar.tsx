import { FONT_FAMILY, SECONDARY_TEXT_COLOR } from '@/consts';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';

export default function SideBar() {
    const menus = [
        {
            name: 'Dashboard',
            Icon: HomeIcon,
            path: ''
        },
        {
            name: 'Order',
            Icon: ShoppingCartIcon,
            path: ''
        },
        {
            name: "Message",
            Icon: EmailIcon,
            path: ''
        }
    ];

    return (
        <Grid container lg={2} className="flex justify-center" sx={{ height: '87vh' }}>

            <Grid container className=' bg-white h-fit py-4 justify-center'>
                <Grid container lg={10} className="h-fit">
                    <Typography fontFamily={FONT_FAMILY} className="font-semibold">
                        Menu
                    </Typography>

                    {menus.map((menu, index) => (
                        <Grid
                            container
                            className="flex justify-between align-center cursor-pointer mt-6"
                        >
                            <Box className="flex items-center justify-center">
                                <menu.Icon className="text-[1.5rem]" sx={{ color: SECONDARY_TEXT_COLOR }} />
                                <Typography
                                    className="ml-2.5 font-medium"
                                    sx={{ color: SECONDARY_TEXT_COLOR, fontFamily: FONT_FAMILY }}
                                >
                                    {menu.name}
                                </Typography>
                            </Box>
                            <Typography
                                className="font-semibold"
                                sx={{ color: SECONDARY_TEXT_COLOR, fontFamily: FONT_FAMILY }}
                            >
                                Da
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    );
}
