import { useState } from "react"
import styles from "./FormularioVideo.module.css"

function FormularioVideo() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  })

  const [errors, setErrors] = useState({})

  const categorias = ["Front End", "Back End", "Mobile", "UX e Design", "Data Science", "Inovação e Gestão"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.titulo.trim()) newErrors.titulo = "El título es obligatorio"
    if (!formData.categoria) newErrors.categoria = "Seleccione una categoría"
    if (!formData.imagen.trim()) newErrors.imagen = "El enlace es obligatorio"
    if (!formData.video.trim()) newErrors.video = "El enlace del video es obligatorio"
    if (!formData.descripcion.trim()) newErrors.descripcion = "La descripción es obligatoria"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log(formData)
      // Aquí iría la lógica para enviar los datos
    }
  }

  const handleClear = () => {
    setFormData({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    })
    setErrors({})
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>NUEVO VIDEO</h1>
      <p className={styles.subtitle}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Título</label>
          <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className={`${styles.input} ${errors.titulo ? styles.error : ""}`}
          />
          {errors.titulo && <span className={styles.errorText}>{errors.titulo}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Categoría</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className={`${styles.select} ${errors.categoria ? styles.error : ""}`}
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          {errors.categoria && <span className={styles.errorText}>{errors.categoria}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Imagen</label>
          <input
            type="url"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className={`${styles.input} ${errors.imagen ? styles.error : ""}`}
            placeholder="Ingrese el enlace de la imagen"
          />
          {errors.imagen && <span className={styles.errorText}>{errors.imagen}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Video</label>
          <input
            type="url"
            name="video"
            value={formData.video}
            onChange={handleChange}
            className={`${styles.input} ${errors.video ? styles.error : ""}`}
            placeholder="Ingrese el enlace del video"
          />
          {errors.video && <span className={styles.errorText}>{errors.video}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.descripcion ? styles.error : ""}`}
            rows={4}
          />
          {errors.descripcion && <span className={styles.errorText}>{errors.descripcion}</span>}
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
            GUARDAR
          </button>
          <button type="button" onClick={handleClear} className={`${styles.button} ${styles.buttonSecondary}`}>
            LIMPIAR
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioVideo

