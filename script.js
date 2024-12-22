function updateText() {
    const heading = document.getElementById("p-ppi");

    if (window.innerWidth < 768) {
        heading.textContent = "PPI UPM";
    } else {
        heading.textContent = "Persatuan Pelajar Indonesia UPM";
    }
}

updateText();
window.addEventListener("resize", updateText);