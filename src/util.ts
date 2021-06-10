const util = {
    isEmpty(value: unknown): boolean {
        return (
            value === undefined
            || typeof value === "undefined"
            || value === null
            || (typeof value === "object" && value !== null && Object.keys(value).length === 0)
            || (typeof value === "string" && value.trim().length === 0)
        );
    },
};

export default util;