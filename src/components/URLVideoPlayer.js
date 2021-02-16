import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import styles from "./URLVideoPlayer.module.css"

const URLVideoPlayer = ({ width = '640px', height = '360px' }) => {
    const [url, setURL] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(url)
        setURL(url)
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Enter video url to play (Supported formats: all types):</label>
                <input
                    type="text"
                    value={url}
                    required
                    onChange={(e) => { setURL(e.target.value) }}
                    size="50"
                />
            </form>
            <ReactPlayer
                controls
                width={width}
                height={height}
                url={url}
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('onPause callback')}
                onEnded={() => console.log('onEnded callback')}
                onError={() => console.log('onError callback')}
                className={styles.player}
            />
        </div>
    )
}

export default URLVideoPlayer
