 const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;

const skills = document.getElementById('skills') as HTMLElement;
toggleBtn.addEventListener('click',function ()  {
    if(skills.style.display === 'none' || skills.style.display === ''){
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});