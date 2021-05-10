import React from 'react';
import { TableBodyStyles } from './style';
import { ITableBodyItems } from '../../Interfaces/common';

interface ITableBodyProps {
    items: ITableBodyItems[];
    className?: string;
}

function TableBody(props: ITableBodyProps) {
    const styles = TableBodyStyles();
    return (
        <div className={`${props.className && props.className}`}>
            {props.items &&
                props.items.map((item, index) => {
                    return (
                        <div className={`albumTable__row key_${item.key} _${index} ${styles.albumTable__row}`}>
                            {item &&
                                Object.keys(item).map((value, index) => {
                                    if (value !== 'key') {
                                        return (
                                            <React.Fragment>
                                                <div
                                                    /* @ts-ignore */
                                                    className={`albumTable__column ${item[value]} _${index} ${styles.albumTable__column}`}
                                                >
                                                    {/* @ts-ignore */}
                                                    {item[value]}
                                                </div>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                        </div>
                    );
                })}
        </div>
    );
}

export default TableBody;
