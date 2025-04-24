/* eslint-disable no-console */
import { lucix, PACKAGE_VERSION, rt } from "@lucix/core";

async function main() {
  // console.log(lucix);

  const db = lucix("test-node");

  // const ok =
  await db.put({ _id: "test", hello: "world" });

  // console.log(ok);

  // const doc =
  await db.get("test");

  console.log(`${rt.runtimeFn().isDeno ? "DENO" : "NODE"} test working version:${PACKAGE_VERSION}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
