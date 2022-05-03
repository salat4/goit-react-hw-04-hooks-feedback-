import PropTypes from "prop-types";

const Notification = props => <div>{props.message}</div>;
export default Notification;

Notification.propTypes = {
    message: PropTypes.string,
    
     };