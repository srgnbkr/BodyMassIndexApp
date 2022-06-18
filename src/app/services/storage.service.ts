import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

   /**
   * Store value to Local storage
   *
   * @param key - Stored value key
   * @param value - Stored value
   * @returns void
   */
    public addToLocalStorage(key: string, value: any): void {
      this.addToStorage(localStorage, key, value);
    }


  private addToStorage(storage: Storage, key: string, value: any): void {
    this.checkStorageKey(key);
    storage.setItem(key, JSON.stringify(value));
  }
  private checkStorageKey(key: string): void {
    if (key == null || key === '') {
      throw new ReferenceError('storage key must not be null or empty');
    }
  }
}
