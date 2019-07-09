/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */


let deferredInstallPrompt;

export const startInstallProcess = () => {

  // console.log('Hello in Start');
  const installButton = document.getElementById('butInstall');

  window.addEventListener('beforeinstallprompt', (e) => {
    console.debug('Before Install', e);

    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredInstallPrompt = e;
    installButton.removeAttribute('hidden');
  });

  installButton.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    installButton.style.display = 'none';
    // Show the prompt
    deferredInstallPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredInstallPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          // console.log('User accepted the A2HS prompt');
        } else {
          // console.log('User dismissed the A2HS prompt');
        }
        deferredInstallPrompt = null;
      });
  });

  // CODELAB: Add event listener for appinstalled event
  window.addEventListener('appinstalled', logAppInstalled);

  /**
   * Event handler for appinstalled event.
   *   Log the installation to analytics or save the event somehow.
   *
   * @param {Event} evt
   */
  function logAppInstalled(ev) {
    // CODELAB: Add code to log the event
    console.debug('App Installed', ev);
  }
}

