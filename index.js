import express from 'express';
import cloudinary from './cloudinary-config.js'; // your Cloudinary configuration
import multer from 'multer'; // handles file uploads
import { unlinkSync } from 'fs'; // for file system operations
import router from './routes/router.js';
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*"
}))





app.use("/", router)

app.get("/", async (req, res) => {
  res.send("hello")
})













// Multer configuration to upload files to a temp folder
// const upload = multer({ dest: 'uploads/' });

// Route to upload PDF via Postman or other client
// app.post('/upload-pdf', upload.single('pdf'), (req, res) => {
//   const filePath = req.file.path;

//   // Upload the file to Cloudinary as a raw resource (PDF)
//   cloudinary.uploader.upload(
//     filePath,
//     { resource_type: 'raw' }, // Important: "raw" tells Cloudinary to treat it as a non-image file (PDF, etc.)
//     (error, result) => {
//       // Delete file from local server after upload
//       unlinkSync(filePath);

//       if (error) {
//         return res.status(500).json({ error: 'Cloudinary upload failed', details: error });
//       }

//       // Respond with the Cloudinary URL of the uploaded PDF
//       res.status(200).json({
//         message: 'PDF uploaded successfully',
//         url: result.secure_url, // The URL of the uploaded PDF
//         format: result.format,  // The file format to confirm it is a PDF
//         resource_type: result.resource_type // The resource type should be "raw"
//       });
//     }
//   );
// });

// Server listen on port 3000
const PORT = 3020;
app.listen(PORT, () => {
  console.log('Server is running on port ', PORT);
});
