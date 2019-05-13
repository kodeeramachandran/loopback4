import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {EmpdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.empdb') dataSource: EmpdbDataSource,
  ) {
    super(User, dataSource);
  }
}
