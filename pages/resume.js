import Image from 'next/image';

export default function Resume() {
	return (
		<>
			<p>
				<Image src='/Resume.png' alt='Log' width={1000} height={1000} />
			</p>
		</>
	);
}
