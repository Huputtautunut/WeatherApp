const xlabels = [];
const yHumidity=[];
//function for chart

function chartIt() {
  

    
    document.getElementById("myChart").remove(); // this is my <canvas> element
    document.getElementById("chartContainer").append('<canvas id="myChart"width="100" height="50"></canvas>');

    document.getElementById("chartContainer").innerHTML =`<canvas id="myChart"width="100" height="50"></canvas>`;
    //

    const ctx = document.getElementById('myChart').getContext('2d');
    
    const humChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlabels,
            datasets: [{
                label: 'Humidity inside',
                data: yHumidity,
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


document.getElementById('Humidity_inside').addEventListener('click', Humidity_inside);


//function for data table
        function Humidity_inside() {
           
            //table
            let View3 = `
    <h2 class ="text"> Humidity inside data</h2>
<table class="table" id="table3">
    <tr>
        <th>Row number</th>
        <th> Date</th>
        <th> Time </th>
        <th>Measured value</th>
    </tr>
    `;
//fetch data from api
            fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/humidity_in")
                .then((res) => res.json())
                .then((humidity_in) => {
                    for (let i = 0; i < 20; i++) {
                        const NumberOfRows = i + 1;
                        const WeatherData = humidity_in[i];
                        let DateTime = WeatherData.date_time;
                        let date = DateTime.split("T");
                        let time = date[1].slice(0, -1)

                        //x and y axels for chart
                        xlabels.push(time);
                        yHumidity.push(humidity_in[i].humidity_in);

                        // console.log("aika "+time, "humidity "+humidity_in[i].humidity_in);

                        View3 += `
            <tr>
            <td>${NumberOfRows}</td>
            <td>${date[0]}</td>
            <td>${time}</td>
            <td>${WeatherData.humidity_in}</td>
        </tr >
        `;
                    }

                    View3 += '</table3>';
                    document.getElementById('View3').innerHTML = View3;
                     //call chart
            chartIt()
           
                })

                .catch(err => console.log(err));
            
            
        }