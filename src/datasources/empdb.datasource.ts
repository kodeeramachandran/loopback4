import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './empdb.datasource.json';

export class EmpdbDataSource extends juggler.DataSource {
  static dataSourceName = 'empdb';

  constructor(
    @inject('datasources.config.empdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
