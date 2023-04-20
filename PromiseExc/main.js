const getUser = async () => {
    try {
    const response = await fetch ('https://randomuser.me/api/')
    const data = await response.json()
    const user = data.results[0]

    const userContainer = document.querySelector('.user-container');
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    
    const userAvatar = document.createElement('img');
    userAvatar.classList.add('user-avatar');
    userAvatar.src = user.picture.thumbnail;
    userCard.appendChild(userAvatar);
    
    const userInfo = document.createElement('div');
    const userName = document.createElement('div');
    userName.classList.add('user-name');
    userName.textContent = `${user.name.first} ${user.name.last}`;
    userInfo.appendChild(userName);
    
    const userEmail = document.createElement('div');
    userEmail.classList.add('user-email');
    userEmail.textContent = user.email;
    userInfo.appendChild(userEmail);
    
    userCard.appendChild(userInfo);
    userContainer.appendChild(userCard);

    } catch (error) {
        console.log(error)
    }
}

getUser()

