function dark() {
        var element = document.body;
        element.classList.toggle("dark-mode");

        if (element.className == "dark-mode") {
        element.textContent(dark_mode);
        }
    
}