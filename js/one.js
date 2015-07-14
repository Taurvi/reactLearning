
// EXERCISE ONE:
// REFRESH ON BUILDING REACT COMPONENTS
// INTRO TO MULTIPLE COMPONENTS + NESTING COMPONENTS

// Component structur is important when you're passing props from one to the next
// We want a search box and a list of items:
// Eventually, we want to connect the two, so that inputing a search filters the list.
// For now, let's wrap the two in a parent called ItemBox
// ItemBox
// - SearchBar
// - ItemList

// 1. build a list of things to filter on
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

// 2. Build three basic components for now, later we'll connect the data flow and then state

// 2.a. 'ItemBox' will render and return <SearchBar /> and <ItemList /> wrapped in a div
var ItemBox = React.createClass({
    render: function() {
        return (
            <div className="myApp">
                <SearchBar />
                <ItemList />
            </div>
        );
    }
});

// 2.b. 'Item List' will render and return an <li> for each item in the list
// for now use things.map to return one <li> for each thing, wrapped in an <ul>
var ItemList = React.createClass({
    render: function(){
        return (
            <ul>
                {things.map(function(thing) {
                    return <li>{thing}</li>
                })}
            </ul>
        );
    }
});

// 2.c. 'SearchBar' will render and return an input wrapped in a div
// eventually, we'll add an event to the input, for now, we're just setting the stage
var SearchBar = React.createClass({

    render: function() {
        return (
            <div class="searchBar">
                <input type="text" placeholder="Search" />
            </div>
        );
    }
});

// 3. build the React.render command to inject your content into the document
// we do this with the parent component, <ItemBox /> which references our helper components
React.render(<ItemBox />, document.getElementById('mount-point'));