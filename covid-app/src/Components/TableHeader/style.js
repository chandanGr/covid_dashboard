import { createUseStyles } from 'react-jss';
import { FONT_SIZE_SMALL, TEXT_COLOR_SHADED } from '../../Styles/common';

export const TableHeaderStyles = createUseStyles({
    container: {
        display: 'flex',
        fontSize: FONT_SIZE_SMALL,
        color: TEXT_COLOR_SHADED,
        width: '100%',
        height: '42px',
        paddingLeft: '52px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumtable__header: {
        flex: 1,
    },
});
