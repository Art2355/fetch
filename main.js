let coments = document.querySelector('.coments')

async function getUsers() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments')
        let data = await res.json()
        data.forEach((item) => {
            let coment = document.createElement('div')
            coment.classList.add('coment')
            
            let name = document.createElement('h2')
            let body = document.createElement('p')
            let mail = document.createElement('a')
            
            name.textContent = item.name
            body.textContent = item.body
            mail.textContent = item.email
            mail.href = `mailto:${item.email}`
            
            coment.append(name, body, mail)
            coments.append(coment)
        })
    } catch (error) {
        console.log('Ошибка при выдачи данных');
    }
}

window.addEventListener('DOMContentLoaded', () => getUsers())