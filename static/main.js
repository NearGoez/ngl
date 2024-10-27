document.getElementById("boton").addEventListener("click", function(){
    fetch('/send_payload',
    {
        method: 'POST',
        body: JSON.stringify({ message : 'Hello from the client!'})
    })
    .then(response => {
        console.log('Response:', response)
    })
    .catch(error => {
        console.error('Error', error);
    });
});
