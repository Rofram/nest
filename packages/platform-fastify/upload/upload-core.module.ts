import multipart from '@fastify/multipart';
import {
  Inject,
  Module,
  OnApplicationBootstrap,
  Optional,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { FastifyAdapter } from '../adapters';
import { FILE_OPTIONS } from './file.constant';
import { UploadOptions } from './interfaces';

@Module({})
export class UploadCoreModule implements OnApplicationBootstrap {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost<FastifyAdapter>,
    @Optional()
    @Inject(FILE_OPTIONS)
    private readonly options?: UploadOptions,
  ) {}
  onApplicationBootstrap() {
    const fastify = this.httpAdapterHost.httpAdapter?.getInstance();
    if (fastify && !fastify.hasContentTypeParser('multipart')) {
      fastify.register(multipart, this.options?.multipart);
    }
  }
}
