//function for data table

document.getElementById('weather').addEventListener('click', weather);
        function weather() {
            //table
            let output = `
    <h2 class ="text"> Weather data</h2>
<table class="table" id="table1">
    <tr>
        <th>Row number</th>
        <th> Date</th>
        <th> Time </th>
        <th>Measurment type</th>
        <th>Measured value</th>
    </tr>
    `;

//fetch data from api
        fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather")
                .then((res) => res.json())
                .then((data) => {
                    for (let i = 0; i < 30; i++) {
                        const NumberOfRows = i + 1;
                        const WeatherData = data[i];
                        let DateTime = WeatherData.ostopvm;
                        let date = DateTime.split("T");
                        console.log(date);
                        let time = date[1].slice(0, -1)

                        output += `
            <tr>
            <td>${NumberOfRows}</td>
            <td>${date[0]}</td>
            <td>${time}</td>
            <td>${Object.keys(WeatherData.data)}</td>
            <td>${Object.values(WeatherData.data)}</td>
        </tr >
        `;
                    }

                    output += '</table>';
                    document.getElementById('output').innerHTML = output;
                })

                .catch(err => console.log(err));

        }