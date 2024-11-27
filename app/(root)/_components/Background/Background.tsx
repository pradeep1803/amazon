import React from 'react'

import styles from './Background.module.css'

interface BackgroundProps {
    h6Text: string,
    pText: string,
    Imgurl: string,
    ImgAlt?: string,
    BtnText: string,
}

export const Background = (
    {
        h6Text,
        pText,
        Imgurl,
        ImgAlt,
        BtnText
    }: BackgroundProps
) => {
    return (
        <div className={styles.Background}>
            <div className={styles.Content}>
                <h6>{h6Text}</h6>
                <p>{pText}</p>
                <button className={styles.Btn}>{BtnText}</button>
            </div>
            <div className={styles.ImgBox}>
                <img src={Imgurl} alt={ImgAlt} />
            </div>

        </div>
    )
}
