import { useState } from "react";
import { string, object, number } from "prop-types";
import moment from "moment";

import "./Launch.css";

const Image = (props) => {
  const { className, src, alt, show } = props;
  return show ? <img className={className} src={src} alt={alt} /> : null;
};

const Launch = (props) => {
  const { id, name, date_unix, static_fire_date_unix, links, details } = props; // Props from parent component

  // Hook
  const [moreInfo, showMoreInfo] = useState(false);

  // Image
  const { patch } = links;
  const image = patch.small;

  // Format launch date
  const availableUnixDate = static_fire_date_unix || date_unix;
  const date = moment.unix(availableUnixDate).format("MM/DD/YYYY");

  // Condition that determines wheter
  // we should show the image component
  const showImage = image !== null;

  return (
    <div className="Launch">
      <Image className="Launch-image" src={image} alt={name} show={showImage} />
      <h5 className="Launch-name">{name}</h5>
      <span className="Launch-date">{date}</span>
      <span className="Launch-info" onClick={() => showMoreInfo(!moreInfo)}>
        More details
      </span>
      {moreInfo ? (
        <div className="Launch-details">
          <span className="Launch-close" onClick={() => showMoreInfo(false)}>
            &#10006;
          </span>
          <h5 className="Launch-id">
            <b>ID:</b> {id ? id.substr(0, 8) + "..." : null}
          </h5>
          <span className="Launch-detail">
            {details ? details.substr(0, 80) + "..." : null}
          </span>
        </div>
      ) : null}
    </div>
  );
};

Launch.defaultProps = {
  id: null,
  name: null,
  links: [],
  details: null,
  date_local: null,
  static_fire_date_unix: null,
};

Launch.propTypes = {
  id: string,
  name: string,
  links: object,
  details: string,
  date_local: string,
  static_fire_date_unix: number,
};

export default Launch;
