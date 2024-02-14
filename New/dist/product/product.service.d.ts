import { ModelType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from 'src/review/review.model';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: ModelType<ProductModel>);
    create(dto: CreateProductDto): Promise<any>;
    findById(id: string): Promise<any>;
    deleteById(id: string): Promise<any>;
    updateById(id: string, dto: CreateProductDto): Promise<any>;
    findWithReviews(dto: FindProductDto): Promise<(ProductModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
