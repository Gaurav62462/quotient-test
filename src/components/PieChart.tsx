import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DarkModeContext } from '../context/DarkModeContext';

const PieChart: React.FC = () => {
  const isDarkMode = useContext(DarkModeContext);

  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      backgroundColor: isDarkMode ? '#010D19' : '#F7F8F9',
      borderWidth:0
    },
    title: {
      text: '',
      style: {
        border:'0px'
      },
    },
    // tooltip: {
    //   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        // allowPointSelect: true,
        borderRadius:0,
        borderWidth:0,
        // cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f}',
          distance:-13,
          style:{
            fontSize:'10px',
            fontWeight:'400',
            color:'#ffffff',
            textOutline:'none',
          }
        }
      }
    },
    colors:['#F75D5F','#F7A23B','#FBC62F','#0FCA7A','#8378FF'],
    series: [
      {
        name: 'Activities',
        type: 'pie',
        innerSize:'70%',
        size:'100%',
        // colorByPoint: true,
        data: [
          { name: 'Messages', y: 45 },
          { name: 'eBay', y: 25 },
          { name: 'Amazon', y: 15 },
          { name: ' Walmart', y: 20 },
          { name: 'Facebook', y: 10 }
        ]
      }
    ]
  };

  return (
      <HighchartsReact style={{background:'red'}} highcharts={Highcharts} options={options} />
  );
};

export default PieChart;
