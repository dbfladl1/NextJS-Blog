export const STORAGE_KEYS = {
  GUEST_TOKEN: "yurim-guest",
} as const;

export type StorageKey = keyof typeof STORAGE_KEYS;
export type StorageValueKey = (typeof STORAGE_KEYS)[StorageKey];

abstract class BaseStorage {
  protected abstract storage: Storage;

  set(key: StorageValueKey, value: string): void {
    this.storage.setItem(key, value);
  }

  get(key: StorageValueKey): string | null {
    const item = this.storage.getItem(key);
    return item ? item : null;
  }

  remove(key: StorageValueKey): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

export class LocalStorage extends BaseStorage {
  protected storage = localStorage;
}

export class SessionStorage extends BaseStorage {
  protected storage = sessionStorage;
}
