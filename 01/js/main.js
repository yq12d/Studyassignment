function startVideoCapture() {
    fetch('/start_video')
        .then(response => response.text())
        .then(data => {
            document.getElementById('video-output').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

function stopVideoCapture() {
    fetch('/stop_video')
        .then(response => response.text())
        .then(data => {
            document.getElementById('video-output').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

function startAudioCapture() {
    fetch('/start_audio')
        .then(response => response.text())
        .then(data => {
            document.getElementById('transcription-result').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

function stopAudioCapture() {
    fetch('/stop_audio')
        .then(response => response.text())
        .then(data => {
            document.getElementById('transcription-result').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

function recognizeFaces() {
    const fileInput = document.getElementById('image-file');
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
    
    fetch('/recognize_faces', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('face-recognition-result').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}

function generateSummary() {
    const formData = new URLSearchParams(new FormData(document.getElementById('summary-form')));
    fetch('/generate_summary', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('summary-result').innerText = data.summary;
    })
    .catch(error => console.error('Error:', error));
}
