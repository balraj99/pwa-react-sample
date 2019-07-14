import React from 'react';
import { useEffect, useState } from 'react';
import { startInstallProcess } from './install';
import Camera from './Camera';
import { Button } from '@material-ui/core';

const theme = {
  background: "#f7df1e",
  color: "#24292e"
};

const styles = {
  root: {
    background: '#000'
  }
}

const App = (props) => {

  const onGalleryPickerClick = (files) => {

    /**
     * @todo: Post the file using some service 
     */

    //again following can be done in service instead here.
    //just a demonstration of multifile upload construction of body
    const body = new FormData();

    Array.from(files).map((file, index) => {
      body.append(`file${index}`, file);
    });

    //someService.post(body);


    //close camera once file is picked up.
    toggleCamera(!openCamera);
  }

  /**
   * @todo: Implement custom 'Add to homescreen' banner
   */
  useEffect(() => {
    // startInstallProcess();
  });

  // const [filesSelected, updateFiles] = useState('Upload Files');
  const [openCamera, toggleCamera] = useState(false);
  const [cameraEvent, updateCaptureDataURL] = useState(null);

  const {
    classes
  } = props;

  return (
    <div style={{
      // fontFamily: 'Arial, Helvetica, sans-serif !important',
      background: '#212121',
      height: '100%'
    }}>
      {!openCamera && (
        <div style={{
          padding: 2,
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2)'
        }}>
          <header>
            <h1 style={{
              textAlign: 'center'
            }}>
              <a href="/" style={{
                textDecoration: 'none',
                color: 'white'
              }}>
                Mpowered
          </a>
            </h1>
            <button id="butInstall" aria-label="Install MPowered" hidden>Install MPowered</button>
          </header>
        </div>
      )}
      {
        !cameraEvent && !openCamera && (
          <div style={{
            maxWidth: '500px',
            width: '100%',
            height: '400px',
            background: 'transparent',
            textAlign: 'center',
            color: '#fff'
          }}>
            Captured Image Here
          </div>
        )
      }
      {cameraEvent && !openCamera && (
        <img
          style={{
            maxHeight: Math.min(cameraEvent.height, Math.min(540, window.innerHeight)),
            maxWidth: Math.min(cameraEvent.width, window.innerWidth),
            height: 'auto',
            width: 'auto'
          }}
          src={cameraEvent.captureDataURL}
          alt={'Image'}
        />)
      }
      {openCamera ?
        <div style={{
          width: '100%',
          'height': openCamera ? '100%' : '70%'
        }}>
          <Camera
            onCapture={(cameraEvent) => { updateCaptureDataURL(cameraEvent); toggleCamera(!openCamera) }}
            onGalleryPickerClick={onGalleryPickerClick}
          />
        </div>
        :
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          margin: 8,
          height: '15%'
        }}
        >
          <div style={{
            margin: 4,
            width: '100%',
            height: '100%'
          }}>
            <Button
              style={{
                backgroundColor: '#90caf9',
                color: '#000'
              }}
              onClick={(e) => { updateCaptureDataURL(null); toggleCamera(!openCamera); }}
            >
              Open Camera
            </Button>
            {cameraEvent && cameraEvent.captureDataURL && (
              <a
                href={cameraEvent.captureDataURL}
                download
              >
                <Button
                  style={{
                    backgroundColor: 'green',
                    color: '#000'
                  }}
                  onClick={(e) => { }}
                >
                  Download Image
            </Button>
              </a>)
            }
          </div>
        </div>
      }

    </div>
  );
}

export default App;