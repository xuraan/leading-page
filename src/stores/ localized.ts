import { LOCALIZED_STRINGS_URL, LOCALS_URL } from '@/helper/constants'
import { reactive } from 'vue'

export interface LocalizedString {
  about_text?: string
  about?: string
  faqs?: string
  versions?: string
  contacts?: string
  contributors?: string
}
interface Local {
  id: string;
  name: string;
  flag: string;
}

const local = reactive({
  all: [] as Local[],
  current: {} as Local,
  strings: {} as LocalizedString,
  async updateLocal(newLocal: Local) {
    local.current = newLocal;
    const response = await fetch(LOCALIZED_STRINGS_URL(newLocal.id));
    const data = await response.json();
    local.strings = data;
    localStorage.setItem('local', JSON.stringify(newLocal));
  }
});

async function fetchLocals(): Promise<void> {
  const response = await fetch(LOCALS_URL);
  const data = await response.json();
  local.all = data;
}

fetchLocals();

export default local;
