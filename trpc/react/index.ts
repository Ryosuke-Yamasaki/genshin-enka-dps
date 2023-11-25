"use client";

import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "../server";

// フロントエンドtRPCクライアント
export const trpc = createTRPCReact<AppRouter>({});
