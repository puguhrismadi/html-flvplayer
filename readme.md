### **Simple FLV player pada kode HTML Menggunakan Library mpegts.js**

Requrement :

* Library mpegts.js : [https://cdn.jsdelivr.net/npm/mpegts.js](https://cdn.jsdelivr.net/npm/mpegts.js "mpegts.js dari cdn")
* Video yang digunakan : dalam projek ini adalah video  streaming format flv yang di publish menggunakan obs studio
* Platform streaming : Oryx (SRS Stack ) Platform Streaming (sumber : [https://github.com/ossrs/srs](https://github.com/ossrs/srs "Oryx (SRS Stack platform)"))

Contoh Sederhana Source Code index.html

```html

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
        const flvUrl = 'https://192.168.7.126/drone/livestream-trans.flv';

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

```

Hasil Output :
![hasil](/screenshot/Screen%20Shot%202024-12-23%20at%2016.03.04.png "output flv player")
Penggunaan Bandwith  :

* Tools Penggukuran inbound dan outbound menggunakan srs console dari SRS Stack (Oryx)
* Pada Record Pertama adalah penggunaan bandwith dari sumber asli streaming
* Pada Record Kedua adalah penggunaan bandwith dari video yang sudah di transcoding menggunakan fitur dari Oryx

![hasil](/screenshot/bandwith-usage.png "Penggunaan Bandwith Streaming")
