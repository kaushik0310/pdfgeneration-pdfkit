const express = require("express");
const pdfService = require("../service/pdfservice")

const router = express.Router();
router.get("/invoice",(req,res,next)=>{
    const stream = res.writeHead(200,{
        'Content-Type':'application/pdf',
        'content-disposition':'attachement;filename=invoice.pdf',
    
});

pdfService.buildPDF(
(chunk)=> stream.write(chunk),
()=> stream.end()
);
});
module.exports = router;