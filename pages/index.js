import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>Next | Home</title>
				</Head>
				<h1 className={styles.title}>
					Welcome to my portfolio, My name is Mickey D
				</h1>
				<p className={styles.text}></p>
				<p className={styles.text}></p>
			</div>

			<Link href='/project'>
				<a className={styles.btn}>Go to my work</a>
			</Link>
		</>
	);
}
