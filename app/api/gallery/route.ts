import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
      // Construct the gallery directory path, ensuring it's relative to the project root.
      const galleryDir = path.join(process.cwd(), 'images', 'gallery');
      // Check if the directory exists.  If not, return an error.
      if (!fs.existsSync(galleryDir)) return NextResponse.json({ error: 'Gallery directory not found' }, { status: 404 });  const folders = fs.readdirSync(galleryDir).filter((file) =>
    fs.statSync(path.join(galleryDir, file)).isDirectory()
  ); // Get folders only

  // Create the gallery data
  const galleryData = folders.map((folder) => {
    const folderPath = path.join(galleryDir, folder);
    const images = fs.readdirSync(folderPath)
      .filter((file) => file.endsWith('.jpg') || file.endsWith('.png')) // Filter for image files
      .map((image) => `/images/gallery/${folder}/${image}`); // Generate the image URL

    return { folderName: folder, images };
  });

  return NextResponse.json(galleryData); // Return the gallery data as a JSON response
}
