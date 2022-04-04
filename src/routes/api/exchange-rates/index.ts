import yahooFinance from 'yahoo-finance2';

type interval = | '1m' | '2m' | '5m' | '15m' | '30m' | '60m' | '90m' | '1h' | '1d' | '5d' | '1wk' | '1mo' | '3mo';

export const post = async ( { request }) => {

	//TODO should check payload schema

	const payload = await request.json();

	const from = payload.from ? payload.from : new Date().getTime() / 1000 - 7 * 24 * 60 * 60;
	const to = payload.to ? payload.to : new Date().getTime() / 1000;
	const interval: interval = payload.interval ? payload.interval : '1d';

	const queryOptions = {
		period1: from,
		period2: to,
		interval
	};

	const a = await yahooFinance._chart('KRW=X', queryOptions);
	const b = await yahooFinance._chart('DX=F', queryOptions);
	const c = await yahooFinance._chart('AAPL', queryOptions);
	const d = await yahooFinance._chart('SPY', queryOptions);

	return {
		status: 200,
		body: {
			data: [a, b, c, d]
		}
	};
}
