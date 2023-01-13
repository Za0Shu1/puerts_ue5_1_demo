"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class TS_测试Player extends UE.Character {
    ReceiveBeginPlay() {
        let ViewClass = UE.Class.Load("WidgetBlueprint'/Game/测试UI.测试UI_C'");
        let Temp = UE.UMGManager.CreateWidget(this.GetWorld(), ViewClass);
        Temp.TextBlock_0.SetText("TS_测试Player");
        Temp.AddToViewport(0);
    }
}
exports.default = TS_测试Player;
//# sourceMappingURL=TS_测试Player.js.map