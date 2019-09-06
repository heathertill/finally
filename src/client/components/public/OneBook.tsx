import * as React from 'react';
import { Component } from 'react';
import {RouteComponentProps} from 'react-router-dom'

export interface OneBookProps extends RouteComponentProps<{id: number}> {
    
}
 
const OneBook: React.SFC<OneBookProps> = () => {
    return ( 
        <div>hello from one book</div>
     );
}
 
export default OneBook;