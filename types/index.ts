export type WeatherResponse = {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	hourly_units: HourlyUnits;
	hourly: Hourly;
};

export type Hourly = {
	time: string[];
	temperature_2m: number[];
};

export type HourlyUnits = {
	time: string;
	temperature_2m: string;
};
