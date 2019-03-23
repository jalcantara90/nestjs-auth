import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor( @Inject('USER_MODEL') private readonly userModel: Model<User> ) { }

  async create( userDto: UserDto ): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
