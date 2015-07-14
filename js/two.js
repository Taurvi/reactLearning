
// EXERCISE TWO:
// ADDING + USING THIS.PROPS TO FLOW DATA BETWEEN MULTIPLE COMPONENTS

var things = [
    "Apples",
    "Broccoli",
    "Chicken",
    "Duck",
    "Eggs",
    "Fish",
    "Granola",
    "Hash Browns"
];


// 2. Connect the data by adding data={this.props.data} to <ItemList />
// this creates a data flow from things to ItemBox to ItemList
var ItemBox = React.createClass({
    render: function() {
        return (
            <div className="myApp">
                <SearchBar />
                <ItemList data={this.props.data} />
            </div>
        );
    }
});


// 3. finish connecting the data by using 'this.props.data' instead of 'things'
var ItemList = React.createClass({
    render: function(){
        return (
            <ul>
                {this.props.data.map(function(thing) {
                    return <li>{thing}</li>
                })}
            </ul>
        );
    }
});


var SearchBar = React.createClass({

    render: function() {
        return (
            <div className="searchBar">
                <input type="text" className="form-control input-lg" placeholder="Search" />
            </div>
        );
    }
});

// 1. connect the data by adding data={things} to the <ItemBox /> component
// this provides ItemBox component with the things array via this.props.data
// if we called it items, we would provide ItemBox with this.props.items
React.render(<ItemBox data={things} />, document.getElementById('mount-point'));