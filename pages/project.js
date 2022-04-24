import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styles from '../styles/News.module.css';
import Link from 'next/link';
import {
	FacebookShareButton,
	FacebookIcon,
	PinterestShareButton,
	PinterestIcon,
	RedditShareButton,
	RedditIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'next-share';

export default function Projects(props) {
	return (
		<>
			<div>My project</div>
			<p>
				title tamagotchi
				<br /> description This is my first project new dev This is a program
				that try to Mimic tamagotchi digital pet game that was created from
				Japan in 90. <br /> Technology [JS, HTML, CSS] <br />
				visit
				<a href='https://github.com/mdamapong/Monster-Game'>
					https://github.com/mdamapong/Monster-Game
				</a>
			</p>
			<p>
				title Dota 2 API
				<br /> description This is a Dota2 Steam game User account search app
				This app will allow user to input they Steam account ID to search for
				their Steam profile solo competitive rank leaderboard rank rank tier mmr
				estimate competitive rank Project motivation I love the game and I
				wanted to see what I can do to pull out my own game data Unfortunately
				my data not able accessible however I can access high rank players{' '}
				<br /> Technology React JS HTML CSS <br />
				visit:
				<a href='https://github.com/mdamapong/Dota_2_API'>
					https://github.com/mdamapong/Dota_2_API
				</a>
			</p>
			<p>
				title Collectus Front-End
				<br /> description This is the repo for the front-end of the Collectus
				app. The purpose of this app is to allow users to inventory their
				collectibles <br /> Technology VScode Netlify JavaScript, React
				React-router-dom Bootstrap React-bootstrap HTML CSS, Axios Pages
				<br />
				visit:
				<a href='https://github.com/Team-This-Is-Fine/collectus-frontend'>
					https://github.com/Team-This-Is-Fine/collectus-frontend
				</a>
			</p>
		</>
	);
}
