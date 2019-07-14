function addCam(){
    let videoElement = document.createElement('video');
    videoElement.setAttribute('autoplay', 'true');
    videoElement.setAttribute('id', 'camVideo');
    videoElement.setAttribute('style', "height: 200px; position: absolute; bottom: 30px; right: 30px;");

    let testeElement = document.getElementById('main');
    testeElement.appendChild(videoElement);

    let video = document.querySelector("#camVideo");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((error) => {
                console.log(`Something went wrong! Error: ${error}`);
            });
    }
}

addCam();