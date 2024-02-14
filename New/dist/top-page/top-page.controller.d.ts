import { SchedulerRegistry } from '@nestjs/schedule';
import { HhService } from 'src/hh/hh.service';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    private readonly hhService;
    private readonly scheduleRegistry;
    constructor(topPageService: TopPageService, hhService: HhService, scheduleRegistry: SchedulerRegistry);
    create(dto: CreateTopPageDto): Promise<any>;
    get(id: string): Promise<any>;
    getByAlias(alias: string): Promise<any>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageDto): Promise<any>;
    find(dto: FindTopPageDto): Promise<any>;
    textSearch(text: string): Promise<any>;
    test(): Promise<void>;
}
