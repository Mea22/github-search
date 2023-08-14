let body = document.querySelector("body");
let header = document.querySelector("header")
let search = document.querySelector(".search-input");
let main = document.querySelector("main");
let themeButton = document.querySelector(".theme");
let themeName = document.querySelector(".theme-color");
let themeIconMoon = document.querySelector(".icon-moon");
let themeIconSun = document.querySelector(".icon-sun");
let avatarName = document.querySelector(".name");
let avatarTime = document.querySelector(".time");
let avatarBio = document.querySelector(".bio");
let followersBox = document.querySelector(".repo-followers-following");
let reposHeader = document.querySelector(".repos-header");
let reposNumber = document.querySelector(".repos-number");
let followersHeader = document.querySelector(".followers-header");
let followersNumber = document.querySelector(".followers-number");
let followingHeader = document.querySelector(".following-header");
let followingNumber = document.querySelector(".following-number");

let change = document.querySelectorAll(".change")
let imgFilters = document.querySelectorAll(".filter")

themeButton.addEventListener("click", function(){

    if(themeButton.classList == "theme active"){
        themeButton.classList = 'theme';
        
        body.style.background = "#141D2F";
        header.style.color = "#FFF";
        themeButton.style.background = "#141D2F";
        themeName.style.color = "#FFFFFF";
        themeName.innerHTML = "LIGHT";
        themeIconMoon.style.display = "none";
        themeIconSun.style.display = "flex";
        
        search.style.background = "#1E2A47";
        search.style.color = "#FFFFFF";
        search.setAttribute("placeholder", "Search GitHub username…" );
        search.classList = "search-input white";

        main.style.background = "#1E2A47";
        avatarName.style.color = "#FFF";
        avatarTime.style.color = "#FFF";
        avatarBio.style.color = "#FFF";
        followersBox.style.background = "#141D2F";

        reposHeader.style.color = "#FFF";
        reposNumber.style.color = "#FFF";
        followersHeader.style.color = "#FFF";
        followersNumber.style.color = "#FFF";
        followingHeader.style.color = "#FFF";
        followingNumber.style.color = "#FFF";

        change.forEach(function(color){
            color.style.color = "#FFF";
        });

        imgFilters.forEach(function(filter){
            filter.style.filter = "invert(100%) sepia(20%) saturate(0%) hue-rotate(206deg) brightness(111%) contrast(100%)"
        });

        themeButton.addEventListener("mouseover", ()=>{
            themeName.style.color = "#697c9a";
        
        });
        themeButton.addEventListener("mouseout", ()=>{
            themeName.style.color = "#FFFFFF";
        
        });
    
    }else if(themeButton.classList == "theme"){
        themeButton.classList = "theme active";



        body.style.background = "#F6F8FF";
        header.style.color = "#222731";
        themeButton.style.background = "#F6F8FF";
        themeName.style.color = "#697C9A";
        themeName.innerHTML = "DARK";
        themeIconMoon.style.display = "flex";
        themeIconSun.style.display = "none";
        
        search.style.background = "#FEFEFE";
        search.style.color = "#222731";
        search.setAttribute("placeholder", "Search GitHub username…" );
        search.classList = "search-input";

        main.style.background = "#FEFEFE";
        avatarName.style.color = "#2B3442";
        avatarTime.style.color = "#697C9A";
        avatarBio.style.color = "#697C9A";
        followersBox.style.background = "#F6F8FF";

        reposHeader.style.color = "#4B6A9B";
        reposNumber.style.color = "#2B3442";
        followersHeader.style.color = "#4B6A9B";
        followersNumber.style.color = "#2B3442";
        followingHeader.style.color = "#4B6A9B";
        followingNumber.style.color = "#2B3442";
        change.forEach(function(color){
            color.style.color = "unset";
        });

        imgFilters.forEach(function(filter){
            filter.style.filter = "unset"
        });
        
        themeButton.addEventListener("mouseover", ()=>{
            themeName.style.color = "#222731";
        
        });
        themeButton.addEventListener("mouseout", ()=>{
            themeName.style.color = "#697C9A";
        
        });
    }
    
})
