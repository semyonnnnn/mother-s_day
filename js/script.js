// import { wishes } from './wishes.js';
// // import { audio } from './audio.js'

// // audio();




// // const audio = document.getElementById("bgMusic");

// // // Enable audio on first click
// // function enableAudio() {
// //     audio.muted = false;
// //     audio.play().catch((error) => {
// //         console.log("Автовоспроизведение заблокировано:", error);
// //     });
// // }
// // document.addEventListener("click", enableAudio, { once: true });


// // !audio

// const audio = document.getElementById("bgMusic");

// const playlist = [
//     "./assets/test_1.wav",
//     "./assets/test_2.wav",
//     "./assets/test_3.wav"
// ];

// let trackIndex = 0;

// // Load first track
// audio.src = playlist[trackIndex];

// // Enable audio on first click
// function enableAudio() {
//     audio.muted = false;
//     audio.play().catch((error) => {
//         console.log("Автовоспроизведение заблокировано:", error);
//     });
// }
// document.addEventListener("click", enableAudio, { once: true });

// // When song ends → next one
// audio.addEventListener("ended", () => {
//     trackIndex++;
//     if (trackIndex >= playlist.length) {
//         trackIndex = 0; // loop whole playlist
//     }

//     audio.src = playlist[trackIndex];
//     audio.play();
// });


// // Image paths
// const fileNames = Array.from({ length: 56 }, (_, i) => `${i + 1}.jpg`);
// const photoUrls = fileNames.map((f) => `./ppl/${f}`);

// // Floating sparkles
// function createPellets() {
//     const bg = document.getElementById("floatingBg");
//     for (let i = 0; i < 50; i++) {
//         const sparkle = document.createElement("div");
//         sparkle.className = "sparkle";
//         sparkle.style.left = `${Math.random() * 100}%`;
//         sparkle.style.top = `${Math.random() * 100}%`;
//         sparkle.style.setProperty("--delay", `${Math.random() * 2}s`);
//         sparkle.style.setProperty("--duration", `${1 + Math.random() * 2}s`);
//         bg.appendChild(sparkle);
//     }
// }

// // Floating items
// function createFloatingItems() {
//     const bg = document.getElementById("floatingBg");
//     const items = [
//         // --- Sakura / Pink petals ---
//         `<img src="/assets/sakura_1.png" width="40" height="40" alt="Sakura Petal 1"/>`,
//         `<img src="/assets/sakura_2.png" width="38" class="sakura" height="38" alt="Sakura Petal 2"/>`,
//         `<img src="/assets/sakura_3.png" width="38" height="38" alt="Sakura Petal 2"/>`,
//     ];

//     for (let i = 0; i < 30; i++) {
//         const el = document.createElement("div");
//         el.className = "bg-item";
//         el.innerHTML = items[Math.floor(Math.random() * items.length)];
//         el.style.left = `${Math.random() * 100}vw`;
//         el.style.setProperty("--dx", (Math.random() - 0.5) * 2);
//         el.style.animationDuration = `${25 + Math.random() * 30}s`;
//         el.style.animationDelay = `${-Math.random() * 20}s`;
//         el.style.opacity = 0.25 + Math.random() * 0.25;

//         const img = el.querySelector("img");
//         if (img) {
//             const speed = 8 + Math.random() * 7; // 8s to 15s for a full rotation
//             const direction = Math.random() > 0.5 ? "normal" : "reverse";
//             img.style.animation = `rotate ${speed}s linear infinite ${direction}`;
//             img.style.transformOrigin = "center center";
//         }

//         bg.appendChild(el);
//     }
// }

// // Create slides
// function createSlides() {
//     const slider = document.getElementById("slider");
//     for (let i = 0; i < photoUrls.length + 1; i++) {
//         const slide = document.createElement("div");
//         const isCover = i === 0;
//         const isType2 = !isCover && i % 2 === 0;
//         slide.className = `slide ${isCover ? "cover" : isType2 ? "type2" : "type1"
//             }`;

