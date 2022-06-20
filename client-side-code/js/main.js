document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rapr-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#age').innerText = data.age
        document.querySelector('#nickname').innerText = data.nickname
        document.querySelector('#president').innerText = data.president
        document.querySelector('#stadium').innerText = data.stadium
        document.querySelector('#headCoach').innerText = data['head coach']

    }catch(error){
        console.log(error)
    }
}