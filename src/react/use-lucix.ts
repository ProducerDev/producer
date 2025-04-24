import { toSortedArray } from "@adviser/cement/utils";
import { Database, lucix } from "@lucix/core";
import { useMemo } from "react";
import { useAttach } from "./use-attach.js";
import type { UseFPConfig, UseLucix } from "./types.js";
import { createUseAllDocs } from "./use-all-docs.js";
import { createUseChanges } from "./use-changes.js";
import { createUseDocument } from "./use-document.js";
import { createUseLiveQuery } from "./use-live-query.js";

/**
 * @deprecated Use the `useLucix` hook instead
 */
export const LucixCtx = {} as UseLucix;

/**
 *
 * ## Summary
 *
 * React hook to create a custom-named Lucix database and provides the utility hooks to query against it.
 *
 * ## Usage
 * ```tsx
 * const { database, useLiveQuery, useDocument } = useLucix("dbname");
 * const { database, useLiveQuery, useDocument } = useLucix("dbname", { ...options });
 * ```
 *
 *
 */
export function useLucix(name: string | Database = "useLucix", config: UseFPConfig = {}): UseLucix {
  const strConfig = JSON.stringify(toSortedArray(config));
  const database = useMemo(() => (typeof name === "string" ? lucix(name, config) : name), [name, strConfig]);
  const attach = useAttach(database, config);

  const useDocument = useMemo(() => createUseDocument(database), [database.name, strConfig]);
  const useLiveQuery = useMemo(() => createUseLiveQuery(database), [database.name, strConfig]);
  const useAllDocs = useMemo(() => createUseAllDocs(database), [database.name, strConfig]);
  const useChanges = useMemo(() => createUseChanges(database), [database.name, strConfig]);

  return { database, useLiveQuery, useDocument, useAllDocs, useChanges, attach };
}

// Export types
export type {
  AllDocsResult,
  ChangesResult,
  LiveQueryResult,
  UseAllDocs,
  UseChanges,
  UseDocument,
  UseDocumentResult,
  UseLucix,
  UseLiveQuery,
} from "./types.js";
