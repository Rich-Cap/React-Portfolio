import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Footer() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" className="justify-content-center" activeKey="/home">
				<Nav>
					<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
					</Nav.Item>
					<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
						Disabled
					</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Footer;
