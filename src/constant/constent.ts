import exp from "constants";

  export const textIcon = [
    {text:'Email', iconName:'msg.svg', isDarkIcon:'dark-msg.svg'},
    {text:'Call', iconName:'phone.svg', isDarkIcon:'dark-call.svg'},
    {text:'Message', iconName:'chat.svg', isDarkIcon:'dark-chat.svg'},
    {text:'Calender', iconName:'calendar.svg', isDarkIcon:'dark-time.svg'}
  ]

  export const tabs = [
      { label: 'Dashboard', value: 'dashboard' },
      { label: 'Orders', value: 'orders' },
      { label: 'Address', value: 'address' },
      { label: 'Notes', value: 'notes' },
      { label: 'Tasks', value: 'tasks' },
      { label: 'Contacts', value: 'contacts' },
      { label: 'Credit History', value: 'creditHistory' }
  ]

  export const orderData = [
    {value:'123', icon:'shop.svg',upDown:'28' , time:'Last Month',label:'Total Orders', isLow:false},
    {value:'123', icon:'care.svg',upDown:'15' , time:'Last Month',label:'Total Taken', isLow:true},
    {value:'$1234.99', icon:'db.svg',upDown:'23' , time:'Last Month',label:'Total Revenue', isLow:true},
    {value:'$1234.99', icon:'timer.svg',upDown:'28' , time:'Last Month',label:'Pending Orders', isLow:false},
    {value:'$1234.99', icon:'refresh.svg',upDown:'28' , time:'Last Month',label:'Pending Returns', isLow:true},
  ]

  export const orderSatatus = [
    {icon:'window.svg', label:'All', value:'50'},
    {icon:'congrats.svg', label:'New', value:'50'},
    {icon:'stopwatch_fill.svg', label:'Pending', value:'50'},
    {icon:'car.svg', label:'Dispatched', value:'50'},
    {icon:'tick.svg', label:'Delivered', value:'123'},
    {icon:'dot-back.svg', label:'Cancelled', value:'50'},
  ]

 export const recentActivitie = {
    'Today': [
      { iconColor: 'bg-orange-500', user: 'Christian Wood', action: 'Sent Message to', target: 'Nikita Houston', time: '1 min ago',isRply:false },
      { iconColor: 'bg-gray-400', user: 'Rohan Walker', action: 'Replay your message', target: 'Ebay', time: '1 min ago',isRply:true },
      { iconColor: 'bg-[#D56574]', user: 'Rohan Walker', action: 'Replay your message', target: 'Ebay', time: '1 min ago',isRply:false },
    ],
    'YESTERDAY': [
      { iconColor: 'bg-[#8E57E1]', user: 'Christian Wood', action: 'Sent Message to', target: 'Nikita Houston', time: '1 min ago',isRply:false },
      { iconColor: 'bg-gray-400', user: 'Rohan Walker', action: 'Replay your message', target: 'Ebay', time: '1 min ago',isRply:true },
      { iconColor: 'bg-gray-400', user: 'Rohan Walker', action: 'Replay your message', target: 'Ebay', time: '1 min ago',isRply:true },
    ],
    '25 MAY 2024': [
      { iconColor: 'bg-gray-400', user: 'Rohan Walker', action: 'Replay your message', target: 'Ebay', time: '1 min ago',isRply:false },
    ],
};

export const tableRow = [
  {id:'23423',product:'iPhone 15 pro max', pImg:'i-phone.svg', customer:'ebay.svg',channel:'Gabriella Golden', cImg:'user.svg', total:'$ 400.00',date:'Today'},
  {id:'43434',product:'White Danim Tshit M Size', pImg:'i-phone.svg', customer:'walmart.svg',channel:'Harris Santana',cImg:'user.svg',total:'$ 677.00',date:'Today'},
  {id:'23535',product:'David Beckham classic Blue Perfume', pImg:'i-phone.svg', customer:'ebay.svg',channel:'Lilia Ponce',cImg:'user.svg',total:'$ 656.00',date:'Tomorrow'},
  {id:'12123',product:'Samsung i-20 series smart watch',  pImg:'i-phone.svg',customer:'walmart.svg',channel:'Gabriella Golden',cImg:'user.svg',total:'$ 345.00',date:'Today'},
  {id:'57676',product:'Nykaa Red lipstick',  pImg:'i-phone.svg',customer:'ebay.svg',channel:'Maxim Bray',cImg:'user.svg',total:'$ 232.00',date:'05/01/2023'},
]

export const tableHead = [
  'ORDER ID','PRODUCTS', 'CUSTOMER','CHANNEL','TOTAL','DELIVERY DATE',
]