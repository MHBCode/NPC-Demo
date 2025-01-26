
const ctx = document.getElementById('requestsChart').getContext('2d');
const data = {
  labels: [
    ' مفتوح ',
    ' تحت المراجعه ',
    ' اعيد للتعديل ',
    ' قيد اعداد الاتفاقيه',
    ' مغلق '
  ],
  datasets: [{
    label: 'عدد الطلبات',
    data: [7, 21, 14, 8, 12],
    backgroundColor: [
      '#8C0E0F', // Red
      '#1a5276', // Dark Blue
      '#2980b9', // Blue
      '#aed6f1',  // Dark Red
      '#d98880'  // Gold
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
        position: 'right', // Align the legend to the right

        rtl: true,
        labels: {
          usePointStyle: true, // Use circle markers instead of squares
          padding: 20, // Adjust padding between text and marker
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
