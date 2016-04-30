var ItemSearch = React.createClass({
  getInitialState: function () {
    return {
      filterQuery: '',
      items: []
    };
  },
  handleChange: function (event) {
    var that = this;
    this.setState({
      filterQuery: event.target.value
    });
    var url = document.URL + "?query=" + event.target.value;
    console.log(url);
    $.getJSON(url, function(response){
        that.setState({
          items: response
        })
    })
  },
  render: function () {
    return (
      <div className="container">
        <label for="searchbox"> Search:
          <input value={this.state.filterQuery} onChange={this.handleChange} type="text" />
        </label>
        <hr />
        {this.state.items.map(function (item){
          return (
            <ItemDisplay key={item.id} name={item.name}/>
          )
        })}
      </div>
    );
  }
});
