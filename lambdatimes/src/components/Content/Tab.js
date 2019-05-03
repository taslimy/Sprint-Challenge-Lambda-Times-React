import React from 'react';
import {string , func} from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props. https://reactjs.org/docs/typechecking-with-proptypes.html //func

Tab.propTypes = {
  selectTabHandler: func.isRequired,
  selectedTab: string.isRequired,
  tab: string.isRequired
};

export default Tab;
