function update_waktu() {
    const now = new Date();
    const jam = now.getHours();
    const menit = now.getMinutes();
    const detik = now.getSeconds();

    const waktu_element = document.getElementById("waktu");
    waktu_element.textContent = `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;

    const tanggal_element = document.getElementById("tanggal");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tanggal_string = now.toLocaleDateString('id-ID', options);
    tanggal_element.textContent = tanggal_string;

    const tahun = document.getElementById("tahun");
    if (now.getFullYear() === 2023) {
        tahun.innerHTML = "Tahun ini <span>2023</span>";
    } else {
        tahun.innerHTML = "Selamat Tahun Baru <span> 2024</span>";
        
        showFireworks();
    }
}

function showFireworks() {
    const audioElement = document.getElementById("fireworksAudio");
    const fireDiv = document.querySelector(".fireworksDiv");
    const fireworks = new Fireworks(fireDiv, {
        delay: { min:15, max: 30},
        trace: 5,
        speed: 0.5,
        particles: 200,
        enabled: false,
        files: [
            'explosion0.mp3',
            'explosion1.mp3',
            'explosion2.mp3'
        ],
        volume: {
            min: 4,
            max: 8
        }
    });
    audioElement.play();
    fireworks.start();

    setTimeout(function () {
        fireworks.stop();
        audioElement.stop();
    }, 10000);
}

setInterval(update_waktu, 1000);
update_waktu();