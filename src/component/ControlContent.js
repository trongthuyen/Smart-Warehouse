import Icon from "./Icon";
import IconButton from "./IconButton";


const lightOffset = 10.00;
const coolerOffset = 84.00;

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
  
          <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card" style={{height: '35em'}}>
              <LightControl offset = {lightOffset}/>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card" style={{height: '35em'}}>
              <CoolerControl offset = {coolerOffset}/>
            </div>
          </div>
          <div className="w-full p-2 lg:w-1/3">
            <div className="rounded-lg bg-card overflow-hidden" style={{height: '35em'}}>
              <AddComponent />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ControlContent
  
  function LightControl({offset}) {
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Light Control</div>
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center">
        
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
  
  function CoolerControl({offset}) {
    return (
      <div className="p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold">Cooler Control</div>
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="mt-3">Current</div>
        <div className="flex justify-center">
          
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
  
  function AddComponent() {
    return (
      <div>
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