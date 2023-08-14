
const avatar = document.querySelector(".avatar")


const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".submit");
const nameOfUser = document.querySelector(".name");
const searchError = document.querySelector(".error");
const userLink = document.querySelector(".user-link");
const joinTime = document.querySelector(".time");
const bio = document.querySelector(".bio");
const repos = document.querySelector(".repos-number");
const followers = document.querySelector(".followers-number");
const following = document.querySelector(".following-number");

const place = document.querySelector(".place");
const placeP = document.querySelector(".location");

const webLink = document.querySelector(".web-link");
const website = document.querySelector(".website");

const twitter = document.querySelector(".twitter");
const twitterLink = document.querySelector(".twitter-link");

const company = document.querySelector(".company");
const companyLink = document.querySelector(".company-link");
 

searchButton.addEventListener("click", function(e){
    e.preventDefault();

    let search = searchInput.value;
    let username = search.split(" ").join("");
    const fetchUrl = "https://api.github.com/users/";
    console.log(search)
    
    fetch(fetchUrl + username )
    .then((response) => {
        if(!response.ok){
            throw new Error('failed to fetch data');
        }else{
            searchInput.style.border = "none";
        }
        return response.json()
    })
    .then(data =>{
        if(data.login == null){
            searchError.style.display = "flex";
            searchInput.setAttribute('placeholder', '');
        }else{
            searchError.style.display = "none";
            searchInput.setAttribute('placeholder', "Search GitHub username…");
        }
        if(data.name == null){
            nameOfUser.innerHTML = data.login;
        }else{
            nameOfUser.innerHTML = data.name;
        }
        userLink.innerHTML = '@' + data.login;
        let avatarlink = data.avatar_url;
        avatar.setAttribute("src", avatarlink);

        let time = data.created_at.split('-');
        let year = time[0]
        let month = time[1]
        let day = time[2].split("T")[0];
        let monthText;
        if(month == 01){
            monthText = "Jan"
        }else if(month == 02){
            monthText = "Feb"
        }else if(month == 03){
            monthText = "Mar"
        }else if(month == 04){
            monthText = "Apr"
        }else if(month == 05){
            monthText = "May"
        }else if(month == 06){
            monthText = "Jun"
        }else if(month == 07){
            monthText = "Jul"
        }else if(month == 08){
            monthText = "Aug"
        }else if(month == 09){
            monthText = "Sep"
        }else if(month == 10){
            monthText = "Oct"
        }else if(month == 11){
            monthText = "Nov"
        }else if(month == 12){
            monthText = "Dec"
        }
        joinTime.innerHTML = `Joined ${day} ${monthText} ${year}`
       
        if(data.bio == null){
            bio.innerHTML = "This profile has no bio";
        }else{
            bio.innerHTML = data.bio ;
        }

        repos.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;

        if(data.location == null){
            placeP.innerHTML = "Not Available"
            place.style.opacity = "0.5"
        }else{
            placeP.innerHTML = data.location
            place.style.opacity = "1"
        }


        if(data.html_url == null){
            website.innerHTML = "Not Available"
            webLink.style.opacity = "0.5"
        }else{
            website.innerHTML = data.html_url
            webLink.style.opacity = "1"
            website.setAttribute("href", data.html_url)
        }


        if(data.twitter_username == null){
            twitterLink.innerHTML = "Not Available"
        }else{
            twitterLink.innerHTML = data.twitter_username
            place.style.opacity = "1"
        }

        if(data.company == null){
            companyLink.innerHTML = "Not Available"
            company.style.opacity = "0.5"
        }else{
            companyLink.innerHTML = data.location
            company.style.opacity = "1"
        }
        searchInput.addEventListener("input", function(){
            if(searchError.style.display == "flex"){
                searchError.style.display = "none";
            }
        })

        console.log(data)
    })
    .catch(error =>{
        console.log(error)
    }
    )
})

