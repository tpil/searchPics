//this component renders each image with a style of css grid depending on the height of the image
import React from 'react';

class ImageCard extends React.Component {
    //React refs Lec 104
    constructor(props) {
        super(props);
        //we use this method to create a Ref for a component so we can get this JSX tag later ( as we do in JS with document.getElementsByTagName)
        this.imageRef = React.createRef();

        this.state = { spans: 0 };
    }

    //It's called after the render method
    componentDidMount() {
        // console.log(this.imageRef);
        //Lec 106 .We add a simple JS listener with a callback Function to get the height after the img is loaded
        this.imageRef.current.addEventListener('load', this.setSpans);

    }
    //Call back in classes shloud be arrow functions to avoid "this" undefined error
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);
        //Theloume na kanoume span to row(pros ta katw) otan h eikona den xwraei se ena keli tou grid logw upsous
        
        const height = this.imageRef.current.clientHeight;
        const spannum = Math.ceil(height / 10);//we divide with the number of grid heght in css

        this.setState({ spans: spannum});
    }


    render() {
        const { description, urls } = this.props.image; //Destruction ES6 (me mia grammh dhmiourgw polles metavlhtes apo ta perioexomena po u thelw se ena object)


        return (
            //theloume na perasoume to style tou span sth grid-row-end apo th setSpans()
            //ES2015 template strings:Ta `` enwnoun meavlhth tou component mou ${} me string
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>);
    }
}

export default ImageCard;