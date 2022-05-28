import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
import { useSpring, animated, config } from 'react-spring';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, } from "recharts";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Image from "./Image";
import Gas from "./Gas";
import "../styles/Content.scss";
import { useState } from "react";

const map = (value, sMin, sMax, dMin, dMax) => {
  return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};
const pi = Math.PI;
const tau = 2 * pi;
const lightOffset = 10.00;
const humidityOffset = 84.00;
const tempOffset = 25;
const emit = false;

const equipmentData = [
  {
    id: 1,
    name: 'Light',
    position: "Cold Storage LED Light 20W",
    ages: 5,
    rise: true,
    mode: true,
    imgId: "https://svgshare.com/i/gj3.svg",
  },

  {
    id: 2,
    name: 'Cooler',
    position: "Italy LUVE Unit Cooler",
    ages: +10,
    rise: false,
    mode: true,
    imgId: "https://svgshare.com/i/ggx.svg",
  },

  {
    id: 3,
    name: 'Door',
    position: "Insulated Panel Door",
    ages: 7,
    rise: true,
    mode: true,
    imgId: "https://svgshare.com/i/gis.svg",
  },
];

const hourlyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

const dailyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

const monthlyData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const temper = 10 + Math.random() * 20;
  const humid = 30 + Math.random() * 70;
  return {
    name: i,
    temper,
    humid,
    amt: Math.floor(Math.random() * 10),
  };
});

