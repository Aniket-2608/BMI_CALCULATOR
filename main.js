

let button = document.getElementById('btn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('weight').value; 
    let height = document.getElementById('height').value; 
    // console.log(weight);
    // console.log(height);

    let final_bmi = (weight/(height*height) * 10000).toFixed(2);
    document.getElementById('bmi-output').value = final_bmi;
})