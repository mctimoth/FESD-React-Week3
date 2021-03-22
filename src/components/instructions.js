import React, { Component } from 'react';

let e = React.createElement;

class Instructions extends Component {
    render() {
        return (
            e("div", {className: "instructions"},
            e("h2", null, "FESD React Week 3"),
            e("h3", null, "Instructions"),
                e("ol",null,
                    e("li", null, "Using the Houses API, or any open API of your choice you can find online, create a single page that allows for all 4 crud operations to be performed on a resource from that API. Create a React component (or more, if needed) to represent the resource. Make all forms and other necessary UI pieces their own components as reasonable."),
                    e("li", null, "My DOM and possible mocha/chai footprint")
                )
            )
        )
    }
}

export default Instructions;