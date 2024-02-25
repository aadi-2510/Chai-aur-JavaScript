 const form = document.querySelector('form');
 // this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

 form.addEventListener('submit' , function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please write a correct no. ${height}`;
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please write a correct no. ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
        
        //Suppose i have to display that result value comes under underweight ,normal or over.
        // if(bmi < 185){
        //     results.innerHTML = 'UnderWeight'
        //   };
        //   if(bmi <= 185 || bmi < 249){
        //     results.innerHTML = 'Normal Range'
        //   };
        //   if(bmi >= 249){
        //     results.innerHTML = 'Overweight'
        //   };
    }
 });

 /*
 if(bmi<18.6){
        results.innerHTML=`<span>Under weigth :${bmi}</span>`;
        }else if(bmi>18.6 && bmi<24.9){
            results.textContent=`Normal Weight:${bmi}`;
        }else{
            results.textContent=`Over Weight : ${bmi}`
        }
 */