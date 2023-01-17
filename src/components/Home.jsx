import React from 'react';
import vg from '../assets/2.webp';
import {
	AiFillGoogleCircle,
	AiFillAmazonCircle,
	AiFillYoutube,
	AiFillInstagram,
} from 'react-icons/ai';

const Home = () => {
	return (
		<>
			<div className="home" id="home">

				<main>
					<h1>TechyStar</h1>
					<p>Soluton to all your problems</p>
				</main>

			</div>

			<div className="home2">
				<img src={vg} alt="Graphics" />
				<div>
					<p>
						We are your one and only solution to the tech problems you face
						every day. We are leading tech company whose aim is to increase the
						problem solving ability in children.
					</p>
				</div>
			</div>

			<div className="home3" id="about">
				<div>
					<h1>Who we are?</h1>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
						Illum ea, nostrum quo aperiam, voluptate nisi accusamus perspiciatis,
						saepe debitis adipisci excepturi eveniet maxime error.
						Velit, laudantium magni odio quas tempore architecto fugiat expedita aliquam non dignissimos 
						eius molestias delectus quis. Quisquam incidunt iste, 
						quidem aliquid amet cum ut libero consectetur enim est eveniet earum minima ipsum blanditiis, 
						rem at laboriosam vel molestiae quasi! Repudiandae repellendus, nulla distinctio quisquam, 
						quidem vel molestias, obcaecati deserunt officiis aspernatur accusantium excepturi numquam 
						voluptate quo itaque debitis dolore quis! Sed odit fugiat exercitationem quam nemo omnis sequi 
						nihil ullam commodi dicta, placeat, modi dolores nulla.</p>
				</div>
			</div>

			<div className="home4" id="brands">
				<div>
					<h1>Brands</h1>
					<article>
						<div style={{
							animationDelay: "0.3s",
						}}
						>
							<AiFillGoogleCircle />
							<p>Google</p>
						</div>

						<div style={{
							animationDelay: "0.5s",
						}}
						>
							<AiFillAmazonCircle />
							<p>Amazon</p>
						</div>

						<div style={{
							animationDelay: "0.7s",
						}}
						>
							<AiFillYoutube />
							<p>Youtube</p>
						</div>

						<div style={{
							animationDelay: "1s",
						}}
						>
							<AiFillInstagram />
							<p>Instagram</p>
						</div>
					</article>
				</div>
			</div>
		</>
	)
}


export default Home