import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../core/application/services/user.service.js';
import { UserRepository } from '../../infrastructure/user/repository/user.repository.js';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: UserRepository, useValue: { findAll: jest.fn() } },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});