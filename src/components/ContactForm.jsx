import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Ingresa un nombre válido.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setForm(initialForm);
    }
  };

  return (
    <section id="contacto" className="container section-space">
      <div className="panel-card">
        <div className="section-heading">
          <span className="eyebrow">Contacto</span>
          <h2>Escríbenos</h2>
          <p>Completa los campos. El formulario valida la información antes de simular el envío.</p>
        </div>

        {sent && (
          <div className="alert alert-success" role="status">
            Mensaje enviado correctamente. Gracias por contactar a PixieZone.
          </div>
        )}

        <form className="row g-3" onSubmit={handleSubmit} noValidate>
          <div className="col-12 col-md-6">
            <label htmlFor="contactName" className="form-label">Nombre</label>
            <input
              id="contactName"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="contactEmail" className="form-label">Email</label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={form.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.cl"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-12">
            <label htmlFor="contactMessage" className="form-label">Mensaje</label>
            <textarea
              id="contactMessage"
              name="message"
              rows="5"
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              value={form.message}
              onChange={handleChange}
              placeholder="Escribe tu consulta"
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary px-4">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
