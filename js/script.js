import { wishes } from "./wishes.js";

(function () {
    // --- 1. STATE ---
    const imageUrls = Array.from({ length: 56 }, (_, i) => `./ppl/${i + 1}.jpg`);
    const playlist = [
        "./assets/song_1.mp3",
        "./assets/song_2.mp3",
        "./assets/song_3.mp3"
    ];

    let currentPage = 0;
    let trackIndex = 0;
    let autoPlayInterval = null;

    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicControl');
    const album = document.getElementById('album');

    // --- 2. SLIDER FUNCTIONS ---
    function showPage(index) {
        const pages = document.querySelectorAll('.page');
        if (pages.length === 0) return;

        // Update Visibility
        pages.forEach(p => p.style.display = 'none');
        pages[index].style.display = 'flex';

        // Update Counter
        const counter = document.getElementById('pageCounter');
        if (counter) counter.textContent = `${index + 1} / ${pages.length}`;

        // Trigger Animation
        const frame = pages[index].querySelector('.photo-frame');
        if (frame) {
            const animations = ['fadeScale', 'slideTop', 'slideBottom', 'slideLeft', 'slideRight', 'rotateIn', 'flipIn', 'bounceIn'];
            const animClass = animations[Math.floor(Math.random() * animations.length)];
            frame.style.animation = 'none';
            void frame.offsetHeight; // Force reflow
            frame.style.animation = `${animClass} 1s ease forwards`;
        }
    }

    function nextPage() {
        const pages = document.querySelectorAll('.page');
        if (pages.length === 0) return;
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        // Start the timer
        autoPlayInterval = setInterval(nextPage, 4000);
        console.log("Slider: Started");
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
        console.log("Slider: Stopped");
    }

    // --- 3. MUSIC & CONTROL ---
    // Pre-set the first track
    audio.src = playlist[trackIndex];

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            // ACTION: START
            startAutoPlay(); // Start slider immediately

            audio.play()
                .then(() => {
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                })
                .catch(err => {
                    console.warn("Audio play blocked, but slider is moving.");
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                });
        } else {
            // ACTION: STOP
            stopAutoPlay();
            audio.pause();
            musicBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    audio.addEventListener('ended', () => {
        trackIndex = (trackIndex + 1) % playlist.length;
        audio.src = playlist[trackIndex];
        audio.play().catch(() => { });
    });

    // --- 4. GENERATION ---
    function createFlowerBackground() {
        const container = document.getElementById('flowerBg');
        const flowerIcons = ['fa-seedling', 'fa-leaf', 'fa-spa', 'fa-tree'];
        const emojiFlowers = ['🌸', '🌷', '🌹', '🌺', '🌼', '🌻', '💐'];

        for (let i = 0; i < 40; i++) {
            const flower = document.createElement('div');
            flower.className = 'floating-flower';
            flower.innerHTML = i % 2 === 0 ? `<i class="fas ${flowerIcons[i % 4]}"></i>` : emojiFlowers[i % 7];

            Object.assign(flower.style, {
                left: Math.random() * 100 + '%',
                animationDuration: (15 + Math.random() * 20) + 's',
                fontSize: (40 + Math.random() * 40) + 'px',
                animationDelay: (Math.random() * 10) + 's',
                color: `hsl(${Math.random() * 360}, 80%, 70%)`,
                opacity: 0.4
            });
            container.appendChild(flower);
        }
    }

    function createPages() {
        const total = wishes.length || 154;
        for (let i = 0; i < total; i++) {
            const page = document.createElement('div');
            page.className = 'page';
            page.style.display = 'none';

            page.innerHTML = `
                <div class="photo-frame">
                    <div class="image-wrapper">
                        <img src="${imageUrls[i % imageUrls.length]}" alt="Photo">
                    </div>
                    <div class="wish-container">${wishes[i] || "С праздником!"}</div>
                </div>
            `;
            album.appendChild(page);
        }
        showPage(0);
    }

    // --- 5. INIT ---
    createFlowerBackground();
    createPages();

    // Key Support
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            musicBtn.click();
        }
    });
})();