//         if (isCover) {
//             slide.textContent = "❤️";
//             slide.style.color = "#d1478c";
//             slide.style.display = "flex";
//             slide.style.justifyContent = "center";
//             slide.style.alignItems = "center";
//         } else {
//             const img = document.createElement("img");
//             img.className = "photo";
//             img.src = photoUrls[i - 1];
//             img.alt = "Фото для Дня Матери";
//             img.loading = "lazy";
//             img.style.display = "block";
//             slide.appendChild(img);
//         }

//         const wish = document.createElement("div");
//         wish.className = "wish-label";
//         wish.textContent = wishes[i] || "";
//         slide.appendChild(wish);

//         slider.appendChild(slide);
//     }
// }

// // Layout and slider sizing
// const sliderEl = document.getElementById("slider");
// let currentIndex = 0;
// let autoSlide;

// function setSliderLayout() {
//     const slides = document.querySelectorAll(".slide");
//     slides.forEach((slide) => {
//         slide.style.width = `${window.innerWidth}px`;
//         slide.style.flexShrink = "0";
//     });
//     sliderEl.style.display = "flex";
//     sliderEl.style.transition = "transform 0.5s ease";
//     sliderEl.style.width = `${slides.length * window.innerWidth}px`;
// }
// window.addEventListener("resize", setSliderLayout);

// // Slider control
// function nextSlide() {
//     currentIndex++;
//     if (currentIndex >= photoUrls.length + 1) currentIndex = 0; // infinite loop
//     sliderEl.style.transform = `translateX(-${currentIndex * window.innerWidth
//         }px)`;
// }

// function startAutoSlide() {
//     clearInterval(autoSlide);
//     autoSlide = setInterval(nextSlide, 3000);
// }

// // Pause on hover
// // sliderEl.addEventListener("mouseenter", () => clearInterval(autoSlide));
// // sliderEl.addEventListener("mouseleave", startAutoSlide);

// // Arrow clicks
// // document.querySelector(".ac-l").addEventListener("click", () => {
// //   currentIndex--;
// //   if (currentIndex < 0) currentIndex = photoUrls.length;
// //   sliderEl.style.transform = `translateX(-${
// //     currentIndex * window.innerWidth
// //   }px)`;
// // });

// // document
// //   .querySelector(".ac-r")
// //   .addEventListener("click", () => nextSlide());

// // Initialize
// createPellets();
// createFloatingItems();
// createSlides();
// setSliderLayout();
// setTimeout(() => startAutoSlide(), 100);


import { wishes } from "./wishes.js";

