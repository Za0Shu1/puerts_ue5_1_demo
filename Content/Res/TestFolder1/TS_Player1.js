"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class TS_Player1 extends UE.Character {
    ReceiveBeginPlay() {
        let ViewClass = UE.Class.Load("WidgetBlueprint'/Game/TestUI.TestUI_C'");
        let Temp = UE.UMGManager.CreateWidget(this.GetWorld(), ViewClass);
        Temp.TextBlock_0.SetText("TS_Player1");
        Temp.AddToViewport(0);
    }
}
exports.default = TS_Player1;
//# sourceMappingURL=TS_Player1.js.map