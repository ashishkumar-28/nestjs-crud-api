import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {}, 
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  // Test for creating a user
  it('should create a user', async () => {
    const result = {
      id: 1,
      username: 'user1',
      password: 'password1',
    };
    jest.spyOn(userService, 'create').mockImplementation(async () => result);

    expect(await userController.create({ username: 'user1', password: 'password1' })).toBe(result);
  });

  // Test for updating a user
  it('should update a user', async () => {
    const result = {
      id: 1,
      username: 'updateduser',
      password: 'newpassword',
    };
    jest.spyOn(userService, 'update').mockImplementation(async () => result);

    expect(await userController.update(1, { username: 'updateduser', password: 'newpassword' })).toBe(result);
  });

  
});
