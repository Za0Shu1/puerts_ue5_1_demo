import * as UE from 'ue'
 
type UI = UE.Game.测试UI.测试UI_C;

class TS_测试Player extends UE.Character {

    ReceiveBeginPlay(): void {
        let ViewClass = UE.Class.Load("WidgetBlueprint'/Game/测试UI.测试UI_C'");
        let Temp = UE.UMGManager.CreateWidget(this.GetWorld(),ViewClass) as UI;
        Temp.TextBlock_0.SetText("TS_测试Player");
        Temp.AddToViewport(0);
    }
}
export default TS_测试Player