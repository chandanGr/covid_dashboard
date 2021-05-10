import { createUseStyles } from 'react-jss';
import { BORDER_RADIUS, FONT_SIZE_SMALL, BACKGROUND_COLOR_GREY, TEXT_COLOR_PRIMARY } from '../../Styles/common';

export const TableBodyStyles = createUseStyles({
    albumTable__row: {
        display: 'flex',
        width: '100%',
        height: '42px',
        background: BACKGROUND_COLOR_GREY,
        borderRadius: BORDER_RADIUS,
        fontSize: FONT_SIZE_SMALL,
        color: TEXT_COLOR_PRIMARY,
        marginBottom: '5px',
        paddingLeft: '52px',
        alignItems: 'center',
    },
    albumTable__column: {
        flex: 1,
    },
});
