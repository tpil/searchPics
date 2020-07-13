import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';


class App extends React.Component {

    state = {images:[]};

   async onSearchSubmit(term) {
        //this is an axios function witch awaits 2 arguments ('URL from the API we use', {object with options to customize the requests})
        //unsplash docs Scehma/Location
        //unsplash docs Authorization
     const response= await unsplash.get('/search/photos',
        
            {
                params: {query : term},
                
            }
       );

       //  console.log(response.data.results); Lec 92
       this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={(e) => this.onSearchSubmit(e)} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;