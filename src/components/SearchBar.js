import React from 'react';

class SearchBar extends React.Component {


    /*Event Hadlers
          onClick (leitrougei se opoio tag theloume)
          onChange
          onSubmit
     */

    /*Lec80
     Callback (sunithizoume na vazoume to "on" brosta gia na katalavainoume oti einai eventhandler fucntion)
    onInputChange(event) {
        console.log(event.target.value);
    }
       */

    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault(); //me auth th grammh apagoreuoume  na ginetai refresh h selida patwntas enter

        this.props.onSubmit(this.state.term);//otan pername ta props se class vazouem mportsa to this
    }

    render() {

        
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> {/*otan caloume sunarthsh event handler prepei na ginetai me arrow function gia na mhn exoume provlhma me to this*/}
                    <div className="field">
                        <label>Image Search</label>
                        {/* <input type="text" onChange={this.onInputChange} /> onChange is event handler and calls a callback function. Lec 80  */}
                        {/* <input type="text" onChange={(e)=> console.log(e.target.value)} /> alternate arrow function Lec 81 */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );


    }
}
export default SearchBar;