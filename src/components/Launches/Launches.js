import { useState, useEffect } from "react";
import { string } from "prop-types";
import { Launch } from "../../components";
import axios from "axios";

import "./Launches.css";

const API = "https://api.spacexdata.com/v4";

const Launches = (props) => {
  const { className } = props; // Props from parent component

  // Hooks
  const [launches, setLaunches] = useState([]);

  // Fetch the data
  useEffect(() => {
    return axios
      .get(`${API}/launches`)
      .then((res) => {
        return setLaunches(res.data);
      })
      .catch((e) => console.error("Error: ", e));
  }, []);

  const results = launches.map((launch) => {
    const id = launch.id;
    return <Launch key={id} {...launch} />;
  });

  // With parent className
  const classes = `${className} Launches`;
  return <div className={classes}>{results}</div>;
};

Launches.defaultProps = {
  className: null,
};

Launches.propTypes = {
  className: string,
};

export default Launches;
