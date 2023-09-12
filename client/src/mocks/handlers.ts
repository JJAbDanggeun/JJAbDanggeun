import { rest } from "msw";

export const handlers = [
	rest.post("/example", (_, res, ctx) => {
		return res(ctx.status(200));
	}),
];
