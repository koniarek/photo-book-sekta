import React from 'react'
import styled from '@emotion/styled'
import './layout.css'
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaSoundcloud, FaYoutubeSquare } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  &:hover {
      color: var(--primary);
      border-bottom-color: currentColor;
         }
        `

export default function Socials() {
	return <Wrapper>
		<SocialLink href="https://www.facebook.com/tonciujunkietosekta/" target="blank" rel="noopener noreferrer">
			<FaFacebookSquare/>
		</SocialLink>
		<SocialLink href="https://www.facebook.com/junkietosektapl/" target="blank" rel="noopener noreferrer">
			<FaFacebookSquare/>
		</SocialLink>
		<SocialLink href="https://www.facebook.com/tonciujunkierap/" target="blank" rel="noopener noreferrer">
			<FaFacebookSquare/>
		</SocialLink>

		<SocialLink href="https://www.youtube.com/channel/UC3EOoqNeN30lu00ExULB5uA" target="blank"
		            rel="noopener noreferrer">
			<FaYoutubeSquare/>
		</SocialLink>

		<SocialLink href="https://www.instagram.com/tedoendoce/?hl=pl" target="blank" rel="noopener noreferrer">
			<FaInstagram/>
		</SocialLink>

		<SocialLink href="https://soundcloud.com/tonciu" target="blank" rel="noopener noreferrer">
			<FaSoundcloud/>
		</SocialLink>

    <SocialLink href='mailto:tedoendoce@gmail.com' target="blank"
		            rel="noopener noreferrer">
			<FaEnvelope/>
		</SocialLink>
		<SocialLink href='mailto:junkietosekta@gmail.com
' target="blank" rel="noopener noreferrer">
			<FaEnvelope/>
		</SocialLink>
	</Wrapper>
}
