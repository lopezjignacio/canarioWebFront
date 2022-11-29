import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) =>{
	return(
		<main className="contacto">
			<div>
				<h2>Contacto Rápido</h2>
				<form action="post" method="" className="formulario">
					<p>
						<label for="nombre">Nombre</label>
						<input type="text" name="" />
					</p>
					<p>
						<label for="email">Email</label>
						<input type="text" name="" />
					</p>
					<p>
						<label for="telefono">Teléfono</label>
						<input type="text" name="" />
					</p>
					<p>
						<label for="mensaje">Mensaje</label>
						<textarea name=""></textarea>
					</p>
					<p class="acciones"><input type="submit" value="Enviar"/>
					</p>
				</form>
			</div>
			<div className="datos">
				<h3>Otras vías de comunicación</h3>
				<p>También puede contactarse con nosotros usando los siguientes medios</p>
				<ul>
					<li>Teléfono: 1132361503</li>
					<li>Email: lopez.jignacio@gmail.com</li>
				</ul>
			</div>
		</main>
		);
}


/*import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;*/

export default ContactoPage;