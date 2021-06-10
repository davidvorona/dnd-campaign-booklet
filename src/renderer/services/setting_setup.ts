import util from "../../util";

type SetupStep = 1 | 2;

interface SettingSetupArgs {
    setting: dnd.Setting
}

class SettingSetup {
    setting: dnd.Setting;

    constructor(args: SettingSetupArgs) {
        this.setting = args.setting;
    }

    // sanity check
    hasName = (): boolean => {
        return !util.isEmpty(this.setting.name);
    };

    hasDetails = (): boolean => {
        return !util.isEmpty(this.setting.magicLevel)
            && !util.isEmpty(this.setting.locations)
            && !util.isEmpty(this.setting.description);
    };

    getStep = (): SetupStep | undefined => {
        let step = 0;
        if (this.hasName()) {
            step += 1;
        } else {
            console.error("Invalid setting setup step", step);
            return;
        }
        if (this.hasDetails()) {
            step += 1; 
        } else {
            return step as SetupStep;
        }
        return step as SetupStep;
    };
}

export default SettingSetup;
