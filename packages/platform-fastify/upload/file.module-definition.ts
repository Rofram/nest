import { ConfigurableModuleBuilder } from '@nestjs/common';
import { UploadOptions } from './interfaces';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<UploadOptions>().build();
