document.querySelector('form').addEventListener('submit',function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    const cartype = document.getElementById('cartype').value;
    const duration = document.getElementById('duration').value;
    const errors = []

    if (name ===''){
        errors.push('Full Name  required');
    }
    const phonePattern = /^[0-9]{10}$/;  
    if (!phone.match(phonePattern)) {  
        errors.push('Phone number must be 10 digits');  
    }
    if (age < 18) {
        errors.push('You must be at least 18 years old to make a reservation.');
    }
    if (errors.length > 0) {
        alert(errors.join('\n'));  
    } 
    document.getElementById('name-display').textContent = name;
    document.getElementById('phone-display').textContent = phone;
    document.getElementById('cartype-display').textContent = cartype;
    document.getElementById('duration-display').textContent = duration;
    document.getElementById('confirmation').style.display = 'block';

    
    document.querySelector('form').reset();

});



function saveReservation() {
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const cartype = document.getElementById('cartype').value;
    const duration = document.getElementById('duration').value;

    
    const reservation = {
        name: name,
        phone: phone,
        cartype: cartype,
        duration: duration
    };

    
    localStorage.setItem('reservation', JSON.stringify(reservation));
    localStorage.setItem('showConfirmation', 'true');
}

window.onload = function() {
    const reservation = JSON.parse(localStorage.getItem('reservation'));
    if (reservation && localStorage.getItem('showConfirmation') === 'true') {
        
        document.getElementById('name-display').textContent = reservation.name;
        document.getElementById('phone-display').textContent = reservation.phone;
        document.getElementById('cartype-display').textContent = reservation.cartype;
        document.getElementById('duration-display').textContent = reservation.duration;
    

document.getElementById('confirmation').style.display = 'block';
localStorage.removeItem('showConfirmation');
} else {
    document.getElementById('confirmation').style.display = 'none';
 }
};





















  