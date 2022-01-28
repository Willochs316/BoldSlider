// import {FaEllipsis-h} from 'react-icons/fa';
const NewsFeedButton = ({ icon: Icon, className, onClick, style }) => {
  return (
    <>
      {/* <button className="new-btn"> */}
      {Icon && <Icon className={className} onClick={onClick} style={style} />}
      {/* </button> */}
    </>
  );
};

export default NewsFeedButton;
