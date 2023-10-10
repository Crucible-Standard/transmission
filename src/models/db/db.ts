import { Connection, createConnection, getConnectionManager } from 'typeorm';

import { logger } from '../../utils/logger';
import { config } from '../../utils/config';

export const dbCreateConnection = async (): Promise<Connection | null> => {
  try {
    const conn = await createConnection(config);
    logger.info(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    if (err.name === 'AlreadyHasActiveConnectionError') {
      const activeConnection = getConnectionManager().get(config.name);
      return activeConnection;
    }
    logger.error(err);
  }
  return null;
};