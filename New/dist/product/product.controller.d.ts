import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<any>;
    get(id: string): Promise<any>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: ProductModel): Promise<any>;
    find(dto: FindProductDto): Promise<(ProductModel & {
        review: import("../review/review.model").ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
