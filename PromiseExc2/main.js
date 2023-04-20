const usersList = document.querySelector(".users-list");
const getUsers = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        data.data.forEach(user => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            const span = document.createElement("span");
            span.textContent = `${user.first_name} ${user.last_name} - ${user.email}`;
            img.src = user.avatar;
            li.appendChild(img);
            li.appendChild(span);
            usersList.appendChild(li);
        });
    } catch (error) {
        console.log(error);
    }
};

getUsers()