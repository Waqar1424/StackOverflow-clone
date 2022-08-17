import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
 
class TypedR extends Component {
    render() {
        return (
            <div className='react-typed'>
                 <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={['developer', 'data sciencetist', 'system admin', 'mobile developer', 'game developer']}
                    typeSpeed={150}
                    backSpeed   
                    loop

                    />
            </div>
        );
    }
}
 
export default TypedR;