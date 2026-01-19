const themes = [
    { name: "light", message: "Light theme activated. Bright and clear!" },
    { name: "dark", message: "Dark theme activated. Easy on the eyes!" },
    { name: "ocean", message: "Ocean theme activated. Calm like the sea!" }
];

const themeSwitcher = document.querySelector('#theme-switcher-button');
const themeDropDown = document.querySelector('#theme-dropdown');
const menuItems = document.querySelectorAll('[role="menuitem"]');
const liveRegion = document.querySelector('#theme-announcer');
//
themeSwitcher.addEventListener('click', ()=>{
    themeDropDown.hidden = !(themeDropDown.hidden)
})

// 2. Button Toggle Logic
themeSwitcher.addEventListener('click', ()=>{
    const isOpened = themeSwitcher.getAttribute('aria-expanded') === 'true';

    if(isOpened){
        themeSwitcher.hidden = true;
        themeSwitcher.setAttribute('aria-expanded', 'false');
    }else{
        themeSwitcher.hidden = false;
        themeSwitcher.setAttribute('aria-expanded', 'true');
    }
});

// 3. Menu Item Selection Logic
menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        // getiing name of selected theme
        const themeName = item.id.split('-')[1];
    //update the body class to apply the theme
    document.body.className = '';
    document.body.classList.add(`theme-${themeName}`);

    // find the message in theme array
    const themeData = themes.find(t=> t.name === themeName);

    if(themeData){
        liveRegion.textContent = themeData.message;
    }
    // close the dropdown
    themeDropDown.hidden == true;
    themeSwitcher.setAttribute('aria-expanded', 'false');

    })

})