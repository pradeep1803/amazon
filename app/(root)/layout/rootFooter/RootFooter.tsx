import React from 'react'

import styles from './RootFooter.module.css'
import Link from 'next/link'

interface LinkTextProps {
    LinkText: string,
    LinkTo: string,
}

const LinkText: LinkTextProps[] = [
    {
        LinkText: "Terms and Privacy Notice",
        LinkTo: "https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890",
    }, {
        LinkText: "Send us Feedback",
        LinkTo: "",
    }, {
        LinkText: "Help us",
        LinkTo: "https://www.primevideo.com/help/ref=dvm_MLP_EU_help",
    },
]


export const RootFooter = () => {
    return (
        <footer className={styles.Footer}>
            <Link href={'https://www.primevideo.com/'} target='_blank'>
                <img src="/assets/mainLogo.png" alt="" />
            </Link>

            <div className={styles.DivLink}>
                {
                    LinkText.map((I) => (
                        <div key={I.LinkText} >
                            <Link href={I.LinkTo} target='_blank'>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>


            <p>
                © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>


        </footer>
    )
}
