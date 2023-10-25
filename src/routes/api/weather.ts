// handles HTTP GET requests to /api/students
export async function GET() {
	const res = await fetch(
		'https://api.open-meteo.com/v1/forecast?latitude=40.8677&longitude=-96.7221&hourly=temperature_2m&past_days=7'
	);

	const response = await res.json();

	return new Response(JSON.stringify(response));
}
