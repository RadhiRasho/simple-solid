import { createResource } from "solid-js";
import { Word } from "~/types/word";

async function fetchData() {
   const res = await fetch('api/words/');

    return res.json()
}

export default function About() {
  const [words] = createResource<Word[]>(fetchData);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {words()?.map((x, i) => {
        <div id={i}>
          <h2>{x.text}</h2>
          <p>{x.translations.join(", ")}</p>
        </div>
      })}
    </main>
  );
}
