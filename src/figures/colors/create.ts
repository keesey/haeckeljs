export default function(r: number, b: number, g: number): number
{
    return (r << 16) | (g << 8) | b;
}
