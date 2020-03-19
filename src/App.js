import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

function App() {
  //state hook
  const [data, setData] = useState();
  // use effect
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=EGmIW0mpIGAUeigIKfuELgyhTBBvoZDmLnokt7Y3&date=2012-03-14')
    .then(response => {
      // console.log(response)
      setData(response.data);
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  }, [])

  if (!data) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <Header title={data.title} />

      <Body explanation={data.explanation}
      url={data.url} />

      <Footer copyright={data.copyright} />

    </div>
  );
}

export default App;

