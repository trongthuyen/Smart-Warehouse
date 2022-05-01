import Sidebar from './Sidebar';
// import Content from './Content'
import React, { useState } from 'react';

const Detail = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      {/* <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      /> */}
    </div>
  );
}
export default Detail;
