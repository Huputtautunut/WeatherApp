const xlabelsTemp = [];
const yTemp = [];
var myChart;


//chart function
function chartTemp() {
    // Destroys a specific chart instance
    document.getElementById("chartContainer").innerHTML = `<canvas id="myChart"width="100" height="50"></canvas>`;
    const ctx = document.getElementById('myChart').getContext('2d');

    tempChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabelsTemp,
            datasets: [{
                label: 'Temperature',
                data: yTemp,
                borderWidth: 1,
                backgroundColor: [
                    'rgba(82, 120, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(82, 120, 255, 1)',
                ],
            }]
        },
    });
}

document.getElementById('Temperature').addEventListener('click', Temperature);

//function for data table
function Temperature() {
  

    //table
    let view2 = `
    <h2 class ="text"> Temperature data</h2>
<table class="table" id="table1">
    <tr>
        <th>Row number</th>
        <th> Date</th>
        <th> Time </th>
        <th>Measured value</th>
    </tr>
    `;
    //fetch data from api

    fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
        .then((res) => res.json())
        .then((temperature) => {
            for (let i = 0; i < 20; i++) {
                const NumberOfRows = i + 1;
                const WeatherData = temperature[i];
                let DateTime = WeatherData.date_time;
                date = DateTime.split("T");
                let time = date[1].slice(0, -1)

                // x and y axel for chart
                xlabelsTemp.push(time);
                yTemp.push(temperature[i].temperature);

                // console.log("temp[i]" + temperature[i].temperature, "weatherdata" + WeatherData.temperature)

                view2 += `
            <tr>
            <td>${NumberOfRows}</td>
            <td>${date[0]}</td>
            <td>${time}</td>
            <td>${WeatherData.temperature}</td>
        </tr >
        `;
            }
            //call chart

                chartTemp()
           
            view2 += '</table>';
            document.getElementById('view2').innerHTML = view2;
        })


        .catch(err => console.log(err));

}