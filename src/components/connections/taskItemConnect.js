import { connect } from 'react-redux';
function mapStateToProps(state){
    return {};
  }
  
  function mapDispatchToProps(dispatch){
    return {
        removeSome: (task) => {
            dispatch({type : 'REMOVE_TASK', payload : task})
        },
        toggleTaskDone:(task) => {
          dispatch({type : 'TASK_DONE', payload : task})
       },
       updateTask:(task,newText)=>{
         dispatch({type:'UPDATE_TASK',payload:{task,newText}});
       }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps);