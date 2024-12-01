
const tabs = document.querySelectorAll('li'); 
const contents = document.querySelectorAll('div.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('tab-active'));

        contents.forEach(content => content.classList.remove('active'));

        this.classList.add('tab-active');

        if (this.classList.contains('tab-classement')) {
            document.querySelector('.content.Classement').classList.add('active');
        } else if (this.classList.contains('tab-Compétition')) {
            document.querySelector('.content.Compétition').classList.add('active');
        } else if (this.classList.contains('tab-équipement')) {
            document.querySelector('.content.Équipement').classList.add('active');
        }
    });
});

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
});
console.log(darkModeToggle)

