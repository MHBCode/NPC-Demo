
const ctx = document.getElementById('requestsChart').getContext('2d');
const data = {
  labels: [
    ' Draft ',
    ' In progress ',
    ' Accepted ',
    ' Rejected '
  ],
  datasets: [{
    label: 'عدد الطلبات',
    data: [1, 1, 0, 0, 0],
    backgroundColor: [
      '#c0c0c0', // Red
      '#1a5276', // Dark Blue
      '#2980b9', // Blue
      '#aed6f1',  // Dark Red
    ],
    hoverOffset: 4,
    borderWidth: 0
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    cutout: '65%', // Adjust thickness
    plugins: {
      legend: {
        position: 'left', // Align the legend to the right

        rtl: false,
        labels: {
          usePointStyle: true, // Use circle markers instead of squares
          padding: 10, // Adjust padding between text and marker
          font: {
            family: "Verdana, Geneva, Tahoma, sans-serif", // Arabic-friendly font
            size: 14
          }
        }
      }
    }
  }
};

new Chart(ctx, config);
