import "./App.css";
import "./pokemon-types.css";
import List from "./Components/List";
import Profile from "./Components/Profile";

function App() {
	return (
		<>
			<div id="content-box">
				<Profile />
				<List />
			</div>
		</>
	);
}

export default App;
