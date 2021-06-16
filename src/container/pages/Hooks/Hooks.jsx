import React, { useState,  useEffect,Component } from 'react';

// class Hooks extends Component {
//     state ={
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count : this.state.count + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = `React JS`
//     }

//     render () {
//         return (
//             <div>
//                 <p>Nilai Saya Saat Ini Adalah : {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// };

const Hooks = () => {
    const [count, setCount] = useState(0);

    const onUpdate = () => {
        setCount(
            count + 1
        )
    };

    // useffect = didMount dan didUpdate
    useEffect(() => {
        document.title = `Title Change: ${count}`;

        // return memanggil willUnMount
        return () => {
            document.title = `React JS`
        }
    })

    return (
        <div>
        <p>Nilai Saya Saat Ini Adalah : {count}</p>
        <button onClick={onUpdate}>Update Nilai</button>
    </div>
    )
};

export default Hooks;