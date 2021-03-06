import yahooFinance from 'yahoo-finance2';

type interval =
	| '1m'
	| '2m'
	| '5m'
	| '15m'
	| '30m'
	| '60m'
	| '90m'
	| '1h'
	| '1d'
	| '5d'
	| '1wk'
	| '1mo'
	| '3mo';

export const post = async ({ request }) => {
	//TODO should check payload schema
	//TODO should take payload for chart data instead of hardcoded symbol and time
	//TODO should have return type object and used it in client and server
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

	const data = [
		_convertToSingleChartData(a),
		_convertToSingleChartData(b),
		_convertToSingleChartData(c),
		_convertToSingleChartData(d)
	];

	return {
		status: 200,
		body: {
			data
		}
	};
};

const _getUnit = (meta) => {
	let unit = '';

	if (meta.instrumentType === 'CURRENCY' || meta.instrumentType === 'EQUITY' || meta.instrumentType === 'ETF') {

		switch (meta.currency) {
			case 'KRW':
				unit = '₩';
				break;
			case 'USD':
				unit = '$';
				break;
		}
	}

	return unit;
};

const _convertToSingleChartData = (data) => {
	const dataset = data.quotes.reduce((acc, cur) => {
		acc.push({ x: cur.date, y: cur.close });
		return acc;
	}, []);
	return {
		meta: {
			symbol: data.meta.symbol,
			currency: data.meta.currency,
			instrumentType: data.meta.instrumentType,
			dataGranularity: data.meta.dataGranularity,
			regularMarketPrice: data.meta.regularMarketPrice,
			chartPreviousClose: data.meta.chartPreviousClose,
			unit: _getUnit(data.meta),
		},
		datasets: dataset
	};
};
