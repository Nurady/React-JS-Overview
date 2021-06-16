import React, { Component } from 'react';
import YouTubeComp from '../../../component/YoutubeComponent/YouTubeComp';

class YoutubeComponentPage extends Component {
    render () {
        return (
            <>
                <p>Halaman Youtube Component</p>
                <hr />
                <YouTubeComp time="7.12" title="React JS" desc="Bagian 1" />
                <YouTubeComp time="7.15" title="React Native" desc="Bagian 2" />
                <YouTubeComp time="7.10" title="Vue JS" desc="Bagian 3" />
                <YouTubeComp />
            </>
        )
    }
};

export default YoutubeComponentPage;