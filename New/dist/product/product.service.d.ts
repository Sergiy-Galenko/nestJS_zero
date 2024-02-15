/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from 'src/review/review.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: ModelType<ProductModel>);
    create(dto: CreateProductDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel>> & Omit<import("mongoose").Document<any, any, any>, "_id"> & ProductModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel>> & Omit<import("mongoose").Document<any, any, any>, "_id"> & ProductModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    deleteById(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel>> & Omit<import("mongoose").Document<any, any, any>, "_id"> & ProductModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>>;
    updateById(id: string, dto: CreateProductDto): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, import("@typegoose/typegoose/lib/types").DocumentType<ProductModel>> & Omit<import("mongoose").Document<any, any, any>, "_id"> & ProductModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>) | null>;
    findWithReviews(dto: FindProductDto): Promise<(ProductModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
