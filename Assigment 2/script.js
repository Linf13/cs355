document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("dark-mode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });
 
    if (location.pathname.includes("page2.html")) {
        const params = new URLSearchParams(location.search);
        const dataSection = document.getElementById("submission-data");

        params.forEach((value, key) => {
            const row = document.createElement("div");
            row.classList.add("data-row");

            const keySpan = document.createElement("span");
            keySpan.textContent = key;
            const valueSpan = document.createElement("span");
            valueSpan.textContent = value;

            row.appendChild(keySpan);
            row.appendChild(valueSpan);
            dataSection.appendChild(row);
        });
    }
});
