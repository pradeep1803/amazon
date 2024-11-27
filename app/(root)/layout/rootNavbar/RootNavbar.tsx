import React from 'react'

import styles from './RootNavbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface NavLinksProps {
    LinkText: string,
    LinkTo: string,
}

const NavLinks: NavLinksProps[] = [
    {
        LinkText: 'Home',
        LinkTo: "",
    }, {
        LinkText: 'Movies',
        LinkTo: "",
    }, {
        LinkText: 'Tv Shows',
        LinkTo: "",
    }, {
        LinkText: 'Live TV',
        LinkTo: "",
    },
]

export const RootNavbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div>
                <Image src={'/assets/logo.png'} height={30} width={100} alt='Logo' />

                {
                    NavLinks.map((I) => (
                        <Link href={I.LinkTo} key={I.LinkText}>{I.LinkText}</Link>
                    ))
                }
                <span> | <Link href={'/'}>Subscription</Link></span>

            </div>

            <div>

                <button className={styles.Btn}>Join Prime</button>
            </div>

        </nav>
    )
}
