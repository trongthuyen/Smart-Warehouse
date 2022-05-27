import Icon from "./Icon";
import IconButton from "./IconButton";
import "../styles/Content.scss";
import Image from "./Image";

const detailData = [
  {
    id: 1,
    name: "Light LED 20W",
    type: "Light",
    location: "1st Room",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 2,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "2nd Room",
    state: false,
    fInfo: "Temp: 20",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 3,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Main entrance",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 4,
    name: "Light LED 20W",
    type: "Light",
    location: "1st Room",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 5,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "2nd Room",
    state: false,
    fInfo: "Temp: 25",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 6,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Main entrance",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  },

  {
    id: 7,
    name: "Light LED 20W",
    type: "Light",
    location: "1st Room",
    state: true,
    fInfo: "",
    date: "24.12.2020",
    time: "11:16 AM"
  },

  {
    id: 8,
    name: "Italy LUVE Unit Cooler",
    type: "Cooler",
    location: "2nd Room",
    state: false,
    fInfo: "Temp: 27",
    date: "24.05.2020",
    time: "8:20 PM"
  },

  {
    id: 9,
    name: "Insulated Panel Door",
    type: "Door",
    location: "Main entrance",
    state: true,
    fInfo: "",
    date: "24.05.2019",
    time: "8:00 AM"
  }
];

function DetailContent({ onSidebarHide }) {
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
      <div className="w-full p-2">
        <div className="rounded-lg bg-card p-5">
        <table class="w-full text-left">
          <thead>
            <tr class="text-white">
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">ID</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">Name</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 hidden md:table-cell">Type</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">Location</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">State</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 hidden md:table-cell">Further Info</th>
              <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody class="text-white">
            {detailData.map(({id, name, type, location, state, fInfo, date, time}) => (
            <tr>
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div class="flex items-center">{id}</div>
              </td>
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div class="flex items-center">
                  {name}
                </div>
              </td>
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
                <div class="flex items-center">
                  {type === "Light" ? <Image path={`https://svgshare.com/i/hj5.svg`} className="w-4 h-4 mr-2.5"/> : type === "Cooler" ? <Image path={`https://svgshare.com/i/hoA.svg`} className="w-4 h-4 mr-2.5"/>: <Image path={`https://svgshare.com/i/hnH.svg`} className="w-4 h-4 mr-2.5"/>}
                  {type}
                </div>
              </td>
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div class="flex items-center">
                  {location}
                </div>
              </td>
              {state ? <td class="sm:p-3 py-2 px-1 border-b border-gray-200 text-green-600">On</td> : <td class="sm:p-3 py-2 px-1 border-b border-gray-200 text-red-600">Off</td>}
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200 md:table-cell hidden">
                <div class="flex items-center">
                  {fInfo}
                </div>
              </td>
              <td class="sm:p-3 py-2 px-1 border-b border-gray-200">
                <div class="flex items-center">
                  <div class="sm:flex hidden flex-col">
                    {date}
                    <div class="text-gray-400 text-xs">{time}</div>
                  </div>
                  <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                    </svg>
                  </button>
                  <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </button>
                  <button class="w-4 h-4 inline-flex items-center justify-center text-gray-400 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailContent;