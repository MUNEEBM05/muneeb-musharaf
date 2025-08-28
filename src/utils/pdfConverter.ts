import jsPDF from 'jspdf';

export const downloadCVAsPDF = async () => {
  try {
    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Load the image
    const img = new Image();
    img.src = '/muneeb-cv.png';
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    // Calculate dimensions to fit A4 page
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate the aspect ratio
    const imgAspectRatio = img.width / img.height;
    const pdfAspectRatio = pdfWidth / pdfHeight;
    
    let finalWidth, finalHeight, xOffset = 0, yOffset = 0;
    
    if (imgAspectRatio > pdfAspectRatio) {
      // Image is wider than PDF page ratio
      finalWidth = pdfWidth;
      finalHeight = pdfWidth / imgAspectRatio;
      yOffset = (pdfHeight - finalHeight) / 2;
    } else {
      // Image is taller than PDF page ratio
      finalHeight = pdfHeight;
      finalWidth = pdfHeight * imgAspectRatio;
      xOffset = (pdfWidth - finalWidth) / 2;
    }
    
    // Add the image to the PDF
    pdf.addImage(
      img.src,
      'PNG',
      xOffset,
      yOffset,
      finalWidth,
      finalHeight
    );
    
    // Save the PDF
    pdf.save('Muneeb_Musharaf_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback to PNG download if PDF generation fails
    const link = document.createElement('a');
    link.href = '/muneeb-cv.png';
    link.download = 'Muneeb_Musharaf_CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};