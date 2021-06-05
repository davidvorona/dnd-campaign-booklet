import path from "path";
import fs from "fs";
import electron from "electron";

const USER_DATA_DIR = "userData";

type DataObject = {
    [key: string]: unknown
};

type StoreDefaults = DataObject | DataObject[];

interface StoreArgs {
    fileName: string,
    defaults: StoreDefaults
}

class Store {
    path: string;

    data: DataObject;

    constructor(args: StoreArgs) {
        const userDataPath = (electron.app || electron.remote.app).getPath(USER_DATA_DIR);
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

    get(key: string | number): unknown {
        const keyStr = Store.stringifyKey(key);
        return this.data[keyStr];
    }

    set(key: string | number, val: unknown): void {
        const keyStr = Store.stringifyKey(key);
        try {
            this.data[keyStr] = val;
            fs.writeFileSync(this.path, JSON.stringify(this.data));
        } catch (err) {
            console.log(err);
        }
    }
}

function parseDataFile(path: string, defaults?: StoreDefaults) {
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

export default Store;
