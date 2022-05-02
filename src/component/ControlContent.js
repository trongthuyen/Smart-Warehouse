import Icon from "./Icon";
import IconButton from "./IconButton";
import React, { useState } from "react";
import '../styles/Control.scss';

const data = [
  {
    id: 1,
    name: 'Light Control',
    image: 'https://svgshare.com/i/gnY.svg',
    proper1: 'Voltage',
    para1: '220V',
    proper2: 'Power',
    para2: '60W',
    proper3: 'Dimension(L*W*H)',
    para3: '20*20*6cm',
    proper4: 'Weight',
    para4: '0.36 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  },
  {
    id: 2,
    name: 'Cooler Control',
    image: 'https://svgshare.com/i/gob.svg',
    proper1: 'Voltage',
    para1: '220V',
    proper2: 'Airflow',
    para2: '3400-22000 m³/h',
    proper3: 'Fin Material',
    para3: 'Alumium foil',
    proper4: 'Weight',
    para4: '133 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  },
  {
    id: 3,
    name: 'Door Control',
    image: 'https://svgshare.com/i/gmz.svg',
    proper1: 'Temperature',
    para1: '-45 ~ 25',
    proper2: 'Material',
    para2: 'Polyurethane, Nonmetal',
    proper3: 'Characteristic',
    para3: 'Fire prevention',
    proper4: 'Weight',
    para4: '1 KG',
    proper5: 'Warranty',
    para5: '1 Year',
  }
]

function ControlContent({ onSidebarHide }) {
    return (
      <div className="flex w-full">
        <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
          .
        </div>
        <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
          <div className="w-full sm:flex p-2 items-end">
            <div className="sm:flex-grow flex justify-between">
              <div className="">
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-white">Hello Suong</div>
                  <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                    <Icon path="res-react-dash-premium-star" />
  
                    <div className="ml-2 font-bold text-premium-yellow">
                      PREMIUM
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon
                    path="res-react-dash-date-indicator"
                    className="w-3 h-3"
                  />
                  <div className="ml-2">May 4</div>
                </div>
              </div>
              <IconButton
                icon="https://assets.codepen.io/3685267/res-react-dash-sidebar-open.svg"
                className="block sm:hidden"
                onClick={onSidebarHide}
              />
            </div>
            <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
              <Icon
                path="res-react-dash-search"
                className="w-5 h-5 search-icon left-3 absolute"
              />
              <form action="#" method="POST">
                <input
                  type="text"
                  name="company_website"
                  id="company_website"
                  className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                  placeholder="search"
                />
              </form>
            </div>
          </div>
          {data.map(({id,name,image,proper1,para1,proper2,para2,proper3,para3,proper4,para4,proper5,para5}) => (
            <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card" style={{height: '37em'}}>
              <Control
                key = {id}
                id = {id}
                name = {name}
                image = {image}
                proper1 = {proper1}
                para1 = {para1}
                proper2 = {proper2}
                para2 = {para2}
                proper3 = {proper3}
                para3 = {para3}
                proper4 = {proper4}
                para4 = {para4}
                proper5 = {proper5}
                para5 = {para5}
                />
            </div>
          </div>
          ),
          )}
          
          
        </div>
      </div>
    );
}

export default ControlContent
  
  function Control({name, image, proper1, para1, proper2, para2, proper3, para3, proper4, para4, proper5, para5}) {
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">{name}</div>
          <ToggleSwitch />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center" style={{marginTop: '20px'}}>
          <img src={image} alt="" width={275} height={275}/>
        </div>
        <div
          className="font-bold"
          style={{ color: '#2f49d1', fontSize: '18px', marginTop: '20px', marginBottom: '5px' }}
        >Info</div>
        <div className="Info sidebar-separator-bottom">
          <table style={{marginTop: '10px'}}>
            <tr>
              <th className='name'>{proper1}:</th>
              <th className='para'>{para1}</th>
            </tr>
            <tr>
              <th className='name'>{proper2}: </th>  
              <th className='para'>{para2}</th>
            </tr>
            <tr>
              <th className='name'>{proper3}:</th>  
              <th className='para'>{para3}</th>
            </tr>
            <tr>
              <th className='name'>{proper4}: </th>
              <th className='para'>{para4}</th>
            </tr>  
            <tr>
              <th className='name'>{proper5}:</th>  
              <th className='para'>{para5}</th>
            </tr>
            {/* <tr>
              <th className='name'>Panel Thickness: </th> 
              <th className='para'>100mm</th>
            </tr>
            <tr>
              <th className='name'>Cooling Capacity: </th> 
              <th className='para'>50ton</th>
            </tr> */}
          </table>
        </div>
      </div>
      
    );
  }
  
  

  function ToggleSwitch() {
    const [checked, setChecked] = useState(false)
    
    const onToggleSwitchChange = () => {
      setChecked(!checked);
    }
    
    return (
      <div className='ToggleSwitch ToggleSwitch__rounded'>
        <div className='ToggleSwitch__wrapper'>
          <div className={`Slider ${checked && 'isChecked'}`} onClick={onToggleSwitchChange}></div>
        </div>
      </div>
    );
  }
  