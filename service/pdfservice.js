PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback) {

    const doc = new PDFDocument();
    doc.on("data", dataCallback);
    doc.on("end",endCallback)
    doc.fontSize(25).text("Some heading and ");
    doc.end();

}

module.exports = {buildPDF};