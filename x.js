let slideIndex = 0;
        showSlides();
    
        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 4000); // Ubah gambaar setiap 4 detik
        }
    
        document.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const offset = header.offsetHeight;
            const scrollTop = window.pageYOffset;
            if (scrollTop > offset) {
                document.body.classList.add('blurred');
            } else {
                document.body.classList.remove('blurred');
            }
        });

document.getElementById('part1').addEventListener('click', function() {
    var taskbar = document.getElementById('taskbar');
    if (taskbar.style.display === "none") {
        taskbar.style.display = "block";
    } else {
        taskbar.style.display = "none";
    }
});