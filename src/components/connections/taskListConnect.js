import { connect } from 'react-redux';
function mapStateToProps(state){
    return {items:state.taskList.items};
}
function mapDispatchToProps(dispatch){
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps);