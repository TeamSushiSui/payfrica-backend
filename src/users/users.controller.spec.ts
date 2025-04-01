import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const mockUsersService = {
      createUser: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should throw a 409 error if user already exists', async () => {
    const walletAddress = '0x123456789';
    const username = 'JohnDoe';

    // Mock the service to throw an HttpException with 409 status
    jest.spyOn(service, 'createUser').mockImplementation(() => {
      throw new HttpException(
        'User with this wallet address already exists',
        HttpStatus.CONFLICT,
      );
    });

    try {
      await controller.register({ walletAddress, username });
    } catch (e) {
      if (e instanceof HttpException) {
        expect(e.getStatus()).toBe(HttpStatus.CONFLICT);
        expect(e.message).toBe('User with this wallet address already exists');
      } else {
        // Fail the test if the error is not an HttpException
        fail(`Unexpected error type: ${e}`);
      }
    }
  });
});
