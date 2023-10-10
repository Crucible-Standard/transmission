import 'dotenv/config'

/** Using dotenv npm we can read process.env which is easiest/standard to provision
 * environment variables in a containerized environment.
 * 
 */

const config = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'transmission',
  synchronize: true,
  logging: false,
  entities: [
    'src/models/db/entities/**/*.ts',
  ],
  migrations: [
    'src/models/db/migrations/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/models/db/entities',
    migrationsDir: 'src/models/db/migrations',
  },
};

export { config };