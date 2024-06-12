const form = document.getElementById('form');

form.addEventListener('Submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if (imc <18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal!';
    } else if (imc > 25 && imc <= 30) {
        description = 'Cuidado! Você esta com sobrepeso!';
    } else if (imc > 30 && imc <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (imc > 35 && imc <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
    } else {
        description = 'Cuidado! Você está com obesidade morbida!';
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;
});