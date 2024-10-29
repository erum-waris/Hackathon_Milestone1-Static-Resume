var toggleBtn = document.getElementById('toggleBtn');
var skills = document.getElementById('skills');
toggleBtn.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
