import { Module } from '@nestjs/common';
import { EventListenersService } from './event-listeners.service';

@Module({
    providers: [EventListenersService],
})
export class EventListenersModule { }