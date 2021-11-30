// Get random user info for claim customer

function getRandomClaimNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateClaimData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
       let result = '<h2>Current Claim Assignments</h2>';
       data.forEach(function (claimCustomer) {
         result += `
         <div>
           <h3>#${getRandomClaimNum(1000000, 1999999)}</h3>
           <p>${claimCustomer.name}</p>
           <p>${claimCustomer.email}</p>
           <p>${claimCustomer.phone}</p>
         </div>
         `;
       });
       document.getElementById('result').innerHTML = result;
    })    
  };

generateClaimData();


/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020'
      ],
      datasets: [{
        data: [
          8.732,
          9.028,
          10.835,
          12.894,
          15.396,
          16.506,
          17.667,
          20.022,
          20.112,
          17.567,
          18.149
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ff0000',
        borderWidth: 4,
        pointBackgroundColor: '#ff0000'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Total RV Retail Value (in Billions)',
      }
    }
  }
  
  )  

})()