(function () {
    // Массив фото (горизонтальные и вертикальные)
    const imageUrls = Array.from({ length: 56 }, (_, i) => `/ppl/${i + 1}.jpg`);


    // Создание фона из цветов (все иконки яркие)
    function createFlowerBackground() {
        const container = document.getElementById('flowerBg');
        const flowerIcons = [
            'fa-seedling', 'fa-leaf', 'fa-feather', 'fa-pagelines',
            'fa-spa', 'fa-daisy', 'fa-tree', 'fa-canadian-maple-leaf',
            'fa-tree', 'fa-feather'
        ];
        const emojiFlowers = ['🌸', '🌷', '🌹', '🌺', '🌼', '🌻', '💐'];

        // 40 иконок FontAwesome
        for (let i = 0; i < 40; i++) {
            const flower = document.createElement('div');
            flower.className = 'floating-flower';
            const icon = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];
            flower.innerHTML = `<i class="fas ${icon}"></i>`;
            flower.style.left = Math.random() * 100 + '%';
            flower.style.animationDuration = (20 + Math.random() * 30) + 's';
            flower.style.fontSize = (50 + Math.random() * 70) + 'px';
            flower.style.animationDelay = (Math.random() * 15) + 's';
            // Яркие цвета
            const hue = Math.floor(Math.random() * 360);
            flower.style.color = `hsl(${hue}, 80%, 70%)`;
            flower.style.opacity = 0.3 + Math.random() * 0.4;
            container.appendChild(flower);
        }

        // 15 эмодзи-цветов
        for (let i = 0; i < 15; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-flower';
            emoji.textContent = emojiFlowers[Math.floor(Math.random() * emojiFlowers.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (25 + Math.random() * 30) + 's';
            emoji.style.fontSize = (60 + Math.random() * 60) + 'px';
            emoji.style.animationDelay = (Math.random() * 15) + 's';
            emoji.style.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
            emoji.style.opacity = 0.3 + Math.random() * 0.3;
            container.appendChild(emoji);
        }
    }

    // Создание страниц
    function createPages() {
        const album = document.getElementById('album');
        for (let i = 0; i < 51; i++) {
            const page = document.createElement('div');
            page.className = 'page';

            const frame = document.createElement('div');
            frame.className = 'photo-frame';

            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'image-wrapper';

            const img = document.createElement('img');
            img.src = imageUrls[i % imageUrls.length];
            img.alt = 'Поздравительное фото';

            imgWrapper.appendChild(img);
            frame.appendChild(imgWrapper);

            const wishDiv = document.createElement('div');
            wishDiv.className = 'wish-container';
            wishDiv.textContent = wishes[i];
            frame.appendChild(wishDiv);

            // Декоративные иконки вокруг рамки (каждая со случайным ярким цветом)
            const decorPositions = ['decor-1', 'decor-2', 'decor-3', 'decor-4', 'decor-5', 'decor-6', 'decor-7', 'decor-8'];
            const decorIcons = ['fa-heart', 'fa-sparkles', 'fa-seedling', 'fa-leaf', 'fa-feather', 'fa-pagelines', 'fa-spa', 'fa-daisy', 'fa-tree', 'fa-gem', 'fa-sun', 'fa-crown', 'fa-star'];

            for (let j = 0; j < 8; j++) {
                const decor = document.createElement('div');
                decor.className = `decor ${decorPositions[j]}`;
                const randomIcon = decorIcons[Math.floor(Math.random() * decorIcons.length)];
                decor.innerHTML = `<i class="fas ${randomIcon}"></i>`;
                decor.style.fontSize = (22 + Math.floor(Math.random() * 15)) + 'px';
                // Яркий цвет
                decor.style.color = `hsl(${Math.floor(Math.random() * 360)}, 85%, 65%)`;
                frame.appendChild(decor);
            }

            page.appendChild(frame);
            album.appendChild(page);
        }
        showPage(0);
    }

    const animations = [
        'fadeScale', 'slideTop', 'slideBottom', 'slideLeft',
        'slideRight', 'rotateIn', 'flipIn', 'bounceIn'
    ];

    function showPage(index) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => p.style.display = 'none');
        pages[index].style.display = 'flex';
        document.getElementById('pageCounter').textContent = `Страница ${index + 1} из ${pages.length}`;

        const frame = pages[index].querySelector('.photo-frame');
        const animClass = animations[Math.floor(Math.random() * animations.length)];
        frame.style.animation = 'none';
        frame.offsetHeight;
        frame.style.animation = `${animClass} 1s ease forwards`;
    }

    let currentPage = 0;
    let autoPlayInterval;

    function nextPage() {
        const pages = document.querySelectorAll('.page');
        currentPage = (currentPage + 1) % pages.length;
        showPage(currentPage);
    }

    function prevPage() {
        const pages = document.querySelectorAll('.page');
        currentPage = (currentPage - 1 + pages.length) % pages.length;
        showPage(currentPage);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextPage, 4000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Управление музыкой
    const music = document.getElementById('backgroundMusic');
    const musicBtn = document.getElementById('musicControl');
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            music.pause();
            musicBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        prevPage();
        stopAutoPlay();
        startAutoPlay();
    });
    document.getElementById('nextBtn').addEventListener('click', () => {
        nextPage();
        stopAutoPlay();
        startAutoPlay();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextPage();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowLeft') {
            prevPage();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === ' ') {
            e.preventDefault();
            musicBtn.click();
        }
    });

    const container = document.querySelector('.album-container');
    container.addEventListener('mouseenter', stopAutoPlay);
    container.addEventListener('mouseleave', startAutoPlay);

    // Инициализация
    createFlowerBackground();
    createPages();
    startAutoPlay();
})();