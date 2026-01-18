const themes=[{
  name: "blue",
  message: "This is Blue theme",
},{
  name: "green",
  message: "Hello Hello, This us Blue"
}
]
const themeSwitcherButton = document.querySelector('#theme-switcher-button');
const themeDropDown = document.querySelector('#theme-dropdown');
themeSwitcherButton.addEventListener('click', ()=>{
    themeDropDown.hidden = !(themeDropDown.hidden)
})