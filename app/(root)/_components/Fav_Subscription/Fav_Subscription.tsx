import React from 'react'

import styles from './Fav_Subscription.module.css'

const ImgData = [
    {
        id: 1,
        url: '/assets/icon/1.jpg',
    }, {
        id: 2,
        url: '/assets/icon/2.jpg',
    }, {
        id: 3,
        url: '/assets/icon/3.jpg',
    }, {
        id: 4,
        url: '/assets/icon/4.jpg',
    }, {
        id: 5,
        url: '/assets/icon/5.jpg',
    }, {
        id: 6,
        url: '/assets/icon/6.jpg',
    }, {
        id: 7,
        url: '/assets/icon/7.jpg',
    }, {
        id: 8,
        url: '/assets/icon/8.jpg',
    }, {
        id: 9,
        url: '/assets/icon/9.jpg',
    },
]

export const Fav_Subscription = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h6>Your favorite subscriptions all in one place</h6>
                <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
            </div>


            <div className={styles.ImgBox}>
                {
                    ImgData.map((I) => (
                        <div className={styles.Box} key={I.id} >
                            <img src={I.url} className={styles.Img} alt="" />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
