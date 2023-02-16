 // Set the data-src of each image to its src attribute when it's close to the viewport
      const images = document.querySelectorAll('img');
      const options = {
        threshold: 0.2
      };
      const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
          }
        });
      };
      const observer = new IntersectionObserver(handleIntersection, options);
      images.forEach(image => observer.observe(image));