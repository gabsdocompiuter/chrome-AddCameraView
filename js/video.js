function activeCam(){
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

activeCam();