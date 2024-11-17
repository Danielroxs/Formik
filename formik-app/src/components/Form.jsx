import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion de campos par el nombre
          if (!valores.nombre) {
            errores.nombre = "Ingresa un nombre valido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion de campos par el correo
          if (!valores.correo) {
            errores.correo = "Ingresa un correo valido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y el caracter @";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setEmailSent(true);
          console.log(valores.pais);
          setTimeout(() => setEmailSent(false), 5000);
          console.log("formulario enviado");
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Jhon Doe"
              />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className="error">Ingresa un nombre valido</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="nombre">{errors.nombre}</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@gmail.com"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

            <div>
              <Field name="pais" as="select">
                <option value="Mexico">Mexico</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
              </Field>
            </div>

            <div>
              <label>
                <Field type="checkbox" name="acepto" value="acepto" />
                Acepto los términos y condiciones
              </label>
            </div>

            <div>
              <label>
                <Field type="radio" name="genero" value="mujer" />
                Mujer
              </label>
              <label>
                <Field type="radio" name="genero" value="hombre" />
                Hombre
              </label>
            </div>

            <div>
              <Field
                name="mensaje"
                as="textarea"
                placeholder="Escribe aquí"
                className="resize-none"
              />
            </div>

            <button type="submit">Enviar</button>
            {emailSent && <p className="">Email enviado!</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;

/* export default Form;
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Form = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion de campos par el nombre
          if (!valores.nombre) {
            errores.nombre = "Ingresa un nombre valido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          // Validacion de campos par el correo
          if (!valores.correo) {
            errores.correo = "Ingresa un correo valido";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y el caracter @";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 2000);
          console.log("formulario enviado");
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Jhon Doe"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="nombre">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@gmail.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {emailSent && <p className="">Email enviado!</p>}
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
 */
