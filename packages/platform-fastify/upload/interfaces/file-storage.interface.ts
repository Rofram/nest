import { MultipartFile } from './multipart-file.interface';

/**
 * File storage interface
 * @publicApi
 */
export type FileStorage = (file: MultipartFile) => Promise<string> | string;
