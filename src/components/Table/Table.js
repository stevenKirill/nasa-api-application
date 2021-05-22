import React from 'react';
import TableHeader from '../../components/TableHeader/TableHeader';
import Row from '../Row/Row';

export default function Table({asteroidsArray}) {
    return (
        <div>
            <TableHeader/>
            {asteroidsArray.map((item,index) => <Row item={item} index={index}/>)}
        </div>
    )
}
