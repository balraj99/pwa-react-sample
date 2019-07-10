import React, { useEffect } from 'react';
import { withStyles, Fab, Button } from '@material-ui/core';

const styles = () => ({
    root: {
        background: 'transparent',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px'
    },
    cameraActions: {
        display: 'flex',
        width: '100%',
        height: '15%',
        background: '#333',
        justifyContent: 'center'
    }
});

let startCamera = () => {
    console.debug('Video', document.getElementById('player'));
    navigator.mediaDevices.getUserMedia({
        video: {
            width: { min: 1280 },
            height: { min: 720 },
            facingMode: { exact: window.mobileAndTabletcheck() ? 'environment' : 'user' }
        },
        audio: false
    }).then(stream => {
        document.getElementById('player').srcObject = stream;
    }).catch(console.debug);
};

let stopCamera = () => {
    const videoEl = document.getElementById('player');
    if (videoEl) {
        videoEl.pause();
        const stream = videoEl.srcObject;
        stream.getTracks()[0].stop();
    }
}

let capture = (props) => {
    stopCamera();

    console.debug('Props', props);

    const videoEl = document.getElementById('player');
    let canvas = document.createElement('canvas');



    // canvas.setAttribute('height', 1000);
    // canvas.setAttribute('width', 1280);

    let context = canvas.getContext('2d');

    context.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    // context.scale(-1, 1);

    console.log(context.canvas.toDataURL());

    props.onCapture(context.canvas.toDataURL());

    context = null;
    canvas = null;
};

const test = (e) => {
    console.debug('MObile Check ', e);
}

const Camera = (props) => {
    const {
        classes
    } = props;

    useEffect(() => {
        startCamera();
    });

    // const [cameraView, setCameraView] = useState('environment');

    return (
        <div className={classes.root}>
            <div style={{
                width: '100%',
                height: '75%'
            }}>
                <video
                    id="player"
                    autoPlay
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className={classes.cameraActions}>
                <Fab
                    style={{
                        margin: 8,
                        backgroundColor: '#90caf9',
                    }}
                    onClick={(e) => capture(props)}
                >
                </Fab>
            </div>

        </div>
    );

}

export default withStyles(styles)(Camera);