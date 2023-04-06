const lastModified = new Date(document.lastModified);
const dateSpan = document.getElementById('lastModified');
dateSpan.innerHTML = lastModified.toDateString();