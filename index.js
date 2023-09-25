document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const min = +document.querySelector('#min').value;
    const max = +document.querySelector('#max').value;

    if(max > min){
        document.querySelector('p').innerText = Math.floor(Math.random() * (max - min)) + min;
    }else{
        alert("Min is greater or equal to max");
        document.querySelector('#min').value = "";
        document.querySelector('#max').value = "";
    }
});