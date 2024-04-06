import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './register.module.css';

const Login = () => {
 const initialValues = {
    email: '',
    password: '',
 };

 const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
 });

 const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Aquí puedes manejar el envío de los datos del formulario, por ejemplo, enviándolos a un servidor
    },
 });

 return (
    <section className={styles.container}>
      <header>Login</header>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles['input-box']}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        <div className={styles['input-box']}>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            required
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
 );
};

export default Login;
