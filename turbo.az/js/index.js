//BMW
document.getElementById('carSelect').addEventListener('click', function () {
    var bmwSelect = document.getElementById('bmw');
    var bmwOption = document.getElementById('bmwSelection');

    if (this.value === bmwOption.value) {
        bmwSelect.style.display = 'block';
    } 
    else {
        bmwSelect.style.display = 'none';
    }
});

// Audi
document.getElementById('carSelect').addEventListener('click', function () {
    var audiSelect = document.getElementById('audi');
    var audiOption = document.getElementById('audiSelection');

    if (this.value === audiOption.value) {
        audiSelect.style.display = 'block';
    } 
    else {
        audiSelect.style.display = 'none';
    }
});

//Mercedes
document.getElementById('carSelect').addEventListener('click', function () {
    var mercSelect = document.getElementById('merc');
    var mercOption = document.getElementById('mercSelection');

    if (this.value === mercOption.value) {
        mercSelect.style.display = 'block';
    } 
    else {
        mercSelect.style.display = 'none';
    }
});

//Volvo
document.getElementById('carSelect').addEventListener('click', function () {
    var volvoSelect = document.getElementById('volvo');
    var volvoOption = document.getElementById('volvoSelection');

    if (this.value === volvoOption.value) {
        volvoSelect.style.display = 'block';
    } 
    else {
        volvoSelect.style.display = 'none';
    }
});


document.getElementById('bmw').addEventListener('click', function () {
    var m3Select = document.getElementById('m3Models');
    var m3Option = document.getElementById('M3');

    if (this.value === m3Option.value) {
        m3Select.style.display = 'flex';
    } 
    else {
        m3Select.style.display = 'none';
    }
});


document.getElementById('audi').addEventListener('click', function () {
    var q3Select = document.getElementById('m3Models');
    var q3Option = document.getElementById('Q3');

    if (this.value === q3Option.value) {
        q3Select.style.display = 'flex';
    } 
    else {
        q3Select.style.display = 'none';
    }
});


