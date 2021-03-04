import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { submitData } from "../actions";


export default connect(null, { submitData })(Form);
