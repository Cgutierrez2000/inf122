import React from 'react';
import '../styles/Galeria.css';

const Galeria = ({ nombreUsuario, imagenUsuario }) => {
    // Asegúrate de reemplazar estas rutas con las rutas a tus imágenes
    const images = ['ruta/a/tu/imagen1.jpg', 'ruta/a/tu/imagen2.jpg', /* más rutas de imágenes aquí */];

    return (
        <div>
            <img className="userImage" src={imagenUsuario} alt={nombreUsuario} />
            <h2>{nombreUsuario}</h2>
            <div className="container">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Galeria;
/*superjunior*/