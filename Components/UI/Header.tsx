"use client"
import { Grid, Box, Badge } from '@mui/material'
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { PRIMARY_BG_COLOUR, TERNARY_BG_COLOUR } from '@/consts';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter()

    return (
        <Grid container className='flex justify-between h-fit'>
            <Grid container lg={2} sx={{}} className='bg-white'>
                <Box
                    component='img'
                    src='/Assets/pr-logo.png'
                    className='h-10 m-5 cursor-pointer'
                    onClick={() => router.push('/')}
                />
            </Grid>

            <Grid container lg={7.95} className='bg-white flex items-center justify-end'>
                <Box className="flex">

                    <div className="w-full max-w-sm min-w-[600px] mr-7">
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                            </svg>

                            <input
                                style={{ background: PRIMARY_BG_COLOUR }}
                                className="w-full placeholder:text-slate-400 text-slate-700 text-sm rounded-full pl-10 pr-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                placeholder="Search..."
                            />

                        </div>
                    </div>

                    <Badge badgeContent={4}
                        color="primary"
                        sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: TERNARY_BG_COLOUR,
                                color: "white"
                            },
                            bgcolor: PRIMARY_BG_COLOUR
                        }}
                        className="p-2 rounded-full cursor-pointer mr-5"
                    >

                        <NotificationsNoneIcon sx={{ color: TERNARY_BG_COLOUR }} />
                    </Badge>

                    <Badge badgeContent={4}
                        color="primary"
                        sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: TERNARY_BG_COLOUR,
                                color: "white"
                            },
                            bgcolor: PRIMARY_BG_COLOUR
                        }}
                        className="p-2 rounded-full cursor-pointer mr-5"
                    >

                        <NotificationsNoneIcon sx={{ color: TERNARY_BG_COLOUR }} />
                    </Badge>

                </Box>
            </Grid>

            <Grid container lg={2} className='bg-white'>
                <Box
                    component='img'
                    src='/Assets/pr-logo.png'
                    className='h-10 m-5 cursor-pointer'
                />
            </Grid>

        </Grid >
    )
}
