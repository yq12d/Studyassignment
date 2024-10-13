const socket = io.connect('http://' + document.domain + ':' + location.port);

socket.on('transcription', function(data) {
    const transcriptionResult = document.getElementById('transcription-result');
    transcriptionResult.innerHTML += '<p>' + data.transcription + '</p>';
    const transcriptionText = document.getElementById('transcription-text');
    transcriptionText.value += data.transcription + '\n';
});

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