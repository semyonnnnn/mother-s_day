export const audio = () => {
    const audio = document.getElementById("bgMusic");

    const playlist = [
        "./assets/test_1.wav",
        "./assets/test_2.wav",
        "./assets/test_3.wav"
    ];

    let trackIndex = 0;

    // Load first track
    audio.src = playlist[trackIndex];

    // Enable audio on first click
    function enableAudio() {
        audio.muted = false;
        audio.play().catch((error) => {
            console.log("Автовоспроизведение заблокировано:", error);
        });
    }
    document.addEventListener("click", enableAudio, { once: true });

    // When song ends → next one
    audio.addEventListener("ended", () => {
        trackIndex++;
        if (trackIndex >= playlist.length) {
            trackIndex = 0; // loop whole playlist
        }

        audio.src = playlist[trackIndex];
        audio.play();
    });
}