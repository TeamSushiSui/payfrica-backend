import { Test, TestingModule } from '@nestjs/testing';
import { P2pDepositOrdersController } from './p2p-deposit-orders.controller';
import { P2pDepositOrdersService } from './p2p-deposit-orders.service';

describe('P2pDepositOrdersController', () => {
  let controller: P2pDepositOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [P2pDepositOrdersController],
      providers: [P2pDepositOrdersService],
    }).compile();

    controller = module.get<P2pDepositOrdersController>(P2pDepositOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
