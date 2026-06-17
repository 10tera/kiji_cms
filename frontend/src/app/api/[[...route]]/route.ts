import { handle } from "hono/vercel";
import app from "../../../../../backend/src/app";

export const runtime = "edge";

const handler = handle(app.basePath("/api"));

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
