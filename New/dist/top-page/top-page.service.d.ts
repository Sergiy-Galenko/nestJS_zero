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
/// <reference types="mongoose/types/inferschematype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { TopLevelCategory, TopPageModel } from './top-page.model';
import { Types } from 'mongoose';
export declare class TopPageService {
    private readonly topPageModel;
    constructor(topPageModel: ModelType<TopPageModel>);
    create(dto: CreateTopPageDto): Promise<any>;
    findById(id: string): Promise<any>;
    findByAlias(alias: string): Promise<any>;
    findAll(): Promise<any>;
    findByCategory(firstCategory: TopLevelCategory): Promise<any>;
    findByText(text: string): Promise<any>;
    deleteById(id: string): Promise<any>;
    updateById(id: string | Types.ObjectId, dto: CreateTopPageDto): Promise<any>;
    findForHhUpdate(date: Date): Promise<any>;
}
