import { Module } from '@nestjs/common';
import { FILE_OPTIONS } from './file.constant';
import {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
} from './file.module-definition';
import { UploadOptions } from './interfaces';
import { UploadCoreModule } from './upload-core.module';

@Module({
  imports: [UploadCoreModule],
  providers: [
    {
      provide: FILE_OPTIONS,
      useFactory: (options?: UploadOptions) => ({ ...(options ?? {}) }),
      inject: [{ token: MODULE_OPTIONS_TOKEN, optional: true }],
    },
  ],
  exports: [FILE_OPTIONS],
})
export class FileModule extends ConfigurableModuleClass {}
