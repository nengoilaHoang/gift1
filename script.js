const cube = document.getElementById('cube');
const scene = document.querySelector('.scene');
let isDragging = false;
let startRoteation = { x: 0, y: 0 };
let startX, startY;

function startDrag(e){
    isDragging = true;
    startX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    startY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    e.preventDefault(); // Ngăn chặn hành động mặc định để tránh cuộn trang
}

function moveDrag(e) {
    if (!isDragging) return;
    const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;
    // Điều chỉnh tốc độ xoay (giảm tốc độ để tránh xoay quá nhanh)
    const rotateY = deltaX * 0.02;
    const rotateX = deltaY * -0.02; // Đảo dấu để xoay tự nhiên hơn
    startRoteation.x += rotateX;
    startRoteation.y += rotateY;
    cube.style.transform = `rotateX(${startRoteation.x}deg) rotateY(${startRoteation.y}deg)`;
    e.preventDefault(); // Ngăn chặn hành động mặc định để tránh cuộn trang
}

function stopDrag() {
    isDragging = false;
}

scene.addEventListener('mousedown', startDrag);

document.addEventListener('mousemove', moveDrag);

document.addEventListener('mouseup', stopDrag);

// Thêm sự kiện cho touch
scene.addEventListener('touchstart', startDrag, { passive: false });
document.addEventListener('touchmove', moveDrag, { passive: false });
document.addEventListener('touchend', stopDrag);    