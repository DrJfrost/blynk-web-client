export function decodeBlynkColor(blynkColor, gradient = false) {
    let color;
    switch (blynkColor) {
        case 600084223: // Green
            color = '#23C48E';
            break;
        case 1602017535: // Purple
            color = '#5F7CD8';
            break;
        case 79755519: // Blue
            color = '#04C0F8';
            break;
        case -308477697: // Orange
            color = '#ED9D00';
            break;
        case -750560001: // Red
            color = '#D3435C';
            break;
        case -1: // White
            color = '#FFFFFF';
            break;
        case 255: // Black
            color = '#293742';
            break;
        default:
            color = '#999';
    }

    if (!gradient) {
        return color;
    }

    switch (blynkColor) {
        case 2147483647: // Green/Red
            color = ['#23C48E', '#D3435C'];
            break;
        case -2147483648: // Green/Blue
            color = ['#23C48E', '#04C0F8'];
            break;
        case 2147483646: // Red/Green
            color = ['#D3435C', '#23C48E'];
            break;
        case -2147483647: // Blue/Green
            color = ['#04C0F8', '#23C48E'];
            break;

        default:
            color = [color, color];
    }

    return color;
}

export function numToCssColor(num) {
    const color = parseColor(num);
    if (color[0] === 0 && color[1] === 0 && color[2] === 0) {
        return undefined;
    }
    return `rgba(${color.join(', ')})`;
}

function convertARGBtoRGBA(color) {
    const a = (color & 0xff000000) >> 24;
    const r = (color & 0x00ff0000) >> 16;
    const g = (color & 0x0000ff00) >> 8;
    const b = color & 0x000000ff;

    return [r, g, b, a & 0xff];
}

function setAlphaComponent(color, alpha) {
    return (color & 0x00ffffff) | (alpha << 24);
}

function parseColor(value) {
    const decodedColor = Number(value);
    return convertARGBtoRGBA(setAlphaComponent(decodedColor, 255));
}
