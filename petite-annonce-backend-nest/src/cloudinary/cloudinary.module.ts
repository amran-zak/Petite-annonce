import { Module } from '@nestjs/common';
// import { CloudinaryProvider } from '../cloudinary/cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';

@Module({
    // providers: [CloudinaryProvider, CloudinaryService],
    // exports: [CloudinaryProvider, CloudinaryService],
    providers: [CloudinaryService],
    exports: [CloudinaryService],
})
export class CloudinaryModule {}