import SideBar from './component/SideBar';
import Overview from './component/Overview';
import User from './component/User';

import '../src/asserts/style/style.css';

function App() {
  return (
    <div className="row">
      <SideBar />
      <Overview />
      <User />
     </div>
  );
}

export default App;
