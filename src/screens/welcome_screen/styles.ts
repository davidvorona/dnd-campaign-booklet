import background1 from "../../../assets/images/FantasyBackground1.jpg";
import background2 from "../../../assets/images/FantasyBackground2.jpg";
import background3 from "../../../assets/images/FantasyBackground3.jpg";
import background4 from "../../../assets/images/FantasyBackground4.jpg";

// black font color: 4,
// white font color:
function pickBackground() {
    const bgs = [background1, background2, background3, background4];
    const which = Math.floor(Math.random() * bgs.length);
    return bgs[which];
}

const styles = {
    screenBackground: {
        background: `url(${pickBackground()}) no-repeat center center fixed`,
        backgroundSize: "cover"
    },
    titleContainer: {
        marginTop: "15%",
    },
    bottomRightText: {
        bottom: 0,
        right: 0,
        alignItems: "center"
    }
};

export default styles;
