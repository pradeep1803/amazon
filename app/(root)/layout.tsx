import React from 'react'


// For Root Layout Components
import { RootNavbar } from './layout/rootNavbar/RootNavbar'
import { RootFooter } from './layout/rootFooter/RootFooter'

const RootLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <>
            <RootNavbar />
            {children}
            <RootFooter />
        </>
    )
}

export default RootLayout