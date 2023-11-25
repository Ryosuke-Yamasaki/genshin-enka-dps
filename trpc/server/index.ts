import { router } from "./trpc";
import { authRouter } from "./routers/auth";
import { userRouter } from "./routers/user";

// ルーターの作成
export const appRouter = router({
  auth: authRouter,
  user: userRouter,
});

// ルーターの型定義
export type AppRouter = typeof appRouter;
