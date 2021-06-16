import React, { Component } from 'react';
import { GlobalConsumer } from '../../../context/context';
import './LifeCycleComponent.css';
// import { connect } from 'react-redux';
// import { RootContext } from '../../Home/Home';

class LifeCycleComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)  
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate')
        // console.log('nextProps', nextProps)
        console.log('nextState',nextState)
        console.log('this state: ', this.state)
        console.groupEnd()
        if(nextState.count >= 4 ) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        // console.log(this)
        return (
            <>
            <p>Halaman Life Cycle Component</p>
            <hr />
            {/* <button className="btn" onClick={this.changeCount}> 
                Component Button {this.state.count} 
            </button> */}
            <hr />
            <div className="troley">
                <p>Total Order : { this.props.state.totalOrder }</p>
            </div>
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(LifeCycleComponent);
export default GlobalConsumer (LifeCycleComponent);