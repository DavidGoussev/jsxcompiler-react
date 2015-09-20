var Button = React.createClass({
  getInitialState:function(){
    return {increasing.false}
  },
  update: function(){
    this.setProps({val: this.props.val+1})
  },
  componentWillReceiveProps:function(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  },
});

React.render(<Button val={0} />, document.body);
