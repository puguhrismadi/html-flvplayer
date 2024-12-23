// Langkah 1: Siapkan Proyek Node.js
// Pastikan Anda sudah menginisialisasi proyek Node.js dan menginstal mpegts.js

// Jalankan perintah berikut di terminal untuk menginstal mpegts.js
// npm install mpegts.js

// Langkah 2: Buat file HTML untuk memuat player
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FLV Player</title>
</head>
<body>
    <h1>FLV Player menggunakan mpegts.js</h1>
    <video id="videoElement" controls autoplay style="width: 100%; height: auto;"></video>
    <script src="https://cdn.jsdelivr.net/npm/mpegts.js"></script>
    <script>
        // Pastikan mendefinisikan URL FLV
        const flvUrl = 'http://your-flv-stream-url/file.flv';

        // Pilih elemen video
        const videoElement = document.getElementById('videoElement');

        // Periksa apakah browser mendukung mpegts.js
        if (mpegts.getFeatureList().mseLivePlayback) {
            const player = mpegts.createPlayer({
                type: 'flv',
                isLive: true,
                url: flvUrl
            });

            player.attachMediaElement(videoElement);
            player.load();
            player.play();
        } else {
            console.error('FLV playback is not supported in this browser');
        }
    </script>
</body>
</html>
`;

// Simpan file HTML ke sistem file
fs.writeFileSync('index.html', htmlContent);
console.log('File HTML untuk FLV Player telah dibuat sebagai index.html');
