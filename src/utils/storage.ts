export const STORAGE_KEYS = {
    GUEST_TOKEN: "yurim-guest",
    INTRO_TOKEN: "viewed",
    LANG_TOKEN:"lang"
  } as const;
  
  export type StorageKey = keyof typeof STORAGE_KEYS;
  export type StorageValueKey = (typeof STORAGE_KEYS)[StorageKey];
  
  abstract class BaseStorage {
    protected abstract getStorage(): Storage | null;
  
    set(key: StorageValueKey, value: string): void {
      const storage = this.getStorage();
      if (!storage) return;
      storage.setItem(key, value);
    }
  
    get(key: StorageValueKey): string | null {
      const storage = this.getStorage();
      if (!storage) return null;
      return storage.getItem(key);
    }
  
    remove(key: StorageValueKey): void {
      const storage = this.getStorage();
      if (!storage) return;
      storage.removeItem(key);
    }
  
    clear(): void {
      const storage = this.getStorage();
      if (!storage) return;
      storage.clear();
    }
  }
  
  export class LocalStorage extends BaseStorage {
    protected getStorage(): Storage | null {
      if (typeof window === "undefined") return null;
      return window.localStorage;
    }
  }
  
  export class SessionStorage extends BaseStorage {
    protected getStorage(): Storage | null {
      if (typeof window === "undefined") return null;
      return window.sessionStorage;
    }
  }
  