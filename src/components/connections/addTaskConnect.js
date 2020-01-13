import { connect } from 'react-redux';
function mapStateToProps(state){
    return {};
}
function mapDispatchToProps(dispatch){
    return {
        addSome : (some) => {
            dispatch({type : "ADD_TASK", payload : some})
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps);