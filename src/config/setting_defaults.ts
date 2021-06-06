const now = new Date();

const SETTING_DEFAULTS: dnd.Setting = {
    name: "The Lands of Foo'bar",
    createDate: now.toISOString(),
    pcs: [],
    npcs: [],
    locations: []
};

export default SETTING_DEFAULTS;
