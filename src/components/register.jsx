import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './register.module.css';

const register = () => {
 const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: '',
    email: '',
    idCard: '',
 };

 const validationSchema = Yup.object({
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    phoneNumber: Yup.number().required('El número de celular es requerido'),
    birthDate: Yup.date().required('La fecha de nacimiento es requerida'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    idCard: Yup.number().required('El DNI es requerido'),
 });

 const handleSubmit = (values) => {
    console.log(values);
    // Aquí puedes manejar el envío de los datos del formulario, por ejemplo, enviándolos a un servidor
 };

 return (
    <section className={styles.container}>
      <header>Registro de paciente</header>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles['input-box']}>
              <label>Nombre</label>
              <Field type="text" name="firstName" />
              {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className={styles['input-box']}>
              <label>Apellido</label>
              <Field type="text" name="lastName" />
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className={styles.column}>
              <div className={styles['input-box']}>
                <label>Numero de celular</label>
                <Field type="number" name="phoneNumber" />
                {errors.phoneNumber && touched.phoneNumber && <p>{errors.phoneNumber}</p>}
              </div>
              <div className={styles['input-box']}>
                <label>Fecha de nacimiento</label>
                <Field type="date" name="birthDate" />
                {errors.birthDate && touched.birthDate && <p>{errors.birthDate}</p>}
              </div>
            </div>
            <div className={styles['input-box'] + ' ' + styles.address}>
              <label>Email</label>
              <Field type="email" name="email" />
              {errors.email && touched.email && <p>{errors.email}</p>}
              <label>DNI</label>
              <div className={styles.column}>
                <Field type="number" name="idCard" />
                {errors.idCard && touched.idCard && <p>{errors.idCard}</p>}
              </div>
            </div>
            <button type="submit">Registrar</button>
          </Form>
        )}
      </Formik>
    </section>
 );
};

export default register;
