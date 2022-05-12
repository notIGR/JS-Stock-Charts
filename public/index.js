const main = async () => {
    const timeChartCanvas = document.querySelector("#time-chart");
    const highestPriceChartCanvas = document.querySelector("#highest-price-chart");
    const averagePriceChartCanvas = document.querySelector(  "#average-price-chart");

    const response = await fetch("https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=fea75586ff664876bc76e2f7556f6387");
    const data = await response.json()
    console.log(data)
    const {GME,MSFT,DIS,BNTX} = data;
    const stocks = [GME,MSFT,DIS,BNTX];
    stocks.forEach( stock => stock.values.reverse())

    new Chart(timeChartCanvas.getContext('2d'), {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:  'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)'
          }]
      }
  });
  };
  




main();
