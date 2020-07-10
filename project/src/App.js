import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';


function App() {
  const [arr, setArr] = useState([])

  useEffect(() => {
    const parameters = {
      sources: "google-news-in",
      apiKey: "38a9e086f10b445faabb4461c4aa71f8"
    }
    const url = "http://newsapi.org/v2/top-headlines";
    Axios.get(url, { params: parameters })
      .then(res => {
        const dt = res.data
        setArr(dt.articles)
      })
  }, [])
  return (
    <div className="container">
      <div className="row">

        {arr.map((item, index) =>
          <div className="col-sm-4">
            <div className="card">
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  );
}

export default App;
