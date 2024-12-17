class LocalStorageService {
    private storage: Storage;

    constructor(storage: Storage = localStorage) {
        this.storage = storage;
    }

    // 设置键值对
    setItem<T>(key: string, value: T): void {
        try {
            const serializedValue = JSON.stringify(value);
            this.storage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`localStorage setItem error for key: ${key}`, error);
        }
    }

    // 获取键值对
    getItem<T>(key: string): T | null {
        try {
            const serializedValue = this.storage.getItem(key);
            return serializedValue ? JSON.parse(serializedValue) : null;
        } catch (error) {
            console.error(`localStorage getItem error for key: ${key}`, error);
            return null;
        }
    }

    // 删除键值对
    removeItem(key: string): void {
        try {
            this.storage.removeItem(key);
        } catch (error) {
            console.error(`localStorage removeItem error for key: ${key}`, error);
        }
    }

    // 清空所有键值对
    clear(): void {
        try {
            this.storage.clear();
        } catch (error) {
            console.error('localStorage clear error', error);
        }
    }

    // 检查键是否存在
    hasItem(key: string): boolean {
        return this.storage.getItem(key) !== null;
    }

    // 获取所有键值对
    getAllItems(): { [key: string]: string } {
        const items: { [key: string]: string } = {};
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            if (key) {
                items[key] = this.storage.getItem(key) || '';
            }
        }
        return items;
    }
}

// 创建一个实例
const localStorageService = new LocalStorageService();

export default localStorageService;
