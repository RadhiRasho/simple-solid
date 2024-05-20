import type { Word } from '~/types'
import JSONFILE from 'data/Duolingo.json' with { type: 'json'};

export async function GET(): Promise<Word> {
    return JSONFILE;
}