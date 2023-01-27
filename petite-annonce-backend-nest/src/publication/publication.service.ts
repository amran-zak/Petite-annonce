import {HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {CreatePublicationDto, updatePublicationDto} from './dto/create-publication.dto';
import {Publication} from "./schemas/publication.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User, UserSchema} from "../users/schemas/user.schema";
import {UserRole} from "../users/interfaces/user.interface";

@Injectable()
export class PublicationService {

    constructor(@InjectModel('Publication') private publicationModel: Model<Publication>) {
    }

    async findAll(): Promise<Publication[]> {
        try {
            return await this.publicationModel.find().populate('user');
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAllMe(user): Promise<Publication[]> {
        try {
            if (user.role === UserRole.ADMIN)
                return await this.publicationModel.find().populate('user');
            return await this.publicationModel.find({user}).populate('user');
        } catch (error) {
            throw new Error(error);
        }
    }

    async findById(pubilcationID: string): Promise<Publication> {
        try {
            const publication = await this.publicationModel.findById(pubilcationID).populate('user');

            if (!publication) {
                throw new HttpException('Annonce introuvable', HttpStatus.NO_CONTENT);
            }

            return publication;
        } catch (error) {
            throw new Error(error);
        }
    }

    async createPublication(createPublicationDto: CreatePublicationDto, user): Promise<Publication> {
        try {
            const publication = await this.publicationModel.create(createPublicationDto);
            publication.user = user;
            return await publication.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async updatePublication(pubilcationID: string, updatePublicationDto: updatePublicationDto, user): Promise<Publication> {
        const publication = await this.publicationModel
            .findByIdAndUpdate(pubilcationID, updatePublicationDto, { new: true });
        if (! publication) {
            throw new NotFoundException(`Annonce d'id ${pubilcationID} n'existe pas`);
        }
        if ((user.role === UserRole.ADMIN || publication.user._id.valueOf() === user?._id.valueOf())) {
            return publication;
        } else {
            throw new UnauthorizedException('Peut pas modifier');
        }
    }

    async addImages(id: string, images: Array<string>, updatePublicationDto: updatePublicationDto): Promise<Publication> {
        try {
            const publication = await this.publicationModel.findByIdAndUpdate(
                id,
                {images: images},
                updatePublicationDto
            );

            return publication;
        } catch (error) {
            throw new Error(error);
        }
    }

    async addUser(id: string, user: User, updatePublicationDto: updatePublicationDto): Promise<Publication> {
        try {
            const publication = await this.publicationModel.findByIdAndUpdate(
                id,
                {user: user},
                updatePublicationDto
            );

            return publication;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deletePublication(pubilcationID: string, user) {

        const publication = await this.publicationModel.findByIdAndDelete(pubilcationID);
        if (!publication) {
            throw new NotFoundException('Annonce introuvable')
        }

        if (user.role === UserRole.ADMIN || publication.user._id.valueOf() === user?._id.valueOf()) {
            const message = "Annonce supprimée !";
            return message;

        } else {
            throw new UnauthorizedException();
        }
    }
}
