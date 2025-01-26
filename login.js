document.querySelector('#register').addEventListener('click', function() {
    const email = document.querySelector('#registerEmail').value;
    const name = document.querySelector('#registerName').value;
    const password = document.querySelector('#registerPassword').value;
    
    fetch('weatherapp-frontend-dun.vercel.app/users/signup/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, name, password})
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
            window.location.assign('index.html')
    })
})

document.querySelector('#connection').addEventListener('click', function() {
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;
    
    fetch('weatherapp-frontend-dun.vercel.app/users/signin/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
            window.location.assign('index.html')
    })
})