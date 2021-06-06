import path from "path";
import fs from "fs";
import electron from "electron";

const USER_DATA_DIR = "userData";

type DataObject = Record<string,unknown>;

type StorageDefaults = DataObject | DataObject[];

interface StorageArgs {
    fileName: string,
    defaults: StorageDefaults
}

class Storage {
    path: string;

    data: DataObject;

    constructor(args: StorageArgs) {
        const userDataPath = electron.app.getPath(USER_DATA_DIR);
        this.path = path.join(userDataPath, `${args.fileName}.json`);
        // must spread here to convert array to key-value object
        this.data = parseDataFile(this.path, { ...args.defaults });
    }

    static stringifyKey(key: string | number): string {
        if (typeof key === "number") {
            return key.toString();
        }
        return key;
    }

    get = (key?: string | number): unknown => {
        if (!key && key !== 0) {
            return this.data;
        }
        const keyStr = Storage.stringifyKey(key);
        return this.data[keyStr];
    };

    set(key: string | number, val: unknown): void {
        const keyStr = Storage.stringifyKey(key);
        try {
            this.data[keyStr] = val;
            fs.writeFileSync(this.path, JSON.stringify(this.data));
        } catch (err) {
            console.log(err);
        }
    }
}

function parseDataFile(path: string, defaults?: StorageDefaults) {
    try {
        let jsonData;
        try {
            jsonData = fs.readFileSync(path) as unknown as string;
        } catch(err) {
            fs.writeFileSync(path, JSON.stringify(defaults), { flag: "wx" });
            throw err;
        }
        return JSON.parse(jsonData);
    } catch (err) {
        console.log(err);
        return defaults;
    }
}

export default Storage;
