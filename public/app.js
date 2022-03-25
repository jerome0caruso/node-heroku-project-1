const input = document.getElementById('name');
const returnData = document.getElementById('return');
const btn = document.getElementById('btn');

btn.addEventListener('click', async() => {
    const data = await input.value;
    await fetch('http://localhost:5000/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: data})
    })
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
             returnData.innerText = resData.rData;
             input.value = "";
        })
})

