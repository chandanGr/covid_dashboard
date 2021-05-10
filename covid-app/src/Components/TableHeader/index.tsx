import React from 'react';
import { TableHeaderStyles } from './style';
import { ITableHeaderItems } from '../../Interfaces/common';

interface ITableHeaderProps {
    items: ITableHeaderItems[];
    className?: string;
}

function TableHeader(props: ITableHeaderProps) {
    const styles = TableHeaderStyles();
    return (
        <div className={`${styles.container} ${props.className && props.className}`}>
            {props.items &&
                props.items.map((item, index) => {
                    return (
                        <div className={`albumtable__header ${item.heading} _${index} ${styles.albumtable__header}`}>
                            {item.heading}
                        </div>
                    );
                })}
        </div>
    );
}

export default TableHeader;
