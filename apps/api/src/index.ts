/*
 * File: index.ts
 * Project: api
 * Created: Tuesday, July 20th 2021, 10:33:59 am
 * Last Modified: Tuesday, July 20th 2021, 11:06:37 am
 * Copyright © 2021 AMDE Agência
 */

import server from "./server";

const { PORT: port = 4000 } = process.env;

const main = async (): Promise<void> => {
  await server.start({ port });
  console.log(`Listing on port ${port}...`);
};

main().catch(console.log);
