import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChart = (props) => {
  return <Bar data={props.data} options={props.options ? props.options : {}} />;
};

export default BarChart;
