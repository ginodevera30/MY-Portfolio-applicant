const PASSWORD = "123456";

// LOGIN FUNCTION
function login() {
    const input = document.getElementById("password").value;
    const errorEl = document.getElementById("error");

    if (input === "") {
        errorEl.innerText = "❌ Please enter a password!";
        return;
    }

    if (input === PASSWORD) {
        errorEl.innerText = "✅ Logging in...";
        errorEl.style.color = "#27ae60";
        localStorage.setItem("auth", "true");
        setTimeout(() => {
            window.location.href = "../home.html";
        }, 500);
    } else {
        errorEl.innerText = "❌ Wrong password! Try 123456";
        errorEl.style.color = "#e74c3c";
        document.getElementById("password").value = "";
    }
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "portfolio/index.html";
}

// CLOSE WELCOME MODAL
function closeModal() {
    const modal = document.getElementById("welcomeModal");
    if (modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

// PROTECT HOME PAGE
window.addEventListener("load", function() {
    const currentPage = window.location.pathname;
    if (currentPage.includes("home.html") || currentPage.endsWith("/") && !currentPage.includes("portfolio")) {
        if (localStorage.getItem("auth") !== "true") {
            window.location.href = "portfolio/index.html";
        }
    }
});

// ALLOW ENTER KEY TO LOGIN
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                login();
            }
        });
    }
});

// ==================== GEOLOCATION FEATURE ====================
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude.toFixed(4);
                const lon = position.coords.longitude.toFixed(4);
                localStorage.setItem("userLat", lat);
                localStorage.setItem("userLon", lon);
                // Location badge is set to Sorsogon City as default, but coordinates are stored
            },
            function(error) {
                // Default to Sorsogon City if geolocation denied
                localStorage.setItem("userLocation", "Sorsogon City, Philippines");
            }
        );
    }
}

// Call geolocation on page load
document.addEventListener("DOMContentLoaded", function() {
    getUserLocation();
});

// ==================== CONTACT FORM HANDLER ====================
function handleContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const subject = document.getElementById("contactSubject").value;
        const message = document.getElementById("contactMessage").value;

        // Email body with visitor info
        const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Location: Sorsogon City, Philippines
Device: ${navigator.userAgent.split(" ").slice(-2).join(" ")}
Time: ${new Date().toLocaleString()}
        `;

        // Send email using mailto link (creates email draft)
        const mailtoLink = `mailto:ginobarreda111@gmail.com?subject=${encodeURIComponent("[Portfolio Contact] " + subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Alternative: Send via a backend service (requires backend)
        // For now, we'll use a simple approach with a confirmation message
        
        // Show success message
        const btn = form.querySelector("button");
        const originalText = btn.textContent;
        btn.textContent = "✓ Message Sent!";
        btn.style.background = "linear-gradient(135deg, #06d6a0, #118ab2)";
        
        // Log the message (in production, this would go to a backend)
        console.log("Contact Message:", { name, email, subject, message });
        
        // Open mailto link
        window.location.href = mailtoLink;
        
        // Reset form
        setTimeout(() => {
            form.reset();
            btn.textContent = originalText;
            btn.style.background = "";
        }, 2000);
    });
}

document.addEventListener("DOMContentLoaded", handleContactForm);

// ==================== HEART BUTTON HANDLER ====================
function handleHeartButton() {
    const heartButton = document.getElementById("heartButton");
    if (!heartButton) return;

    heartButton.addEventListener("click", function() {
        // Create email content for direct message
        const subject = "Portfolio Message from Visitor";
        const emailBody = `
Hello Ariel Gino,

Someone visited your portfolio and wants to send you a message!

Visitor Details:
- Location: ${localStorage.getItem("userLocation") || "Sorsogon City, Philippines"}
- Device: ${navigator.userAgent.split(" ").slice(-2).join(" ")}
- Time: ${new Date().toLocaleString()}
- Page: ${window.location.href}

They clicked the "Send Message" button to contact you directly.

Please respond to this visitor as soon as possible!

Best regards,
Portfolio Contact System
        `;

        // Create mailto link with pre-filled message
        const mailtoLink = `mailto:ginobarreda111@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Change button appearance temporarily
        const originalText = heartButton.textContent;
        heartButton.textContent = "📤 Sending...";
        heartButton.style.background = "linear-gradient(135deg, #4CAF50, #45a049)";
        heartButton.style.transform = "scale(1.1)";

        // Open email client with pre-filled message
        window.location.href = mailtoLink;

        // Reset button after 3 seconds
        setTimeout(() => {
            heartButton.textContent = originalText;
            heartButton.style.background = "";
            heartButton.style.transform = "";
        }, 3000);
    });
}

document.addEventListener("DOMContentLoaded", handleHeartButton);

// ==================== SMOOTH SCROLL BEHAVIOR ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ==================== SCROLL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".project-card, .skill-category, .team-member").forEach(el => {
        observer.observe(el);
    });
});

