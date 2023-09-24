import { FastifyMultipartOptions } from './fastify-multipart-options.interface';
import { FileStorage } from './file-storage.interface';

/**
 * File options interface
 * @publicApi
 */
export interface UploadOptions {
  dest?: string;
  storage?: ':memory:' | 'disk' | FileStorage;
  multipart?: FastifyMultipartOptions;
}
