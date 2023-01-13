import * as UE from 'ue'
 
type UI = UE.Game.TestUI.TestUI_C;

class TS_Player1 extends UE.Character {

    ReceiveBeginPlay(): void {
        let ViewClass = UE.Class.Load("WidgetBlueprint'/Game/TestUI.TestUI_C'");
        let Temp = UE.UMGManager.CreateWidget(this.GetWorld(),ViewClass) as UI;
        Temp.TextBlock_0.SetText("TS_Player1");
        Temp.AddToViewport(0);
    }
}
export default TS_Player1