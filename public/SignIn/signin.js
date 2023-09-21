const login = document.getElementById('login')
login.addEventListener('click', (event) => {
    // event.preventDefault()
    window.location.href = "./dashboard"
})

const register = document.getElementById('register')
register.addEventListener('click', () => {
    window.location.href = "./Register"
})