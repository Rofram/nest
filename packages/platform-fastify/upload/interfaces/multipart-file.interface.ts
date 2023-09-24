import type { Readable } from 'node:stream';

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts#L86
 * @publicApi
 */
export interface MultipartFile {
  type: 'file';
  toBuffer: () => Promise<Buffer>;
  file: BusboyFileStream;
  fieldname: string;
  filename: string;
  encoding: string;
  mimetype: string;
  fields: MultipartFields;
}

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts#L108
 * @publicApi
 */
interface MultipartFields {
  [fieldname: string]: Multipart | Multipart[] | undefined;
}

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts#L84
 * @publicApi
 */
type Multipart = MultipartFile | MultipartValue;

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts#L97
 * @publicApi
 */
interface MultipartValue<T = unknown> {
  type: 'field';
  value: T;
  fieldname: string;
  mimetype: string;
  encoding: string;
  fieldnameTruncated: boolean;
  valueTruncated: boolean;
  fields: MultipartFields;
}

/**
 * "fastify/busboy" interface
 * @see https://github.com/fastify/busboy/blob/master/lib/main.d.ts#L101
 * @publicApi
 */
interface BusboyFileStream extends Readable {
  truncated: boolean;
  /**
   * The number of bytes that have been read so far.
   */
  bytesRead: number;
}
