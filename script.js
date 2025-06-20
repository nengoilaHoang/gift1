const cube = document.getElementById('cube');
const scene = document.querySelector('.scene');
let isDragging = false;
let startRoteation = { x: 0, y: 0 };
let startX, startY;

scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    // Điều chỉnh tốc độ xoay (giảm tốc độ để tránh xoay quá nhanh)
    const rotateY = deltaX * 0.02;
    const rotateX = deltaY * -0.02; // Đảo dấu để xoay tự nhiên hơn
    startRoteation.x += rotateX;
    startRoteation.y += rotateY;
    cube.style.transform = `rotateX(${startRoteation.x}deg) rotateY(${startRoteation.y}deg)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
