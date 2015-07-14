
// EXERCISE THREE:
// ADDING + USING STATE

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

// Step overview - more detail for each step follows within the components.
// 1. add getInitialState function above the existing render (don't forget a comma)
// 2. add componentWillMount function below getInitialState
// 3. add filterList function to the top of the component
// 4. connect ItemBox and SearchBar by passing along the filterList function
// 5. connect ItemBox and ItemList by passing along the filtered items

var ItemBox = React.createClass({

    // 3.a. create a custom function called 'filterList' which will trigger on an event

    filterList: function(event){

        // initialize updatedList with this.state.initialItems
        var updatedList = this.state.initialItems;

        // filter the list, return items only if the user input value is present
        updatedList = updatedList.filter( function(item ){
            return item.toLowerCase().search( event.target.value.toLowerCase() ) !== -1;
        });

        // set items to updatedList
        this.setState({items: updatedList});
    },

    // 1. a. set 'initialItems' to this.props.data (which is things passed through the data flow)
    // 1. b. set 'items' to an empty array which will hold a filtered version of the list based on user input
    // returns {this.state.initialItems} and {this.state.items}

    getInitialState: function() {
        return {
            initialItems: this.props.data,
            items: []
        }
    },

    // 2.a. set items to this.state.initialItems
    // recall this is a one-time action to display the initial state
    // for now we're saying, 'items' is equal to 'initialItems' but this will change with user input

    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },

    // 4.a. add an 'onChange' attribute containing {this.filterList} to pass the function down to the <input>
    // 4.b. complete the connection in the SearchBar component below
    // 5.a. update the 'data' attribute. instead of {this.props.data}, pass {this.state.items} to the <ul>
    // we are exchanging a static prop with a dynamic state
    render: function() {
        return (
            <div className="myApp">
                <SearchBar
                    onChange={this.filterList}
                />
                <ItemList
                    data={this.state.items}
                />
            </div>
        );
    }
});

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

// 4.b. add 'onChange' attribute to input to recieve {this.props.onChange} from InfoBox component
var SearchBar = React.createClass({

    render: function() {
        return (
            <div class="searchBar">
                <input type="text" placeholder="Search" onChange={this.props.onChange} />
            </div>
        );
    }
});


React.render(<ItemBox data={things} />, document.getElementById('mount-point'));