import React, { useEffect, useState } from 'react';
import { withStyles, Fab, Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PhotoLibrary } from '@material-ui/icons';

const styles = (theme) => ({
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
        height: '20%',
        background: '#333',
        justifyContent: 'center',

    },
    flexContainer: {
        justifyContent: 'center'
    },
    captureFab: {
        backgroundColor: '#90caf9',
        [theme.breakpoints.down('md')]: {
            marginRight: '-2rem',
        },
    }
});

const deviceIds = [];

if (navigator.mediaDevices) {
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            devices.forEach(function (device) {

                // console.log(device.kind + ": " + device.label +
                //     " id = " + device.deviceId);

                if (device.kind == 'videoinput') {
                    console.debug('Specs ', device, device.getCapabilities());
                    deviceIds.push(device.deviceId);
                }
            });
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
}

let startCamera = (idx) => {



    console.debug('Video', deviceIds[idx]);


    navigator.mediaDevices.getUserMedia({
        video: {
            width: { ideal: 1920 },
            height: { ideal: 1080 },
            facingMode: { exact: window.mobileAndTabletcheck() ? 'environment' : 'user' },
            deviceId: deviceIds[idx]
        },
        audio: false
    }).then(stream => {
        document.getElementById('player').srcObject = stream;
    }).catch((error) => {
        console.debug('Start Camera Error', error);
    });
};

let stopCamera = () => {
    const videoEl = document.getElementById('player');

    if (videoEl) {
        videoEl.pause();
        const stream = videoEl.srcObject;

        if (!stream) {
            return;
        }
        console.debug(stream.getTracks()[0].getCapabilities());
        stream.getTracks()[0].stop();
    }
}

let capture = (props) => {
    const videoEl = document.getElementById('player');
    const stream = videoEl.srcObject;
    const height = stream.getTracks()[0].getSettings().height;
    const width = stream.getTracks()[0].getSettings().width;

    let canvas = document.createElement('canvas');
    canvas.setAttribute('height', height);
    canvas.setAttribute('width', width);

    let context = canvas.getContext('2d');

    context.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
    // context.scale(-1, 1);

    console.log(context.canvas.toDataURL());


    const cameraEvent = Object.create({
        width,
        height,
        captureDataURL: context.canvas.toDataURL()
    });


    props.onCapture(cameraEvent);

    context = null;
    canvas = null;
    stopCamera();
};

const Camera = (props) => {
    const {
        classes
    } = props;

    useEffect(() => {
        stopCamera();
        startCamera(idx);
    });

    const [idx, inc] = useState(0);

    // console.log('IDX ', idx)

    // const [cameraView, setCameraView] = useState('environment');
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div style={{
                width: '100%',
                minHeight: '65%',
                background: '#FFF'
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
                <div style={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            flexContainer: classes.flexContainer
                        }}
                        TabIndicatorProps={{
                            style: {
                                height: '0.5rem',
                                top: 0
                            }
                        }}
                    >
                        <Tab label="Insurance" />
                        <Tab label="Bill" />
                        <Tab label="EOB" />
                    </Tabs>
                    <Fab
                        className={classes.captureFab}
                        onClick={(e) => capture(props)}
                    >
                    </Fab>
                </div>
                <Fab
                    style={{
                        color: '#000',
                        backgroundColor: 'yellow',
                    }}
                    onClick={() => { inc((idx + 1) % deviceIds.length) }}
                >
                    TC
                </Fab>
                <div style={{
                    width: '10%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <PhotoLibrary style={{
                        width: '2rem',
                        height: '2rem'
                    }} />
                </div>
            </div>

        </div>
    );

}

export default withStyles(styles, { withTheme: true })(Camera);