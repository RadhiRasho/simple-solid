import { createRenderEffect, createSignal } from 'solid-js'
import { Hourly, WeatherResponse } from 'types';

export default function Home() {
    const [weather, setWeather] = createSignal<WeatherResponse>();

    createRenderEffect(async () => {
        const response = await fetch('./api/weather');

        if (response.ok) {
            setWeather(await response.json());
        }
    })
    // Using Open Metro
    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                Hello world!
            </h1>

            {weather() &&
                <div>{JSON.stringify(weather(), null, '2')}</div>
            }
        </main>
    );
}
