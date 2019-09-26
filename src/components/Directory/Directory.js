import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { sectionsSelector } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem {...section} key={section.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector
});

export default connect(mapStateToProps)(Directory);
