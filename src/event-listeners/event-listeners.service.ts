import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { setupListeners } from './indexers/event-indexer';

@Injectable()
export class EventListenersService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('EventlistnerService is running');
    setupListeners();
  }
}