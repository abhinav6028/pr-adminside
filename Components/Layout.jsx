import { Grid } from '@mui/material'
import React from 'react'
import Header from './UI/Header'
import { PRIMARY_BG_COLOUR } from '@/consts'
import SideBar from './UI/SideBar'

export default function Layout({ children }) {
    return (
        <Grid container bgcolor={PRIMARY_BG_COLOUR} className='h-screen'>

            <Header />
            <SideBar />
        </Grid>
    )
}
// <SideBar />
// {children}