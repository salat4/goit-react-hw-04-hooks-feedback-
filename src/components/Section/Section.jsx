import PropTypes from "prop-types";
const Section = ({ title }) => <h1>{title}</h1>;
export default Section;
Section.propTypes = {
    title: PropTypes.string,  
     };