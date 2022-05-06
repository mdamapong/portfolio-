import Image from 'next/image';

export default function Resume() {
	return (
		<>
			<p>
				<Image src='/Resume.png' alt='Log' width={500} height={500} />
			</p>
		</>
	);
}
