import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "animate.css/animate.css";

const setDelay = type => {
  let delay = 0;
  switch (type) {
    case "lg":
      delay = 300;
      break;
    case "md":
      delay = 500;
      break;
    case "sm":
      delay = 800;
      break;
    default:
      delay = 500;
  }
  return delay;
};

const generateBlocks = ({ blocks }) => {
  if (blocks) {
    return blocks.map(item => {
      return (
        <Fade bottom key={item.id} delay={setDelay(item.type)}>
          <div className={`item_block ${item.type}`}>
            <div className="veil" />
            <div
              className="image"
              style={{
                background: `url(/images/blocks/${item.image}) no-repeat`
              }}
            />
            <div className="title">
              <Link to={item.link}>{item.title}</Link>
            </div>
          </div>
        </Fade>
      );
    });
  }
};

const Blocks = props => {
  console.log(props);
  return <div className="home_blocks">{generateBlocks(props)}</div>;
};

export default Blocks;
