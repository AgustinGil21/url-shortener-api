import sharp from 'sharp';
import path from 'path';
import { TImageFormat } from '../types/interfaces';

export default class ImageProcessor {
  private image: sharp.Sharp;

  constructor(buffer: Buffer) {
    this.image = sharp(buffer);
  }

  public async resize(width: number, height: number) {
    this.image = this.image.resize(width, height);
    return this;
  }

  public async toFile(filepath: string) {
    return this.image.toFile(filepath);
  }

  public async toBuffer(): Promise<Buffer> {
    return this.image.toBuffer();
  }

  public async toFormat(format: TImageFormat, quality = 80) {
    switch (format) {
      case 'jpeg':
        this.image = this.image.jpeg({ quality, mozjpeg: true });
        break;
      case 'png':
        this.image = this.image.png({ compressionLevel: 9 });
        break;
      case 'webp':
        this.image = this.image.webp();
        break;
      case 'avif':
        this.image = this.image.avif();
        break;
    }

    return this;
  }

  async saveToDisk(
    folderPath = '../uploads',
    fileName: string
  ): Promise<string> {
    const filePath = path.join(__dirname, folderPath, fileName);
    await this.image.toFile(filePath);
    return filePath;
  }
}

// Usage method: ImageProcessor(buffer).resize(width, height).toFormat('format-name').toBuffer() => imageBuffer
