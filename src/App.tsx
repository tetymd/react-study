import Memo from './memo'
import UseCallback from './useCallback'
import UseMemo from './useMemo';
import CreateContext from './useContext';

function App() {
  return (
    <div className="App">
      <Memo />
      <br/>
      <UseCallback/>
      <br/>
      <UseMemo/>
      <br/>
      <CreateContext/>
    </div>
  );
}

export default App;
