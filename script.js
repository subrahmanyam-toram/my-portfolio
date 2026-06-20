
// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================

// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");
        }
    });
});


// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";

        header.style.background =
            "#ffffff";

    } else {

        header.style.boxShadow = "none";

        header.style.background =
            "#ffffff";
    }
});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const hiddenElements =
    document.querySelectorAll(
        ".about-container, .skill-card, .project-card, .education-card, .timeline-item, .cert-card, .contact-form"
    );

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });

    },

    {
        threshold: 0.15
    }
);

hiddenElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);
});


// =========================================
// CONTACT FORM
// =========================================

console.log("SCRIPT LOADED");
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    const result = document.getElementById("result");

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        result.innerHTML = "Sending...";

        const formData = new FormData(form);

        formData.append(
            "access_key",
            "8d21ab06-3efa-48db-9de6-26a2087796c4"
        );

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.success) {

                result.innerHTML =
                    "✅ Message Sent Successfully!";

                form.reset();

            } else {

                result.innerHTML =
                    "❌ " + data.message;
            }

        } catch (error) {

            console.error(error);

            result.innerHTML =
                "❌ Something went wrong!";
        }

    });

});

// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.background = "#81b53f";
scrollBtn.style.color = "#fff";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});


// =========================================
// LOADER ANIMATION
// =========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");
});


// =========================================
// CONSOLE MESSAGE
// =========================================

console.log(
    "%cWelcome To Subbu Portfolio",
    "color:#81b53f;font-size:18px;font-weight:bold;"
);

