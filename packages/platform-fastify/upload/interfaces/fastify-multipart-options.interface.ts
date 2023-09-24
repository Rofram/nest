import type { Readable } from 'node:stream';

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts
 * @publicApi
 */
export interface FastifyMultipartOptions extends FastifyMultipartBaseOptions {
  /**
   * Only valid in the promise api. Append the multipart parameters to the body object.
   */
  attachFieldsToBody?: false;

  /**
   * Manage the file stream like you need
   */
  onFile?: (
    fieldName: string,
    stream: Readable,
    filename: string,
    encoding: string,
    mimetype: string,
    body: Record<string, BodyEntry>,
  ) => void | Promise<void>;
}

export interface FastifyMultipartBaseOptions {
  /**
   * Append the multipart parameters to the body object
   */
  addToBody?: boolean;

  /**
   * Add a shared schema to validate the input fields
   */
  sharedSchemaId?: string;

  /**
   * Allow throwing error when file size limit reached.
   */
  throwFileSizeLimit?: boolean;

  /**
   * Detect if a Part is a file.
   *
   * By default a file is detected if contentType
   * is application/octet-stream or fileName is not
   * undefined.
   *
   * Modify this to handle e.g. Blobs.
   */
  isPartAFile?: (
    fieldName: string | undefined,
    contentType: string | undefined,
    fileName: string | undefined,
  ) => boolean;

  limits?: {
    /**
     * Max field name size in bytes
     */
    fieldNameSize?: number;

    /**
     * Max field value size in bytes
     */
    fieldSize?: number;

    /**
     * Max number of non-file fields
     */
    fields?: number;

    /**
     * For multipart forms, the max file size
     */
    fileSize?: number;

    /**
     * Max number of file fields
     */
    files?: number;

    /**
     * Max number of header key=>value pairs
     */
    headerPairs?: number;
  };
}

/**
 * "fastify/multipart" interface
 * @see https://github.com/fastify/fastify-multipart/blob/master/index.d.ts
 * @publicApi
 */
interface BodyEntry {
  data: Buffer;
  filename: string;
  encoding: string;
  mimetype: string;
  limit: false;
}