function Content({ onSidebarHide }) {
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
          <div className="w-full p-2 lg:w-1/4">
            <div className="rounded-lg bg-card h-80">
              <CurrentTemp offset={(tempOffset+15)*100/50}/>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4">
            <div className="rounded-lg bg-card h-80">
              <Humidity offset = {humidityOffset}/>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4">
            <div className="rounded-lg bg-card h-80">
              <Light offset = {lightOffset}/>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/4">
            <div className="rounded-lg bg-card h-80">
              <Gas emit={emit}/>
            </div>
          </div>
          {equipmentData.map(
            ({
              id,
              name,
              position,
              ages,
              rise,
              mode,
              imgId,
            }) => (
              <NameCard
                key={id}
                id={id}
                name={name}
                position={position}
                age={ages}
                rise={rise}
                mode={mode}
                imgId={imgId}
              />
            ),
          )}
          
          <div className="w-full p-2 lg:w-2/3">
            <div className="rounded-lg bg-card sm:h-100 h-100">
              <Tabs />
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card overflow-hidden">
              <AddComponent />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Content

function NameCard({
    name,
    position,
    age,
    rise,
    mode,
    imgId,
  }) {
    return (
      <div className="w-full p-2 lg:w-1/3">
        <div className="rounded-lg bg-card flex justify-between p-3 h-32">
          <div className="">
            <div className="flex items-center">
              <Image path={`${imgId}`} className="w-10 h-10" />
              <div className="ml-2">
                <div className="flex items-center">
                  <div className="mr-2 font-bold text-white">{name}</div>
                  <Icon path="res-react-dash-tick" />
                </div>
                <div className="text-sm ">{position}</div>
              </div>
            </div>
  
            <div className="text-sm  mt-2">{`Mode: Turn ${mode ? "on" : "off"}`}</div>
            <svg
              className="w-44 mt-3"
              height="6"
              viewBox="0 0 200 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="6" rx="3" fill="#2D2D2D" />
              <animated.rect
                width={mode ? 200 : 0}
                height="6"
                rx="3"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#8E76EF" />
                  <stop offset="1" stopColor="#3912D2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Info
            name={name}
            rise={rise}
            age={age}/>
        </div>
      </div>
    );
  }

  function Info({name, rise, age}) {
    if (name !== "Cooler") {
      return (
        <div className="flex flex-col items-center">
            <Image
              path={rise ? 'https://svgshare.com/i/gjD.svg' : 'https://svgshare.com/i/giK.svg'}
              className="w-8 h-8"
            />
            <animated.div
              className={clsx(
                rise ? 'text-green-500' : 'text-red-500',
                'font-bold',
                'text-lg',
              )}
            >
              {`${ age } years`}
            </animated.div>
            <div className="text-sm ">Last 6 month</div>
          </div>
      )
    } else {
      return (
        <div className="flex flex-col items-center">
            <animated.div
              className={clsx(
                'font-bold',
              )}
              id="degC"
            >
              {`${ age }`}
              <div className="text-sm inline" id="sym">&deg;C</div>
            </animated.div>
            
          </div>
      )
    }
  };

  function Tabs() {
    const [toggleState, setToggleState] = useState(1);
  
    return (
      <div className="containe">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(1)}
          >
            Hourly
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(2)}
          >
            Daily
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(3)}
          >
            Monthly
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <GraphHourly graphData={hourlyData}/>
          </div>
  
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <GraphDaily graphData={dailyData}/>
          </div>

          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <GraphMonthly graphData={monthlyData}/>
          </div>
        </div>
      </div>
    );
  }

  function GraphHourly({graphData}) {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="rounded-xl overflow-hidden tooltip-head">
            <div className="flex items-center justify-between p-2">
              <div className="">Hourly</div>
              <Icon path="res-react-dash-options" className="w-2 h-2" />
            </div>
            <div className="tooltip-body text-center p-3">
              <div className="text-white font-bold">{`${ label }`}</div>
              <div className="hum">Humidity is {`${payload[0].value.toFixed(2)}` } %</div>
              <div className="temp">Temporature is {`${payload[1].value.toFixed(2)}` } &deg;C = {`${(payload[1].value * 9 / 5 + 32).toFixed(2)}` } &deg;F</div>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="flex p-4 h-full flex-col">
        <div className="">
          <div className="flex items-center">
            <div className="font-bold text-white">Temporature (&deg;C) & Humidity (%)</div>
            <div className="flex-grow" />
  
            <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
            <div className="ml-2">Last 9 Months</div>
            <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
              ?
            </div>
          </div>
          <div className="font-bold ml-5">Nov - July</div>
        </div>
  
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={graphData}>
              <defs>
                <linearGradient id="paint1_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8fa3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#590d22" stopOpacity="1" />
                </linearGradient>
              </defs>
              <CartesianGrid
                horizontal={false}
                strokeWidth="6"
                stroke="#252525"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={10} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Legend/>
              <Line
                type="category"
                dataKey="humid"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                dot={false}
              />
              <Line
                type="category"
                dataKey="temper"
                stroke="url(#paint1_linear)"
                strokeWidth="4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  function GraphDaily({graphData}) {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="rounded-xl overflow-hidden tooltip-head">
            <div className="flex items-center justify-between p-2">
              <div className="">Daily</div>
              <Icon path="res-react-dash-options" className="w-2 h-2" />
            </div>
            <div className="tooltip-body text-center p-3">
              <div className="text-white font-bold">{`${ label }`}</div>
              <div className="hum">Humidity is {`${payload[0].value.toFixed(2)}` } %</div>
              <div className="temp">Temporature is {`${payload[1].value.toFixed(2)}` } &deg;C = {`${(payload[1].value * 9 / 5 + 32).toFixed(2)}` } &deg;F</div>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="flex p-4 h-full flex-col">
        <div className="">
          <div className="flex items-center">
            <div className="font-bold text-white">Temporature (&deg;C) & Humidity (%)</div>
            <div className="flex-grow" />
  
            <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
            <div className="ml-2">Last 9 Months</div>
            <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
              ?
            </div>
          </div>
          <div className="font-bold ml-5">Nov - July</div>
        </div>
  
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <div>
            <LineChart width={794} height={275} data={graphData}>
              <defs>
                <linearGradient id="paint2_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8fa3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#590d22" stopOpacity="1" />
                </linearGradient>
              </defs>
              <CartesianGrid
                horizontal={false}
                strokeWidth="6"
                stroke="#252525"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={10} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Legend/>
              <Line
                type="category"
                dataKey="humid"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                dot={false}
              />
              <Line
                type="category"
                dataKey="temper"
                stroke="url(#paint2_linear)"
                strokeWidth="4"
                dot={false}
              />
            </LineChart>
            </div>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  function GraphMonthly({graphData}) {
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="rounded-xl overflow-hidden tooltip-head">
            <div className="flex items-center justify-between p-2">
              <div className="">Monthly</div>
              <Icon path="res-react-dash-options" className="w-2 h-2" />
            </div>
            <div className="tooltip-body text-center p-3">
              <div className="text-white font-bold">{`${ label }`}</div>
              <div className="hum">Humidity is {`${payload[0].value.toFixed(2)}` } %</div>
              <div className="temp">Temporature is {`${payload[1].value.toFixed(2)}` } &deg;C = {`${(payload[1].value * 9 / 5 + 32).toFixed(2)}` } &deg;F</div>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="flex p-4 h-full flex-col">
        <div className="">
          <div className="flex items-center">
            <div className="font-bold text-white">Temporature (&deg;C) & Humidity (%)</div>
            <div className="flex-grow" />
  
            <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
            <div className="ml-2">Last 9 Months</div>
            <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
              ?
            </div>
          </div>
          <div className="font-bold ml-5">Nov - July</div>
        </div>
  
        <div className="flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <div>
            <LineChart width={794} height={275} data={graphData}>
              <defs>
                <linearGradient id="paint3_linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff8fa3" stopOpacity="1" />
                  <stop offset="100%" stopColor="#590d22" stopOpacity="1" />
                </linearGradient>
              </defs>
              <CartesianGrid
                horizontal={false}
                strokeWidth="6"
                stroke="#252525"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis axisLine={false} tickLine={false} tickMargin={10} />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Legend/>
              <Line
                type="category"
                dataKey="humid"
                stroke="url(#paint0_linear)"
                strokeWidth="4"
                dot={false}
              />
              <Line
                type="category"
                dataKey="temper"
                stroke="url(#paint3_linear)"
                strokeWidth="4"
                dot={false}
              />
            </LineChart>
            </div>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  function Humidity({offset}) {
    const { dashOffset, dashPath } = useSpring({
      dashOffset: offset,
      from: { dashOffset: offset, dashPath: 1000 },
      config: config.molasses,
    });
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Humidity</div>
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center">
          <svg
            viewBox="0 0 700 380"
            fill="none"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
          >
            <path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2d2d2d"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <animated.path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2f49d0"
              strokeWidth="40"
              strokeLinecap="round"
              strokeDasharray={1000 + 80*offset/10}
              strokeDashoffset={dashPath}
              id="svgPath"
              className="svgPath"
            />
  
            <animated.circle
              cx={dashOffset.to(
                (x) => 350 + 250 * (-1) * Math.cos(map(x, 100, 0, pi, tau)),
              )}
              cy={dashOffset.to(
                (x) => 350 + 250 * Math.sin(map(x, 100, 0, pi, tau)),
              )}
              r="12"
              fill="#fff"
            />
            <circle cx="140" cy="350" r="5" fill="#2f49d0" />
            <circle
              cx="144.5890038459008"
              cy="306.3385449282706"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="158.15545389505382"
              cy="264.58530495408195"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="180.10643118126103"
              cy="226.56509701858067"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="209.48257266463972"
              cy="193.93958664974724"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="244.9999999999999"
              cy="168.1346652052679"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="285.10643118126103"
              cy="150.27813157801776"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="328.0490227137926"
              cy="141.15040197266262"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="371.95097728620715"
              cy="141.1504019726626"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="414.8935688187389"
              cy="150.27813157801774"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="454.9999999999999"
              cy="168.1346652052678"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="490.51742733536014"
              cy="193.93958664974713"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="519.8935688187389"
              cy="226.5650970185806"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="541.8445461049462"
              cy="264.58530495408183"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="555.4109961540992"
              cy="306.33854492827044"
              r="5"
              fill="#2f49d0"
            />
            <circle cx="560" cy="349.99999999999994" r="5" fill="#2f49d0" />
            <path
              d="M349.292 375C395.845 375 433.583 337.261 433.583 290.708C433.583 244.155 395.845 206.417 349.292 206.417C302.739 206.417 265 244.155 265 290.708C265 337.261 302.739 375 349.292 375Z"
              fill="white"
            />
            <path
              d="M349.292 358.708C386.847 358.708 417.292 328.264 417.292 290.708C417.292 253.153 386.847 222.708 349.292 222.708C311.736 222.708 281.292 253.153 281.292 290.708C281.292 328.264 311.736 358.708 349.292 358.708Z"
              fill="#D2D6E7"
            />
            <path
              d="M347.167 343.833C376.898 343.833 401 319.731 401 290C401 260.269 376.898 236.167 347.167 236.167C317.435 236.167 293.333 260.269 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833Z"
              fill="#FFE17D"
            />
            <path
              d="M347.167 316.482C339.696 316.482 332.608 313.623 328.204 308.835C327.391 307.953 327.449 306.58 328.331 305.768C329.213 304.956 330.588 305.013 331.399 305.896C334.996 309.807 340.89 312.141 347.167 312.141C353.443 312.141 359.338 309.807 362.935 305.896C363.745 305.013 365.121 304.956 366.003 305.768C366.885 306.58 366.942 307.953 366.13 308.835C361.725 313.623 354.637 316.482 347.167 316.482Z"
              fill="#AA7346"
            />
            <path
              d="M328.933 290C326.535 290 324.592 288.056 324.592 285.659V282.186C324.592 279.788 326.535 277.844 328.933 277.844C331.33 277.844 333.274 279.788 333.274 282.186V285.659C333.274 288.056 331.33 290 328.933 290Z"
              fill="#7D5046"
            />
            <path
              d="M328.933 277.844C328.635 277.844 328.345 277.875 328.064 277.932V283.922C328.064 285.361 329.231 286.527 330.669 286.527C332.108 286.527 333.274 285.361 333.274 283.922V282.186C333.274 279.788 331.331 277.844 328.933 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M365.401 290C363.003 290 361.059 288.056 361.059 285.659V282.186C361.059 279.788 363.003 277.844 365.401 277.844C367.798 277.844 369.742 279.788 369.742 282.186V285.659C369.742 288.056 367.798 290 365.401 290Z"
              fill="#7D5046"
            />
            <path
              d="M365.401 277.844C365.103 277.844 364.813 277.875 364.532 277.932V283.922C364.532 285.361 365.699 286.527 367.137 286.527C368.576 286.527 369.742 285.361 369.742 283.922V282.186C369.742 279.788 367.798 277.844 365.401 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M354.981 336.019C325.25 336.019 301.148 311.917 301.148 282.186C301.148 269.31 305.673 257.496 313.213 248.232C301.085 258.103 293.333 273.144 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833C364.023 343.833 379.064 336.081 388.935 323.953C379.671 331.493 367.857 336.019 354.981 336.019Z"
              fill="#FFD164"
            />
          </svg>
        </div>
  
        <div className="flex justify-center">
          <div className="flex justify-between mt-2" style={{ width: '300px' }}>
            <div className="" style={{ width: '50px', paddingLeft: '16px' }}>
              0%
            </div>
            <div
              className=""
              style={{
                width: '150px',
                textAlign: 'center',
              }}
            >
              <div
                className="font-bold"
                style={{ color: '#2f49d1', fontSize: '18px' }}
              >
                { offset }%
              </div>
              <div className="">Based on Reality</div>
            </div>
            <div className="" style={{ width: '50px' }}>
              100%
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Light({offset}) {
    const { dashOffset, dashPath } = useSpring({
      dashOffset: offset,
      from: { dashOffset: offset, dashPath: 1000 },
      config: config.molasses,
    });
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Light Intensity</div>
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center">
          <svg
            viewBox="0 0 700 380"
            fill="none"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
          >
            <path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2d2d2d"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <animated.path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2f49d0"
              strokeWidth="40"
              strokeLinecap="round"
              strokeDasharray={1000 + 80*offset/10}
              strokeDashoffset={dashPath}
              id="svgPath"
              className="svgPath"
            />
  
            <animated.circle
              cx={dashOffset.to(
                (x) => 350 + 250 * (-1) * Math.cos(map(x, 100, 0, pi, tau)),
              )}
              cy={dashOffset.to(
                (x) => 350 + 250 * Math.sin(map(x, 100, 0, pi, tau)),
              )}
              r="12"
              fill="#fff"
            />
            <circle cx="140" cy="350" r="5" fill="#2f49d0" />
            <circle
              cx="144.5890038459008"
              cy="306.3385449282706"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="158.15545389505382"
              cy="264.58530495408195"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="180.10643118126103"
              cy="226.56509701858067"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="209.48257266463972"
              cy="193.93958664974724"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="244.9999999999999"
              cy="168.1346652052679"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="285.10643118126103"
              cy="150.27813157801776"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="328.0490227137926"
              cy="141.15040197266262"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="371.95097728620715"
              cy="141.1504019726626"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="414.8935688187389"
              cy="150.27813157801774"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="454.9999999999999"
              cy="168.1346652052678"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="490.51742733536014"
              cy="193.93958664974713"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="519.8935688187389"
              cy="226.5650970185806"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="541.8445461049462"
              cy="264.58530495408183"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="555.4109961540992"
              cy="306.33854492827044"
              r="5"
              fill="#2f49d0"
            />
            <circle cx="560" cy="349.99999999999994" r="5" fill="#2f49d0" />
            <path
              d="M349.292 375C395.845 375 433.583 337.261 433.583 290.708C433.583 244.155 395.845 206.417 349.292 206.417C302.739 206.417 265 244.155 265 290.708C265 337.261 302.739 375 349.292 375Z"
              fill="white"
            />
            <path
              d="M349.292 358.708C386.847 358.708 417.292 328.264 417.292 290.708C417.292 253.153 386.847 222.708 349.292 222.708C311.736 222.708 281.292 253.153 281.292 290.708C281.292 328.264 311.736 358.708 349.292 358.708Z"
              fill="#D2D6E7"
            />
            <path
              d="M347.167 343.833C376.898 343.833 401 319.731 401 290C401 260.269 376.898 236.167 347.167 236.167C317.435 236.167 293.333 260.269 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833Z"
              fill="#FFE17D"
            />
            <path
              d="M347.167 316.482C339.696 316.482 332.608 313.623 328.204 308.835C327.391 307.953 327.449 306.58 328.331 305.768C329.213 304.956 330.588 305.013 331.399 305.896C334.996 309.807 340.89 312.141 347.167 312.141C353.443 312.141 359.338 309.807 362.935 305.896C363.745 305.013 365.121 304.956 366.003 305.768C366.885 306.58 366.942 307.953 366.13 308.835C361.725 313.623 354.637 316.482 347.167 316.482Z"
              fill="#AA7346"
            />
            <path
              d="M328.933 290C326.535 290 324.592 288.056 324.592 285.659V282.186C324.592 279.788 326.535 277.844 328.933 277.844C331.33 277.844 333.274 279.788 333.274 282.186V285.659C333.274 288.056 331.33 290 328.933 290Z"
              fill="#7D5046"
            />
            <path
              d="M328.933 277.844C328.635 277.844 328.345 277.875 328.064 277.932V283.922C328.064 285.361 329.231 286.527 330.669 286.527C332.108 286.527 333.274 285.361 333.274 283.922V282.186C333.274 279.788 331.331 277.844 328.933 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M365.401 290C363.003 290 361.059 288.056 361.059 285.659V282.186C361.059 279.788 363.003 277.844 365.401 277.844C367.798 277.844 369.742 279.788 369.742 282.186V285.659C369.742 288.056 367.798 290 365.401 290Z"
              fill="#7D5046"
            />
            <path
              d="M365.401 277.844C365.103 277.844 364.813 277.875 364.532 277.932V283.922C364.532 285.361 365.699 286.527 367.137 286.527C368.576 286.527 369.742 285.361 369.742 283.922V282.186C369.742 279.788 367.798 277.844 365.401 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M354.981 336.019C325.25 336.019 301.148 311.917 301.148 282.186C301.148 269.31 305.673 257.496 313.213 248.232C301.085 258.103 293.333 273.144 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833C364.023 343.833 379.064 336.081 388.935 323.953C379.671 331.493 367.857 336.019 354.981 336.019Z"
              fill="#FFD164"
            />
          </svg>
        </div>
  
        <div className="flex justify-center">
          <div className="flex justify-between mt-2" style={{ width: '300px' }}>
            <div className="" style={{ width: '50px', paddingLeft: '16px' }}>
              0%
            </div>
            <div
              className=""
              style={{
                width: '150px',
                textAlign: 'center',
              }}
            >
              <div
                className="font-bold"
                style={{ color: '#2f49d1', fontSize: '18px' }}
              >
                { offset }%
              </div>
              <div className="">Based on Control</div>
            </div>
            <div className="" style={{ width: '50px' }}>
              100%
            </div>
          </div>
        </div>
      </div>
    );
  }

  function CurrentTemp({offset}) {
    const { dashOffset, dashPath } = useSpring({
      dashOffset: offset,
      from: { dashOffset: offset, dashPath: 1000 },
      config: config.molasses,
    });
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Temporature</div>
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center">
          <svg
            viewBox="0 0 700 380"
            fill="none"
            width="300"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
          >
            <path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2d2d2d"
              strokeWidth="40"
              strokeLinecap="round"
            />
            <animated.path
              d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
              stroke="#2f49d0"
              strokeWidth="40"
              strokeLinecap="round"
              strokeDasharray={1000 + 80*offset/10}
              strokeDashoffset={dashPath}
              id="svgPath"
              className="svgPath"
            />
  
            <animated.circle
              cx={dashOffset.to(
                (x) => 350 + 250 * (-1) * Math.cos(map(x, 100, 0, pi, tau)),
              )}
              cy={dashOffset.to(
                (x) => 350 + 250 * Math.sin(map(x, 100, 0, pi, tau)),
              )}
              r="12"
              fill="#fff"
            />
            <circle cx="140" cy="350" r="5" fill="#2f49d0" />
            <circle
              cx="144.5890038459008"
              cy="306.3385449282706"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="158.15545389505382"
              cy="264.58530495408195"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="180.10643118126103"
              cy="226.56509701858067"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="209.48257266463972"
              cy="193.93958664974724"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="244.9999999999999"
              cy="168.1346652052679"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="285.10643118126103"
              cy="150.27813157801776"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="328.0490227137926"
              cy="141.15040197266262"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="371.95097728620715"
              cy="141.1504019726626"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="414.8935688187389"
              cy="150.27813157801774"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="454.9999999999999"
              cy="168.1346652052678"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="490.51742733536014"
              cy="193.93958664974713"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="519.8935688187389"
              cy="226.5650970185806"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="541.8445461049462"
              cy="264.58530495408183"
              r="5"
              fill="#2f49d0"
            />
            <circle
              cx="555.4109961540992"
              cy="306.33854492827044"
              r="5"
              fill="#2f49d0"
            />
            <circle cx="560" cy="349.99999999999994" r="5" fill="#2f49d0" />
            <path
              d="M349.292 375C395.845 375 433.583 337.261 433.583 290.708C433.583 244.155 395.845 206.417 349.292 206.417C302.739 206.417 265 244.155 265 290.708C265 337.261 302.739 375 349.292 375Z"
              fill="white"
            />
            <path
              d="M349.292 358.708C386.847 358.708 417.292 328.264 417.292 290.708C417.292 253.153 386.847 222.708 349.292 222.708C311.736 222.708 281.292 253.153 281.292 290.708C281.292 328.264 311.736 358.708 349.292 358.708Z"
              fill="#D2D6E7"
            />
            <path
              d="M347.167 343.833C376.898 343.833 401 319.731 401 290C401 260.269 376.898 236.167 347.167 236.167C317.435 236.167 293.333 260.269 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833Z"
              fill="#FFE17D"
            />
            <path
              d="M347.167 316.482C339.696 316.482 332.608 313.623 328.204 308.835C327.391 307.953 327.449 306.58 328.331 305.768C329.213 304.956 330.588 305.013 331.399 305.896C334.996 309.807 340.89 312.141 347.167 312.141C353.443 312.141 359.338 309.807 362.935 305.896C363.745 305.013 365.121 304.956 366.003 305.768C366.885 306.58 366.942 307.953 366.13 308.835C361.725 313.623 354.637 316.482 347.167 316.482Z"
              fill="#AA7346"
            />
            <path
              d="M328.933 290C326.535 290 324.592 288.056 324.592 285.659V282.186C324.592 279.788 326.535 277.844 328.933 277.844C331.33 277.844 333.274 279.788 333.274 282.186V285.659C333.274 288.056 331.33 290 328.933 290Z"
              fill="#7D5046"
            />
            <path
              d="M328.933 277.844C328.635 277.844 328.345 277.875 328.064 277.932V283.922C328.064 285.361 329.231 286.527 330.669 286.527C332.108 286.527 333.274 285.361 333.274 283.922V282.186C333.274 279.788 331.331 277.844 328.933 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M365.401 290C363.003 290 361.059 288.056 361.059 285.659V282.186C361.059 279.788 363.003 277.844 365.401 277.844C367.798 277.844 369.742 279.788 369.742 282.186V285.659C369.742 288.056 367.798 290 365.401 290Z"
              fill="#7D5046"
            />
            <path
              d="M365.401 277.844C365.103 277.844 364.813 277.875 364.532 277.932V283.922C364.532 285.361 365.699 286.527 367.137 286.527C368.576 286.527 369.742 285.361 369.742 283.922V282.186C369.742 279.788 367.798 277.844 365.401 277.844Z"
              fill="#9C6846"
            />
            <path
              d="M354.981 336.019C325.25 336.019 301.148 311.917 301.148 282.186C301.148 269.31 305.673 257.496 313.213 248.232C301.085 258.103 293.333 273.144 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833C364.023 343.833 379.064 336.081 388.935 323.953C379.671 331.493 367.857 336.019 354.981 336.019Z"
              fill="#FFD164"
            />
          </svg>
        </div>
  
        <div className="flex justify-center">
          <div className="flex justify-between mt-2" style={{ width: '300px' }}>
            <div className="" style={{ width: '57px', paddingLeft: '3px' }}>
              -15 &deg;C
            </div>
            <div
              className=""
              style={{
                width: '150px',
                textAlign: 'center',
              }}
            >
              <div
                className="font-bold"
                style={{ color: '#2f49d1', fontSize: '18px' }}
              >
                { offset*50/100 - 15} &deg;C
              </div>
              <div className="">Based on Reality</div>
            </div>
            <div className="" style={{ width: '50px' }}>
              35 &deg;C
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function AddComponent() {
    return (
      <div style={{height: "400px"}}>
        <div className="w-full h-20 add-component-head" />
        <div
          className="flex flex-col items-center"
          style={{
            transform: 'translate(0, -40px)',
          }}
        >
          <div
            className=""
            style={{
              background: '#414455',
              width: '80px',
              height: '80px',
              borderRadius: '999px',
            }}
          >
            <img
              src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="text-white font-bold mt-3">
            No Components Created Yet
          </div>
          <div className="mt-2">Simply create your first component</div>
          <div className="mt-1">Just click on the button</div>
          <div
            className="flex items-center p-3 mt-3"
            style={{
              background: '#2f49d1',
              borderRadius: '15px',
              padding: '8px 16px',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <Icon path="res-react-dash-add-component" className="w-5 h-5" />
            <div className="ml-2">Add Component</div>
            <div
              className="ml-2"
              style={{
                background: '#4964ed',
                borderRadius: '15px',
                padding: '4px 8px 4px 8px',
              }}
            >
              129
            </div>
          </div>
        </div>
      </div>
    );
  }