// const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;

// const skills = document.getElementById('skills') as HTMLElement;
// toggleBtn.addEventListener('click',function ()  {
//     if(skills.style.display === 'none' || skills.style.display === ''){
//         skills.style.display = 'block';
//     } else {
//         skills.style.display = 'none';
//     }
// });
const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

// Initially, skills should be visible and button should say "Hide Skills"
if (toggleBtn && skills) {
    skills.style.display = 'block';
    toggleBtn.textContent = 'Hide Skills';

    toggleBtn.addEventListener('click', function () {
        if (skills.style.display === 'block') {
            skills.style.display = 'none';
            toggleBtn.textContent = 'Show Skills';
        } else {
            skills.style.display = 'block';
            toggleBtn.textContent = 'Hide Skills';
        }
    });
}
