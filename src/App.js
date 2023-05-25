import { Component } from "react";
import "./App.css";
import UploadComponent from "./components/file-upload-component";
class App extends Component {
  render() {
    return (
      <div className="App">
        <UploadComponent />
      </div>
    );
  }
}
export default App;
