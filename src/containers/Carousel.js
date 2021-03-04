import { connect } from "react-redux";
import Carousel from "../components/Carousel/Carousel";

const mapStateToProps = (state) => {
  return {
    currentPageDate : state.currentPageDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickLeft : () => {
      dispatch({
        type: "CLICK_LEFT",
      })
    },
    handleClickRight : () => {
      dispatch({
        type: "CLICK_RIGHT",
      })
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Carousel);
