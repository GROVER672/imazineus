window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")

  }
});

/* PARALLAX EFFECT (JavaScript Required) */
window.addEventListener("scroll", function () {
  let parallax = window.innerWidth > 768 
    ? document.querySelector(".parallax-bg video.desktop-video_cust") 
    : document.querySelector(".parallax-bg video.mobile-video_cust");

  if (parallax) {
    let scrollPosition = window.scrollY;
    let speed = window.innerWidth > 768 ? 0.5 : 0.2; // Mobile ke liye slow effect
    parallax.style.transform = "translateY(" + scrollPosition * speed + "px)";
  }
});

window.onload = function () {
  setTimeout(() => {
    document.querySelectorAll(".parallax-bg video").forEach(video => {
      video.style.filter = "brightness(1)";
    });
  }, 2000);
};
// 

  // service counting
  document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(element, start, end, duration) {
        let range = end - start;
        let current = start;
        
        // Adjust increment dynamically to slow down animation
        let increment = Math.ceil(range / 200); // Increased divisor for slower counting
        let stepTime = Math.abs(Math.floor(duration / range)) || 50; // Slower step time
  
        let timer = setInterval(function () {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            element.innerText = formatNumber(current);
        }, stepTime);
    }
  
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M+";
        } else if (num >= 1000) {
            return Math.floor(num / 1000) + "K+";
        } else {
            return num + "+";
        }
    }
  
    function startCounters() {
        let counters = document.querySelectorAll(".item h1");
        counters.forEach(counter => {
            let targetText = counter.innerText.replace("+", "").trim();
  
            let targetNumber;
            if (targetText.includes("M")) {
                targetNumber = parseFloat(targetText) * 1000000;
            } else if (targetText.includes("K")) {
                targetNumber = parseFloat(targetText) * 1000;
            } else {
                targetNumber = parseInt(targetText.replace(/\D/g, ""), 10);
            }
  
            if (!isNaN(targetNumber)) {
                animateCounter(counter, 0, targetNumber, 4000); // Increased duration for slower animation
            }
        });
    }
  
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
  
    observer.observe(document.querySelector(".case-container"));
  });
  // end counting
 
  // speed

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".section-content").classList.add("visible");

    setTimeout(function () {
      document.querySelector(".images").classList.add("images-visible");
    }, 1000);

  }, 500); // 0.5s delay for text & buttons
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".cards-cutsom-blockss .card");
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              setTimeout(() => {
                  entry.target.classList.add("show");
              }, index * 300); // Pehli card ka bhi delay maintain karenge
              
              // Ek baar show hone ke baad observer se hata dena taaki repeat na ho
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

// section parallax
window.addEventListener("scroll", function () {

  let scrollTop = window.scrollY;
  console.log(scrollTop)
  let image = document.getElementById("parallaxImage");

  let maxScale = 9.0; // Initially bigger
  let minScale = -9.0; // Final size
  let scale = Math.max(minScale, maxScale - scrollTop / 1000);

  image.style.transform = ` scale(${scale})`;
  console.log("scale" + scale)
});
// end parallax
 
// section 7 colour chnge
window.addEventListener("scroll", function () {
  let section6 = document.querySelector(".clients-review");
  let section7 = document.querySelector(".section7");

  if (!section6 || !section7) return;

  let section6Bottom = section6.getBoundingClientRect().bottom; // Section 6 ka bottom position

  if (section6Bottom <= window.innerHeight / 2) {
      // Jab section 6 ka aadha ya usse zyada scroll ho jaye
      section6.style.backgroundColor = "black";
      section7.style.backgroundColor = "black";
      section7.classList.add("bg-black"); // Class add karega
  } else {
      section6.style.backgroundColor = "white";
      section7.style.backgroundColor = "white";
      section7.classList.remove("bg-black"); // Class remove karega
  }
});
// end section 7 color chnge

function toggleanswer(element) {
  const allItems = document.querySelectorAll('.faq-item');

  allItems.forEach(item => {
    if (item !== element) {
      item.classList.remove('active');
      const icon = item.querySelector('.icon');
      if (icon) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    }
  });

  element.classList.toggle('active');

  const icon = element.querySelector('.icon');
  if (element.classList.contains('active')) {
    icon.classList.remove('fa-plus');
    icon.classList.add('fa-minus');
  } else {
    icon.classList.remove('fa-minus');
    icon.classList.add('fa-plus');
  }
}

// window.addEventListener("load", () => {
//   console.log("onloaddd")
//   const video = document.createElement("video");
//   video.autoplay = true;
//   video.muted = true;
//   video.loop = true;
//   video.playsInline = true;
//   video.className = "absolute inset-0 w-full h-full object-cover z-0 hero-video";
 
//   const source = document.createElement("source");
//   source.src = "./image/imazineus bg video .webm";
//   source.type = "video/webm";

//   video.appendChild(source);

//   const hero = document.querySelector(".hero-section");
//   const fallback = document.getElementById("fallback-img");
//   hero.insertBefore(video, fallback);
//   fallback.remove();
// });


 


