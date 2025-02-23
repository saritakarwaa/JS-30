const search=document.getElementById('search')
const form=document.getElementById('form')
const main=document.getElementById('main')

form.addEventListener("submit",async function (event) {
    event.preventDefault()
    const username=search.value.trim()
    if(!username){
        alert("Enter a valid username");
        return;
    }
    const url=`https://api.github.com/users/${username}`
    try{
        const response=await fetch(url);
        if(!response){
            alert('user not found')
            return
        }
        const user=await response.json();
        console.log(user);
        dispalyUser(user)
    }
    catch(error){
        console.log(error);
    }
})

function dispalyUser(user){
    main.innerHTML=`
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
            <div class="user-info">
                <h2>${user.login}</h2>
                <p>${user.bio || "No bio available"}</p>
                <ul>
                    <li>Followers: ${user.followers}</li>
                    <li>Following: ${user.following}</li>
                    <li>Repos: ${user.public_repos}</li>
                </ul>
                <a href="${user.html_url}" target="_blank">View Profile</a>
            </div>
        </div>
    `
}


