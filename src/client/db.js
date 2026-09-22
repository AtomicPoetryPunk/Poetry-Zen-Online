import { Dexie } from 'dexie'

const db = new Dexie('poetry-zen')

db.version(1).stores({
  poems: 'id, title, themes',
  drafts: 'id, body, themes, source, rank',
  // badges: 'id, draftid, title, value' // TODO figure out the data model more specifically
})

export async function setup () {
  // TODO
}

export async function forcePut () {
  // TODO
}

export async function forceDelete () {
  // TODO
}

export async function fetchPoems () {
  // TODO
}

export async function fetchDrafts (poemid) {
  // TODO
}

export async function saveDraft (poemid, draft) {
  // TODO
}

export async function deleteDraft (draftid) {
  // TODO
}
