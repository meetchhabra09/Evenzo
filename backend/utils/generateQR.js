const QRCode = require('qrcode');

const generateQR = async (data) => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data, {
      width: 300,
      margin: 2,
      color: {
        dark: '#1a1a2e',
        light: '#ffffff'
      }
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('QR Code generation failed:', error.message);
    throw error;
  }
};

module.exports = generateQR;
