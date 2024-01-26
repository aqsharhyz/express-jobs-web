import { connect, set } from 'mongoose';
import { NODE_ENV, DB_LINK } from '@config';

export const dbConnection = async () => {
  const dbConfig = {
    url: DB_LINK,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  await connect(dbConfig.url);
};
