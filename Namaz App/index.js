var selectMonth = document.getElementById("selectMonth");
var selectCity = document.getElementById("selectCity");
var showTimeBtn = document.getElementById("timeBtn");

showTimeBtn.addEventListener("click", function () {
    fetch(`https://api.aladhan.com/v1/calendarByCity/2023/${selectMonth.value}?city=${selectCity.value}&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {

            var result = ""
            json.data.forEach(element => {
                result += `
                    <th >${element.date.readable}</th>
                    <td>${element.timings.Fajr}</td>
                    <td>${element.timings.Sunrise}</td>
                    <td>${element.timings.Dhuhr}</td>
                    <td>${element.timings.Asr}</td>
                    <td>${element.timings.Sunset}</td>
                    <td>${element.timings.Isha}</td>
            `
            });
            document.querySelector("table tbody").innerHTML = result


        })
})

