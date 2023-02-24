// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas width and height to match the viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to store the fireworks
const fireworks = [];

// Create a function to create a new firework
function createFirework() {
  // Set the firework's position to the center of the canvas
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Create a new firework with a random color
  const firework = {
    x: x,
    y: y,
    size: 5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    particles: [],
  };

  // Create 50 particles for the firework
  for (let i = 0; i < 50; i++) {
    const particle = {
      x: x,
      y: y,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 5 + 1,
      angle: Math.random() * Math.PI * 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };

    firework.particles.push(particle);
  }