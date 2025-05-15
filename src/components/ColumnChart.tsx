import React, { useContext } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DarkModeContext } from '../context/DarkModeContext';

const ColumnChart: React.FC = () => {
    const isDarkMode = useContext(DarkModeContext);
    const textColor = isDarkMode ? '#ffffff' : '#000000';

  const colOptions: Highcharts.Options = {
    chart: {
        type: 'column',
        backgroundColor: isDarkMode ? '#010D19' : '#F7F8F9',
        style: {
          color: isDarkMode ?  'white' : 'black',
        },
      },
      title: {
        text: 'Revenue',
        style: {
          color: textColor,
        },
      },
      xAxis: {
        categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        labels: {
          style: {
            color: textColor,
          },
        },
      },
      colors:['#513CCE'],
      yAxis: {
        // categories:[],
        title :{
            text: ''
        },
        labels: {
          style: {
            color: textColor,
          },
        },
      },
      legend: {
        itemStyle: {
          color: textColor,
        },
      },
      plotOptions: {
        pie: {
          // allowPointSelect: true,
          borderRadius:0,
          // cursor: 'pointer',
          dataLabels: {
            enabled: true,
            // format: '{point.percentage:.1f}',
            // distance:-18,
            rotation:-90,
            y: 10,
            style:{
              fontSize:'13px',
              fontWeight:'500',
              color:'#ffffff'
            }
          }
        }
      },
      series :[
        {
            type:'column',
            name:'Revenue',
            data: [2394,5454,4343,3442,4554,1211,3232,4333,3232,1212,2222,4554],
            color:  isDarkMode ? '#8378FF' : '#513CCE',
            borderWidth:0,
            pointWidth:60
        }
      ]
  }
  return (
    <div className="min-w-[800px]">
      <HighchartsReact highcharts={Highcharts} options={colOptions} />
    </div>
  );
};

export default ColumnChart;
