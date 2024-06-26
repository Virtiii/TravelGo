import React from 'react';
import Header from './../Header/Header';
import Routers from "../../router/Routers";
import Footer from './../Footer/Footer';

const Layout = () => {
  return (
    <>     
      <Header />
      <Routers /><br /><br />
      <Footer />
    </>
  );
}

export default Layout;


// import React from 'react';
// import Header from './../Header/Header';
// import Routers from "../../router/Routers";
// import Footer from './../Footer/Footer';

// const Layout = () => {
//   return (
//     <div className="layout-container">
//       <Header />
//       <div className="content">
//         <Routers />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;
