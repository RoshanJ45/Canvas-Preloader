    const canvas = document.getElementById("preloader");
const ctx = canvas.getContext("2d");
canvas.width = 150;
canvas.height = 150;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;
let startAngle = 0;
function drawPreloader() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Background circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.strokeStyle = "#444";
ctx.lineWidth = 8;
ctx.stroke();
// Moving arc
ctx.beginPath();
ctx.arc(centerX, centerY, radius, startAngle, startAngle + Math.PI / 2);
ctx.strokeStyle = "#f0a500";
ctx.lineWidth = 8;
ctx.lineCap = "round";
ctx.stroke();
// Update angle
startAngle += 0.05;
requestAnimationFrame(drawPreloader);
}
drawPreloader();
