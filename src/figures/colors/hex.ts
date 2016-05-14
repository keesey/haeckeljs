export default function hex(color: number): string
{
	let s = color.toString(0x10);
	while (s.length < 6)
	{
		s = '0' + s;
	}
	return '#' + s;
}
