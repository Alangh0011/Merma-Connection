import jsPDF from 'jspdf';

const ProductPDFGenerator = ({ productos }) => {
  const generarPDF = () => {
    const doc = new jsPDF();
    let y = 15; // Posición inicial de escritura

    doc.text('Lista de Productos', 10, y);
    y += 10;

    productos.forEach((producto) => {
      doc.text(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`, 10, y);
      y += 10;
    });

    doc.save('productos.pdf');
  };

  return (
    <div>
      <button onClick={generarPDF}>Generar PDF</button>
    </div>
  );
};

export default ProductPDFGenerator;
