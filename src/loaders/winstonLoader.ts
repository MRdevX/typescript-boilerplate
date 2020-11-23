import { configure, format, transports } from 'winston';
import { MicroframeworkLoader, MicroframeworkSettings } from '../common';

import { env } from '../env';

export const winstonLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined,
) => {
  configure({
    transports: [
      new transports.Console({
        level: env.log.level,
        handleExceptions: true,
        format:
          env.node !== 'development'
            ? format.combine(format.json())
            : format.combine(format.colorize(), format.simple()),
      }),
    ],
  });
};
