import '../styles/components/pages/ContactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) =>{
	
	const initialForm = {
		nombre: '',
		email: '',
		telefono: '',
		mensaje: ''
	}

	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState('');
	const [formData, setFormData] = useState(initialForm);

	const handleChange = e =>{
		const { name, value } = e.target;
		setFormData(oldData => ({
			...oldData,
			[name]: value //forma dinámica
		}));
	}

	const handleSubmit = async e => {
		e.preventDefault();
		setMsg('');
		setSending(true)
		const response = await axios.post('http://localhost:3000/api/contacto', formData);
		setSending(false);
		setMsg(response.data.message);
		if (response.data.error === false) {
			setFormData(initialForm)
		}
	}

	return(
		<main className="contacto">
			<div>
				<h2>Contacto Rápido</h2>
				<form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
					<p>
						<label for="nombre">Nombre</label>
						<input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
					</p>
					<p>
						<label for="email">Email</label>
						<input type="text" name="email" value={formData.email} onChange={handleChange} />
					</p>
					<p>
						<label for="telefono">Teléfono</label>
						<input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
					</p>
					<p>
						<label for="mensaje">Mensaje</label>
						<textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
					</p>
					{sending ? <p>Enviando...</p> : null}
					{msg ? <p>{msg}</p> : null}
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