import { Component } from "react";
import axios from "axios";
import Display from "./Display/Display";
import "./file-upload.css";
export default class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      imgCollection: "",
      images: [],
    };
  }

  getFiles = async () => {
    const data = axios.get("http://localhost:4000/file/list");
    console.log(data);
  };

  onFileChange(e) {
    this.setState({ imgCollection: e.target.files });
  }
  onSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    for (const key of Object.keys(this.state.imgCollection)) {
      formData.append("imgCollection", this.state.imgCollection[key]);
    }
    axios
      .post("http://localhost:4000/file/upload", formData, {})
      .then((res) => {
        const data = res.data.userCreated.imgCollection;
        this.setState({ images: data });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="whole-container">
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-container">
            <input
              type="file"
              name="imgCollection"
              onChange={this.onFileChange}
              multiple
              className="choose-file"
            />
          </div>
          <div className="form-group">
            <button className="button" type="submit">
              Upload
            </button>
          </div>
        </form>
        <div className="images-container">
          <ul className="list-of-images">
            {images.length > 0 &&
              images.map((eachImge) => <Display details={eachImge} />)}
          </ul>
        </div>
      </div>
    );
  }
}
