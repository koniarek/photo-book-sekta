import React from "react"
import { FaCopyright } from 'react-icons/fa'
import Socials from "./socials"
import "./layout.css"

export default class Footer extends React.Component {

	constructor(props) {
		super(props);

		this.handleTextChange = this.handleTextChange.bind(this)



		this.state = {
			showMoreText: false,
		};
	}

	handleTextChange(showMoreText) {
		this.setState((prevState, props) => {
			if (prevState.showMoreText === showMoreText) {
				return { showMoreText: false }
			}
			return { showMoreText: showMoreText }
		})
	}


	render() {

		return(
			<footer>
				<div className={"footerText"}>
					<Socials />
	<span>| millennium | 51 1160 2202 0000 0002 6070 5913 | junkietosekta.pl | tedoendoce | junkierap |</span>
			       <p>
							<FaCopyright /> Copyright {new Date().getFullYear()}. junkietosekta.pl | All rights reserved. Developed by{' '}
							<a href="https://skwebarchitecture.com/">Szymon Koniarek</a>.
						</p>
				</div>
			</footer>
		)
	}
}
