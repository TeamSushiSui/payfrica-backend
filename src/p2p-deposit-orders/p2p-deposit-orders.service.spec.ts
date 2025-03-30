import { Test, TestingModule } from '@nestjs/testing';
import { P2pDepositOrdersService } from './p2p-deposit-orders.service';

describe('P2pDepositOrdersService', () => {
  let service: P2pDepositOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [P2pDepositOrdersService],
    }).compile();

    service = module.get<P2pDepositOrdersService>(P2pDepositOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
