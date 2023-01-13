declare module "react-umg" {
    import * as React from 'react';
    import * as UE from 'ue';
    import * as cpp from 'cpp';
    type TArray<T> = UE.TArray<T>;
    type TSet<T> = UE.TSet<T>;
    type TMap<TKey, TValue> = UE.TMap<TKey, TValue>;

    type RecursivePartial<T> = {
        [P in keyof T]?:
        T[P] extends (infer U)[] ? RecursivePartial<U>[] :
        T[P] extends object ? RecursivePartial<T[P]> :
        T[P];
    };

    interface PanelSlot {
    }

    interface BackgroundBlurSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface BorderSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface ButtonSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface CanvasPanelSlot extends PanelSlot {
        LayoutData?: RecursivePartial<UE.AnchorData>;
        bAutoSize?: boolean;
        ZOrder?: number;
    }

    interface GridSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
        Row?: number;
        RowSpan?: number;
        Column?: number;
        ColumnSpan?: number;
        Layer?: number;
        Nudge?: RecursivePartial<UE.Vector2D>;
    }

    interface HorizontalBoxSlot extends PanelSlot {
        Size?: RecursivePartial<UE.SlateChildSize>;
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface OverlaySlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface SafeZoneSlot extends PanelSlot {
        bIsTitleSafe?: boolean;
        SafeAreaScale?: RecursivePartial<UE.Margin>;
        HAlign?: UE.EHorizontalAlignment;
        VAlign?: UE.EVerticalAlignment;
        Padding?: RecursivePartial<UE.Margin>;
    }

    interface ScaleBoxSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface ScrollBoxSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface SizeBoxSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface StackBoxSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        Size?: RecursivePartial<UE.SlateChildSize>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface UniformGridSlot extends PanelSlot {
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
        Row?: number;
        Column?: number;
    }

    interface VerticalBoxSlot extends PanelSlot {
        Size?: RecursivePartial<UE.SlateChildSize>;
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface WidgetSwitcherSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface WindowTitleBarAreaSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
    }

    interface WrapBoxSlot extends PanelSlot {
        Padding?: RecursivePartial<UE.Margin>;
        FillSpanWhenLessThan?: number;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
        bFillEmptySpace?: boolean;
        bForceNewLine?: boolean;
    }

    export interface Props {
        Slot ? : PanelSlot;
    }

    interface WidgetProps extends Props {
        bIsEnabledDelegate?: () => boolean;
        ToolTipText?: string;
        ToolTipTextDelegate?: () => string;
        VisibilityDelegate?: () => UE.ESlateVisibility;
        RenderTransform?: RecursivePartial<UE.WidgetTransform>;
        RenderTransformPivot?: RecursivePartial<UE.Vector2D>;
        FlowDirectionPreference?: UE.EFlowDirectionPreference;
        bIsVariable?: boolean;
        bCreatedByConstructionScript?: boolean;
        bIsEnabled?: boolean;
        bOverride_Cursor?: boolean;
        bOverrideAccessibleDefaults?: boolean;
        bCanChildrenBeAccessible?: boolean;
        AccessibleBehavior?: UE.ESlateAccessibleBehavior;
        AccessibleSummaryBehavior?: UE.ESlateAccessibleBehavior;
        AccessibleText?: string;
        AccessibleTextDelegate?: () => string;
        AccessibleSummaryText?: string;
        AccessibleSummaryTextDelegate?: () => string;
        bIsVolatile?: boolean;
        bHiddenInDesigner?: boolean;
        bExpandedInDesigner?: boolean;
        bLockedInDesigner?: boolean;
        Cursor?: UE.EMouseCursor;
        Clipping?: UE.EWidgetClipping;
        Visibility?: UE.ESlateVisibility;
        RenderOpacity?: number;
        DesignerFlags?: number;
        DisplayLabel?: string;
        CategoryName?: string;
    }

    class Widget extends React.Component<WidgetProps> {
        nativePtr: UE.Widget;
    }

    interface UserWidgetProps extends WidgetProps {
        ColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        ColorAndOpacityDelegate?: () => UE.LinearColor;
        ForegroundColor?: RecursivePartial<UE.SlateColor>;
        ForegroundColorDelegate?: () => UE.SlateColor;
        OnVisibilityChanged?: (InVisibility: UE.ESlateVisibility) => void;
        Padding?: RecursivePartial<UE.Margin>;
        NamedSlotBindings?: TArray<UE.NamedSlotBinding>;
        DesignTimeSize?: RecursivePartial<UE.Vector2D>;
        DesignSizeMode?: UE.EDesignPreviewSizeMode;
        PaletteCategory?: string;
        Priority?: number;
        bIsFocusable?: boolean;
        bStopAction?: boolean;
        bHasScriptImplementedTick?: boolean;
        bHasScriptImplementedPaint?: boolean;
        TickFrequency?: UE.EWidgetTickFrequency;
        AnimationCallbacks?: TArray<UE.AnimationEventBinding>;
    }

    class UserWidget extends React.Component<UserWidgetProps> {
        nativePtr: UE.UserWidget;
    }

    interface VREditorBaseUserWidgetProps extends UserWidgetProps {
    }

    class VREditorBaseUserWidget extends React.Component<VREditorBaseUserWidgetProps> {
        nativePtr: UE.VREditorBaseUserWidget;
    }

    interface ListViewBaseProps extends WidgetProps {
        WheelScrollMultiplier?: number;
        bEnableScrollAnimation?: boolean;
        AllowOverscroll?: boolean;
        bEnableRightClickScrolling?: boolean;
        bEnableFixedLineOffset?: boolean;
        FixedLineScrollOffset?: number;
        bAllowDragging?: boolean;
        NumDesignerPreviewEntries?: number;
        EntryWidgetPool?: RecursivePartial<UE.UserWidgetPool>;
    }

    class ListViewBase extends React.Component<ListViewBaseProps> {
        nativePtr: UE.ListViewBase;
    }

    interface ListViewProps extends ListViewBaseProps {
        WidgetStyle?: RecursivePartial<UE.TableViewStyle>;
        ScrollBarStyle?: RecursivePartial<UE.ScrollBarStyle>;
        Orientation?: UE.EOrientation;
        SelectionMode?: UE.ESelectionMode;
        ConsumeMouseWheel?: UE.EConsumeMouseWheel;
        bClearSelectionOnClick?: boolean;
        bIsFocusable?: boolean;
        EntrySpacing?: number;
        bReturnFocusToSelection?: boolean;
    }

    class ListView extends React.Component<ListViewProps> {
        nativePtr: UE.ListView;
    }

    interface PanelWidgetProps extends WidgetProps {
    }

    class PanelWidget extends React.Component<PanelWidgetProps> {
        nativePtr: UE.PanelWidget;
    }

    interface ContentWidgetProps extends PanelWidgetProps {
    }

    class ContentWidget extends React.Component<ContentWidgetProps> {
        nativePtr: UE.ContentWidget;
    }

    interface BackgroundBlurProps extends ContentWidgetProps {
        Padding?: RecursivePartial<UE.Margin>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
        bApplyAlphaToBlur?: boolean;
        BlurStrength?: number;
        bOverrideAutoRadiusCalculation?: boolean;
        BlurRadius?: number;
        CornerRadius?: RecursivePartial<UE.Vector4>;
        LowQualityFallbackBrush?: RecursivePartial<UE.SlateBrush>;
    }

    class BackgroundBlur extends React.Component<BackgroundBlurProps> {
        nativePtr: UE.BackgroundBlur;
    }

    interface BorderProps extends ContentWidgetProps {
        HorizontalAlignment?: UE.EHorizontalAlignment;
        VerticalAlignment?: UE.EVerticalAlignment;
        bShowEffectWhenDisabled?: boolean;
        ContentColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        ContentColorAndOpacityDelegate?: () => UE.LinearColor;
        Padding?: RecursivePartial<UE.Margin>;
        Background?: RecursivePartial<UE.SlateBrush>;
        BackgroundDelegate?: () => UE.SlateBrush;
        BrushColor?: RecursivePartial<UE.LinearColor>;
        BrushColorDelegate?: () => UE.LinearColor;
        DesiredSizeScale?: RecursivePartial<UE.Vector2D>;
        bFlipForRightToLeftFlowDirection?: boolean;
        OnMouseButtonDownEvent?: (MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) => UE.EventReply;
        OnMouseButtonUpEvent?: (MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) => UE.EventReply;
        OnMouseMoveEvent?: (MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) => UE.EventReply;
        OnMouseDoubleClickEvent?: (MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) => UE.EventReply;
    }

    class Border extends React.Component<BorderProps> {
        nativePtr: UE.Border;
    }

    interface ButtonProps extends ContentWidgetProps {
        WidgetStyle?: RecursivePartial<UE.ButtonStyle>;
        ColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        BackgroundColor?: RecursivePartial<UE.LinearColor>;
        ClickMethod?: UE.EButtonClickMethod;
        TouchMethod?: UE.EButtonTouchMethod;
        PressMethod?: UE.EButtonPressMethod;
        IsFocusable?: boolean;
        OnClicked?: () => void;
        OnPressed?: () => void;
        OnReleased?: () => void;
        OnHovered?: () => void;
        OnUnhovered?: () => void;
    }

    class Button extends React.Component<ButtonProps> {
        nativePtr: UE.Button;
    }

    interface CanvasPanelProps extends PanelWidgetProps {
    }

    class CanvasPanel extends React.Component<CanvasPanelProps> {
        nativePtr: UE.CanvasPanel;
    }

    interface CheckBoxProps extends ContentWidgetProps {
        CheckedState?: UE.ECheckBoxState;
        CheckedStateDelegate?: () => UE.ECheckBoxState;
        WidgetStyle?: RecursivePartial<UE.CheckBoxStyle>;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        ClickMethod?: UE.EButtonClickMethod;
        TouchMethod?: UE.EButtonTouchMethod;
        PressMethod?: UE.EButtonPressMethod;
        IsFocusable?: boolean;
        OnCheckStateChanged?: (bIsChecked: boolean) => void;
    }

    class CheckBox extends React.Component<CheckBoxProps> {
        nativePtr: UE.CheckBox;
    }

    interface CircularThrobberProps extends WidgetProps {
        NumberOfPieces?: number;
        Period?: number;
        Radius?: number;
        Image?: RecursivePartial<UE.SlateBrush>;
        bEnableRadius?: boolean;
    }

    class CircularThrobber extends React.Component<CircularThrobberProps> {
        nativePtr: UE.CircularThrobber;
    }

    interface ComboBoxProps extends WidgetProps {
        bIsFocusable?: boolean;
    }

    class ComboBox extends React.Component<ComboBoxProps> {
        nativePtr: UE.ComboBox;
    }

    interface ComboBoxKeyProps extends WidgetProps {
        Options?: TArray<string>;
        SelectedOption?: string;
        WidgetStyle?: RecursivePartial<UE.ComboBoxStyle>;
        ItemStyle?: RecursivePartial<UE.TableRowStyle>;
        ForegroundColor?: RecursivePartial<UE.SlateColor>;
        ContentPadding?: RecursivePartial<UE.Margin>;
        MaxListHeight?: number;
        bHasDownArrow?: boolean;
        bEnableGamepadNavigationMode?: boolean;
        bIsFocusable?: boolean;
        OnSelectionChanged?: (SelectedItem: string, SelectionType: UE.ESelectInfo) => void;
        OnOpening?: () => void;
    }

    class ComboBoxKey extends React.Component<ComboBoxKeyProps> {
        nativePtr: UE.ComboBoxKey;
    }

    interface ComboBoxStringProps extends WidgetProps {
        DefaultOptions?: TArray<string>;
        SelectedOption?: string;
        WidgetStyle?: RecursivePartial<UE.ComboBoxStyle>;
        ItemStyle?: RecursivePartial<UE.TableRowStyle>;
        ContentPadding?: RecursivePartial<UE.Margin>;
        MaxListHeight?: number;
        HasDownArrow?: boolean;
        EnableGamepadNavigationMode?: boolean;
        Font?: RecursivePartial<UE.SlateFontInfo>;
        ForegroundColor?: RecursivePartial<UE.SlateColor>;
        bIsFocusable?: boolean;
        OnSelectionChanged?: (SelectedItem: string, SelectionType: UE.ESelectInfo) => void;
        OnOpening?: () => void;
    }

    class ComboBoxString extends React.Component<ComboBoxStringProps> {
        nativePtr: UE.ComboBoxString;
    }

    interface DynamicEntryBoxBaseProps extends WidgetProps {
        EntryBoxType?: UE.EDynamicBoxType;
        EntrySpacing?: RecursivePartial<UE.Vector2D>;
        SpacingPattern?: TArray<UE.Vector2D>;
        EntrySizeRule?: RecursivePartial<UE.SlateChildSize>;
        EntryHorizontalAlignment?: UE.EHorizontalAlignment;
        EntryVerticalAlignment?: UE.EVerticalAlignment;
        MaxElementSize?: number;
        RadialBoxSettings?: RecursivePartial<UE.RadialBoxSettings>;
        EntryWidgetPool?: RecursivePartial<UE.UserWidgetPool>;
    }

    class DynamicEntryBoxBase extends React.Component<DynamicEntryBoxBaseProps> {
        nativePtr: UE.DynamicEntryBoxBase;
    }

    interface DynamicEntryBoxProps extends DynamicEntryBoxBaseProps {
        NumDesignerPreviewEntries?: number;
    }

    class DynamicEntryBox extends React.Component<DynamicEntryBoxProps> {
        nativePtr: UE.DynamicEntryBox;
    }

    interface EditableTextProps extends WidgetProps {
        Text?: string;
        TextDelegate?: () => string;
        HintText?: string;
        HintTextDelegate?: () => string;
        WidgetStyle?: RecursivePartial<UE.EditableTextStyle>;
        IsReadOnly?: boolean;
        IsPassword?: boolean;
        MinimumDesiredWidth?: number;
        IsCaretMovedWhenGainFocus?: boolean;
        SelectAllTextWhenFocused?: boolean;
        RevertTextOnEscape?: boolean;
        ClearKeyboardFocusOnCommit?: boolean;
        SelectAllTextOnCommit?: boolean;
        AllowContextMenu?: boolean;
        KeyboardType?: UE.EVirtualKeyboardType;
        VirtualKeyboardOptions?: RecursivePartial<UE.VirtualKeyboardOptions>;
        VirtualKeyboardTrigger?: UE.EVirtualKeyboardTrigger;
        VirtualKeyboardDismissAction?: UE.EVirtualKeyboardDismissAction;
        Justification?: UE.ETextJustify;
        OverflowPolicy?: UE.ETextOverflowPolicy;
        ShapedTextOptions?: RecursivePartial<UE.ShapedTextOptions>;
        OnTextChanged?: (Text: string) => void;
        OnTextCommitted?: (Text: string, CommitMethod: UE.ETextCommit) => void;
    }

    class EditableText extends React.Component<EditableTextProps> {
        nativePtr: UE.EditableText;
    }

    interface EditableTextBoxProps extends WidgetProps {
        Text?: string;
        TextDelegate?: () => string;
        WidgetStyle?: RecursivePartial<UE.EditableTextBoxStyle>;
        HintText?: string;
        HintTextDelegate?: () => string;
        IsReadOnly?: boolean;
        IsPassword?: boolean;
        MinimumDesiredWidth?: number;
        IsCaretMovedWhenGainFocus?: boolean;
        SelectAllTextWhenFocused?: boolean;
        RevertTextOnEscape?: boolean;
        ClearKeyboardFocusOnCommit?: boolean;
        SelectAllTextOnCommit?: boolean;
        AllowContextMenu?: boolean;
        KeyboardType?: UE.EVirtualKeyboardType;
        VirtualKeyboardOptions?: RecursivePartial<UE.VirtualKeyboardOptions>;
        VirtualKeyboardTrigger?: UE.EVirtualKeyboardTrigger;
        VirtualKeyboardDismissAction?: UE.EVirtualKeyboardDismissAction;
        Justification?: UE.ETextJustify;
        OverflowPolicy?: UE.ETextOverflowPolicy;
        ShapedTextOptions?: RecursivePartial<UE.ShapedTextOptions>;
        OnTextChanged?: (Text: string) => void;
        OnTextCommitted?: (Text: string, CommitMethod: UE.ETextCommit) => void;
        bIsFontDeprecationDone?: boolean;
    }

    class EditableTextBox extends React.Component<EditableTextBoxProps> {
        nativePtr: UE.EditableTextBox;
    }

    interface ExpandableAreaProps extends WidgetProps {
        Style?: RecursivePartial<UE.ExpandableAreaStyle>;
        BorderBrush?: RecursivePartial<UE.SlateBrush>;
        BorderColor?: RecursivePartial<UE.SlateColor>;
        bIsExpanded?: boolean;
        MaxHeight?: number;
        HeaderPadding?: RecursivePartial<UE.Margin>;
        AreaPadding?: RecursivePartial<UE.Margin>;
    }

    class ExpandableArea extends React.Component<ExpandableAreaProps> {
        nativePtr: UE.ExpandableArea;
    }

    interface GridPanelProps extends PanelWidgetProps {
        ColumnFill?: TArray<number>;
        RowFill?: TArray<number>;
    }

    class GridPanel extends React.Component<GridPanelProps> {
        nativePtr: UE.GridPanel;
    }

    interface HorizontalBoxProps extends PanelWidgetProps {
    }

    class HorizontalBox extends React.Component<HorizontalBoxProps> {
        nativePtr: UE.HorizontalBox;
    }

    interface ImageProps extends WidgetProps {
        Brush?: RecursivePartial<UE.SlateBrush>;
        BrushDelegate?: () => UE.SlateBrush;
        ColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        ColorAndOpacityDelegate?: () => UE.LinearColor;
        bFlipForRightToLeftFlowDirection?: boolean;
        OnMouseButtonDownEvent?: (MyGeometry: UE.Geometry, MouseEvent: UE.PointerEvent) => UE.EventReply;
    }

    class Image extends React.Component<ImageProps> {
        nativePtr: UE.Image;
    }

    interface InputKeySelectorProps extends WidgetProps {
        WidgetStyle?: RecursivePartial<UE.ButtonStyle>;
        TextStyle?: RecursivePartial<UE.TextBlockStyle>;
        SelectedKey?: RecursivePartial<UE.InputChord>;
        Margin?: RecursivePartial<UE.Margin>;
        KeySelectionText?: string;
        NoKeySpecifiedText?: string;
        bAllowModifierKeys?: boolean;
        bAllowGamepadKeys?: boolean;
        EscapeKeys?: TArray<UE.Key>;
        OnKeySelected?: (SelectedKey: UE.InputChord) => void;
        OnIsSelectingKeyChanged?: () => void;
    }

    class InputKeySelector extends React.Component<InputKeySelectorProps> {
        nativePtr: UE.InputKeySelector;
    }

    interface InvalidationBoxProps extends ContentWidgetProps {
        bCanCache?: boolean;
        CacheRelativeTransforms?: boolean;
    }

    class InvalidationBox extends React.Component<InvalidationBoxProps> {
        nativePtr: UE.InvalidationBox;
    }

    interface MenuAnchorProps extends ContentWidgetProps {
        Placement?: UE.EMenuPlacement;
        bFitInWindow?: boolean;
        ShouldDeferPaintingAfterWindowContent?: boolean;
        UseApplicationMenuStack?: boolean;
        OnMenuOpenChanged?: (bIsOpen: boolean) => void;
    }

    class MenuAnchor extends React.Component<MenuAnchorProps> {
        nativePtr: UE.MenuAnchor;
    }

    interface TextLayoutWidgetProps extends WidgetProps {
        ShapedTextOptions?: RecursivePartial<UE.ShapedTextOptions>;
        Justification?: UE.ETextJustify;
        WrappingPolicy?: UE.ETextWrappingPolicy;
        AutoWrapText?: boolean;
        WrapTextAt?: number;
        Margin?: RecursivePartial<UE.Margin>;
        LineHeightPercentage?: number;
    }

    class TextLayoutWidget extends React.Component<TextLayoutWidgetProps> {
        nativePtr: UE.TextLayoutWidget;
    }

    interface MultiLineEditableTextProps extends TextLayoutWidgetProps {
        Text?: string;
        HintText?: string;
        HintTextDelegate?: () => string;
        WidgetStyle?: RecursivePartial<UE.TextBlockStyle>;
        bIsReadOnly?: boolean;
        SelectAllTextWhenFocused?: boolean;
        ClearTextSelectionOnFocusLoss?: boolean;
        RevertTextOnEscape?: boolean;
        ClearKeyboardFocusOnCommit?: boolean;
        AllowContextMenu?: boolean;
        VirtualKeyboardOptions?: RecursivePartial<UE.VirtualKeyboardOptions>;
        VirtualKeyboardDismissAction?: UE.EVirtualKeyboardDismissAction;
        OnTextChanged?: (Text: string) => void;
        OnTextCommitted?: (Text: string, CommitMethod: UE.ETextCommit) => void;
    }

    class MultiLineEditableText extends React.Component<MultiLineEditableTextProps> {
        nativePtr: UE.MultiLineEditableText;
    }

    interface MultiLineEditableTextBoxProps extends TextLayoutWidgetProps {
        Text?: string;
        HintText?: string;
        HintTextDelegate?: () => string;
        WidgetStyle?: RecursivePartial<UE.EditableTextBoxStyle>;
        TextStyle?: RecursivePartial<UE.TextBlockStyle>;
        bIsReadOnly?: boolean;
        AllowContextMenu?: boolean;
        VirtualKeyboardOptions?: RecursivePartial<UE.VirtualKeyboardOptions>;
        VirtualKeyboardDismissAction?: UE.EVirtualKeyboardDismissAction;
        OnTextChanged?: (Text: string) => void;
        OnTextCommitted?: (Text: string, CommitMethod: UE.ETextCommit) => void;
        bIsFontDeprecationDone?: boolean;
    }

    class MultiLineEditableTextBox extends React.Component<MultiLineEditableTextBoxProps> {
        nativePtr: UE.MultiLineEditableTextBox;
    }

    interface NamedSlotProps extends ContentWidgetProps {
        bExposeOnInstanceOnly?: boolean;
    }

    class NamedSlot extends React.Component<NamedSlotProps> {
        nativePtr: UE.NamedSlot;
    }

    interface NativeWidgetHostProps extends WidgetProps {
    }

    class NativeWidgetHost extends React.Component<NativeWidgetHostProps> {
        nativePtr: UE.NativeWidgetHost;
    }

    interface OverlayProps extends PanelWidgetProps {
    }

    class Overlay extends React.Component<OverlayProps> {
        nativePtr: UE.Overlay;
    }

    interface ProgressBarProps extends WidgetProps {
        WidgetStyle?: RecursivePartial<UE.ProgressBarStyle>;
        Percent?: number;
        BarFillType?: UE.EProgressBarFillType;
        BarFillStyle?: UE.EProgressBarFillStyle;
        bIsMarquee?: boolean;
        BorderPadding?: RecursivePartial<UE.Vector2D>;
        PercentDelegate?: () => number;
        FillColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        FillColorAndOpacityDelegate?: () => UE.LinearColor;
    }

    class ProgressBar extends React.Component<ProgressBarProps> {
        nativePtr: UE.ProgressBar;
    }

    interface RetainerBoxProps extends ContentWidgetProps {
        bRetainRender?: boolean;
        RenderOnInvalidation?: boolean;
        RenderOnPhase?: boolean;
        Phase?: number;
        PhaseCount?: number;
        TextureParameter?: string;
    }

    class RetainerBox extends React.Component<RetainerBoxProps> {
        nativePtr: UE.RetainerBox;
    }

    interface RichTextBlockProps extends TextLayoutWidgetProps {
        Text?: string;
        bOverrideDefaultStyle?: boolean;
        DefaultTextStyleOverride?: RecursivePartial<UE.TextBlockStyle>;
        MinDesiredWidth?: number;
        TextTransformPolicy?: UE.ETextTransformPolicy;
        TextOverflowPolicy?: UE.ETextOverflowPolicy;
        DefaultTextStyle?: RecursivePartial<UE.TextBlockStyle>;
    }

    class RichTextBlock extends React.Component<RichTextBlockProps> {
        nativePtr: UE.RichTextBlock;
    }

    interface SafeZoneProps extends ContentWidgetProps {
        PadLeft?: boolean;
        PadRight?: boolean;
        PadTop?: boolean;
        PadBottom?: boolean;
    }

    class SafeZone extends React.Component<SafeZoneProps> {
        nativePtr: UE.SafeZone;
    }

    interface ScaleBoxProps extends ContentWidgetProps {
        Stretch?: UE.EStretch;
        StretchDirection?: UE.EStretchDirection;
        UserSpecifiedScale?: number;
        IgnoreInheritedScale?: boolean;
    }

    class ScaleBox extends React.Component<ScaleBoxProps> {
        nativePtr: UE.ScaleBox;
    }

    interface ScrollBarProps extends WidgetProps {
        WidgetStyle?: RecursivePartial<UE.ScrollBarStyle>;
        bAlwaysShowScrollbar?: boolean;
        bAlwaysShowScrollbarTrack?: boolean;
        Orientation?: UE.EOrientation;
        Thickness?: RecursivePartial<UE.Vector2D>;
        Padding?: RecursivePartial<UE.Margin>;
    }

    class ScrollBar extends React.Component<ScrollBarProps> {
        nativePtr: UE.ScrollBar;
    }

    interface ScrollBoxProps extends PanelWidgetProps {
        WidgetStyle?: RecursivePartial<UE.ScrollBoxStyle>;
        WidgetBarStyle?: RecursivePartial<UE.ScrollBarStyle>;
        Orientation?: UE.EOrientation;
        ScrollBarVisibility?: UE.ESlateVisibility;
        ConsumeMouseWheel?: UE.EConsumeMouseWheel;
        ScrollbarThickness?: RecursivePartial<UE.Vector2D>;
        ScrollbarPadding?: RecursivePartial<UE.Margin>;
        AlwaysShowScrollbar?: boolean;
        AlwaysShowScrollbarTrack?: boolean;
        AllowOverscroll?: boolean;
        BackPadScrolling?: boolean;
        FrontPadScrolling?: boolean;
        bAnimateWheelScrolling?: boolean;
        NavigationDestination?: UE.EDescendantScrollDestination;
        NavigationScrollPadding?: number;
        ScrollWhenFocusChanges?: UE.EScrollWhenFocusChanges;
        bAllowRightClickDragScrolling?: boolean;
        WheelScrollMultiplier?: number;
        OnUserScrolled?: (CurrentOffset: number) => void;
    }

    class ScrollBox extends React.Component<ScrollBoxProps> {
        nativePtr: UE.ScrollBox;
    }

    interface SizeBoxProps extends ContentWidgetProps {
        WidthOverride?: number;
        HeightOverride?: number;
        MinDesiredWidth?: number;
        MinDesiredHeight?: number;
        MaxDesiredWidth?: number;
        MaxDesiredHeight?: number;
        MinAspectRatio?: number;
        MaxAspectRatio?: number;
        bOverride_WidthOverride?: boolean;
        bOverride_HeightOverride?: boolean;
        bOverride_MinDesiredWidth?: boolean;
        bOverride_MinDesiredHeight?: boolean;
        bOverride_MaxDesiredWidth?: boolean;
        bOverride_MaxDesiredHeight?: boolean;
        bOverride_MinAspectRatio?: boolean;
        bOverride_MaxAspectRatio?: boolean;
    }

    class SizeBox extends React.Component<SizeBoxProps> {
        nativePtr: UE.SizeBox;
    }

    interface SliderProps extends WidgetProps {
        Value?: number;
        ValueDelegate?: () => number;
        MinValue?: number;
        MaxValue?: number;
        WidgetStyle?: RecursivePartial<UE.SliderStyle>;
        Orientation?: UE.EOrientation;
        SliderBarColor?: RecursivePartial<UE.LinearColor>;
        SliderHandleColor?: RecursivePartial<UE.LinearColor>;
        IndentHandle?: boolean;
        Locked?: boolean;
        MouseUsesStep?: boolean;
        RequiresControllerLock?: boolean;
        StepSize?: number;
        IsFocusable?: boolean;
        OnMouseCaptureBegin?: () => void;
        OnMouseCaptureEnd?: () => void;
        OnControllerCaptureBegin?: () => void;
        OnControllerCaptureEnd?: () => void;
        OnValueChanged?: (Value: number) => void;
    }

    class Slider extends React.Component<SliderProps> {
        nativePtr: UE.Slider;
    }

    interface SpacerProps extends WidgetProps {
        Size?: RecursivePartial<UE.Vector2D>;
    }

    class Spacer extends React.Component<SpacerProps> {
        nativePtr: UE.Spacer;
    }

    interface SpinBoxProps extends WidgetProps {
        Value?: number;
        ValueDelegate?: () => number;
        WidgetStyle?: RecursivePartial<UE.SpinBoxStyle>;
        MinFractionalDigits?: number;
        MaxFractionalDigits?: number;
        bAlwaysUsesDeltaSnap?: boolean;
        bEnableSlider?: boolean;
        Delta?: number;
        SliderExponent?: number;
        Font?: RecursivePartial<UE.SlateFontInfo>;
        Justification?: UE.ETextJustify;
        MinDesiredWidth?: number;
        KeyboardType?: UE.EVirtualKeyboardType;
        ClearKeyboardFocusOnCommit?: boolean;
        SelectAllTextOnCommit?: boolean;
        ForegroundColor?: RecursivePartial<UE.SlateColor>;
        OnValueChanged?: (InValue: number) => void;
        OnValueCommitted?: (InValue: number, CommitMethod: UE.ETextCommit) => void;
        OnBeginSliderMovement?: () => void;
        OnEndSliderMovement?: (InValue: number) => void;
        bOverride_MinValue?: boolean;
        bOverride_MaxValue?: boolean;
        bOverride_MinSliderValue?: boolean;
        bOverride_MaxSliderValue?: boolean;
        MinValue?: number;
        MaxValue?: number;
        MinSliderValue?: number;
        MaxSliderValue?: number;
    }

    class SpinBox extends React.Component<SpinBoxProps> {
        nativePtr: UE.SpinBox;
    }

    interface StackBoxProps extends PanelWidgetProps {
        Orientation?: UE.EOrientation;
    }

    class StackBox extends React.Component<StackBoxProps> {
        nativePtr: UE.StackBox;
    }

    interface TextBlockProps extends TextLayoutWidgetProps {
        Text?: string;
        TextDelegate?: () => string;
        ColorAndOpacity?: RecursivePartial<UE.SlateColor>;
        ColorAndOpacityDelegate?: () => UE.SlateColor;
        Font?: RecursivePartial<UE.SlateFontInfo>;
        StrikeBrush?: RecursivePartial<UE.SlateBrush>;
        ShadowOffset?: RecursivePartial<UE.Vector2D>;
        ShadowColorAndOpacity?: RecursivePartial<UE.LinearColor>;
        ShadowColorAndOpacityDelegate?: () => UE.LinearColor;
        MinDesiredWidth?: number;
        bWrapWithInvalidationPanel?: boolean;
        TextTransformPolicy?: UE.ETextTransformPolicy;
        TextOverflowPolicy?: UE.ETextOverflowPolicy;
        bSimpleTextMode?: boolean;
    }

    class TextBlock extends React.Component<TextBlockProps> {
        nativePtr: UE.TextBlock;
    }

    interface ThrobberProps extends WidgetProps {
        NumberOfPieces?: number;
        bAnimateHorizontally?: boolean;
        bAnimateVertically?: boolean;
        bAnimateOpacity?: boolean;
        Image?: RecursivePartial<UE.SlateBrush>;
    }

    class Throbber extends React.Component<ThrobberProps> {
        nativePtr: UE.Throbber;
    }

    interface TileViewProps extends ListViewProps {
        EntryHeight?: number;
        EntryWidth?: number;
        TileAlignment?: UE.EListItemAlignment;
        bWrapHorizontalNavigation?: boolean;
    }

    class TileView extends React.Component<TileViewProps> {
        nativePtr: UE.TileView;
    }

    interface TreeViewProps extends ListViewProps {
    }

    class TreeView extends React.Component<TreeViewProps> {
        nativePtr: UE.TreeView;
    }

    interface UniformGridPanelProps extends PanelWidgetProps {
        SlotPadding?: RecursivePartial<UE.Margin>;
        MinDesiredSlotWidth?: number;
        MinDesiredSlotHeight?: number;
    }

    class UniformGridPanel extends React.Component<UniformGridPanelProps> {
        nativePtr: UE.UniformGridPanel;
    }

    interface VerticalBoxProps extends PanelWidgetProps {
    }

    class VerticalBox extends React.Component<VerticalBoxProps> {
        nativePtr: UE.VerticalBox;
    }

    interface ViewportProps extends ContentWidgetProps {
        BackgroundColor?: RecursivePartial<UE.LinearColor>;
    }

    class Viewport extends React.Component<ViewportProps> {
        nativePtr: UE.Viewport;
    }

    interface WidgetSwitcherProps extends PanelWidgetProps {
        ActiveWidgetIndex?: number;
    }

    class WidgetSwitcher extends React.Component<WidgetSwitcherProps> {
        nativePtr: UE.WidgetSwitcher;
    }

    interface WindowTitleBarAreaProps extends ContentWidgetProps {
        bWindowButtonsEnabled?: boolean;
        bDoubleClickTogglesFullscreen?: boolean;
    }

    class WindowTitleBarArea extends React.Component<WindowTitleBarAreaProps> {
        nativePtr: UE.WindowTitleBarArea;
    }

    interface WrapBoxProps extends PanelWidgetProps {
        InnerSlotPadding?: RecursivePartial<UE.Vector2D>;
        WrapSize?: number;
        bExplicitWrapSize?: boolean;
        HorizontalAlignment?: UE.EHorizontalAlignment;
        Orientation?: UE.EOrientation;
    }

    class WrapBox extends React.Component<WrapBoxProps> {
        nativePtr: UE.WrapBox;
    }

    interface LevelSequenceBurnInProps extends UserWidgetProps {
        FrameInformation?: RecursivePartial<UE.LevelSequencePlayerSnapshot>;
    }

    class LevelSequenceBurnIn extends React.Component<LevelSequenceBurnInProps> {
        nativePtr: UE.LevelSequenceBurnIn;
    }

    interface PropertyViewBaseProps extends WidgetProps {
        SoftObjectPath?: RecursivePartial<UE.SoftObjectPath>;
        bAutoLoadAsset?: boolean;
        OnPropertyChanged?: (PropertyName: string) => void;
    }

    class PropertyViewBase extends React.Component<PropertyViewBaseProps> {
        nativePtr: UE.PropertyViewBase;
    }

    interface DetailsViewProps extends PropertyViewBaseProps {
        bAllowFiltering?: boolean;
        bAllowFavoriteSystem?: boolean;
        bShowModifiedPropertiesOption?: boolean;
        bShowKeyablePropertiesOption?: boolean;
        bShowAnimatedPropertiesOption?: boolean;
        ColumnWidth?: number;
        bShowScrollBar?: boolean;
        bForceHiddenPropertyVisibility?: boolean;
        ViewIdentifier?: string;
        CategoriesToShow?: TArray<string>;
        PropertiesToShow?: TArray<string>;
        bShowOnlyAllowed?: boolean;
    }

    class DetailsView extends React.Component<DetailsViewProps> {
        nativePtr: UE.DetailsView;
    }

    interface SinglePropertyViewProps extends PropertyViewBaseProps {
        PropertyName?: string;
        NameOverride?: string;
    }

    class SinglePropertyView extends React.Component<SinglePropertyViewProps> {
        nativePtr: UE.SinglePropertyView;
    }

    interface TakeRecorderOverlayWidgetProps extends UserWidgetProps {
    }

    class TakeRecorderOverlayWidget extends React.Component<TakeRecorderOverlayWidgetProps> {
        nativePtr: UE.TakeRecorderOverlayWidget;
    }

    interface EditorUtilityWidgetProps extends UserWidgetProps {
        HelpText?: string;
        bAlwaysReregisterWithWindowsMenu?: boolean;
        bAutoRunDefaultAction?: boolean;
    }

    class EditorUtilityWidget extends React.Component<EditorUtilityWidgetProps> {
        nativePtr: UE.EditorUtilityWidget;
    }

    interface RadialSliderProps extends WidgetProps {
        Value?: number;
        ValueDelegate?: () => number;
        bUseCustomDefaultValue?: boolean;
        CustomDefaultValue?: number;
        SliderRange?: RecursivePartial<UE.RuntimeFloatCurve>;
        ValueTags?: TArray<number>;
        SliderHandleStartAngle?: number;
        SliderHandleEndAngle?: number;
        AngularOffset?: number;
        HandStartEndRatio?: RecursivePartial<UE.Vector2D>;
        WidgetStyle?: RecursivePartial<UE.SliderStyle>;
        SliderBarColor?: RecursivePartial<UE.LinearColor>;
        SliderProgressColor?: RecursivePartial<UE.LinearColor>;
        SliderHandleColor?: RecursivePartial<UE.LinearColor>;
        CenterBackgroundColor?: RecursivePartial<UE.LinearColor>;
        Locked?: boolean;
        MouseUsesStep?: boolean;
        RequiresControllerLock?: boolean;
        StepSize?: number;
        IsFocusable?: boolean;
        UseVerticalDrag?: boolean;
        ShowSliderHandle?: boolean;
        ShowSliderHand?: boolean;
        OnMouseCaptureBegin?: () => void;
        OnMouseCaptureEnd?: () => void;
        OnControllerCaptureBegin?: () => void;
        OnControllerCaptureEnd?: () => void;
        OnValueChanged?: (Value: number) => void;
    }

    class RadialSlider extends React.Component<RadialSliderProps> {
        nativePtr: UE.RadialSlider;
    }

    interface AudioMeterProps extends WidgetProps {
        MeterChannelInfo?: TArray<UE.MeterChannelInfo>;
        MeterChannelInfoDelegate?: () => TArray<UE.MeterChannelInfo>;
        WidgetStyle?: RecursivePartial<UE.AudioMeterStyle>;
        Orientation?: UE.EOrientation;
        BackgroundColor?: RecursivePartial<UE.LinearColor>;
        MeterBackgroundColor?: RecursivePartial<UE.LinearColor>;
        MeterValueColor?: RecursivePartial<UE.LinearColor>;
        MeterPeakColor?: RecursivePartial<UE.LinearColor>;
        MeterClippingColor?: RecursivePartial<UE.LinearColor>;
        MeterScaleColor?: RecursivePartial<UE.LinearColor>;
        MeterScaleLabelColor?: RecursivePartial<UE.LinearColor>;
    }

    class AudioMeter extends React.Component<AudioMeterProps> {
        nativePtr: UE.AudioMeter;
    }

    interface AudioRadialSliderProps extends WidgetProps {
        Value?: number;
        ValueDelegate?: () => number;
        WidgetLayout?: UE.EAudioRadialSliderLayout;
        CenterBackgroundColor?: RecursivePartial<UE.LinearColor>;
        SliderProgressColor?: RecursivePartial<UE.LinearColor>;
        SliderBarColor?: RecursivePartial<UE.LinearColor>;
        HandStartEndRatio?: RecursivePartial<UE.Vector2D>;
        UnitsText?: string;
        TextLabelBackgroundColor?: RecursivePartial<UE.LinearColor>;
        ShowLabelOnlyOnHover?: boolean;
        ShowUnitsText?: boolean;
        IsUnitsTextReadOnly?: boolean;
        IsValueTextReadOnly?: boolean;
        SliderThickness?: number;
        OutputRange?: RecursivePartial<UE.Vector2D>;
        OnValueChanged?: (Value: number) => void;
    }

    class AudioRadialSlider extends React.Component<AudioRadialSliderProps> {
        nativePtr: UE.AudioRadialSlider;
    }

    interface AudioVolumeRadialSliderProps extends AudioRadialSliderProps {
    }

    class AudioVolumeRadialSlider extends React.Component<AudioVolumeRadialSliderProps> {
        nativePtr: UE.AudioVolumeRadialSlider;
    }

    interface AudioFrequencyRadialSliderProps extends AudioRadialSliderProps {
    }

    class AudioFrequencyRadialSlider extends React.Component<AudioFrequencyRadialSliderProps> {
        nativePtr: UE.AudioFrequencyRadialSlider;
    }

    interface AudioSliderBaseProps extends WidgetProps {
        Value?: number;
        UnitsText?: string;
        TextLabelBackgroundColor?: RecursivePartial<UE.LinearColor>;
        TextLabelBackgroundColorDelegate?: () => UE.LinearColor;
        ShowLabelOnlyOnHover?: boolean;
        ShowUnitsText?: boolean;
        IsUnitsTextReadOnly?: boolean;
        IsValueTextReadOnly?: boolean;
        ValueDelegate?: () => number;
        SliderBackgroundColor?: RecursivePartial<UE.LinearColor>;
        SliderBackgroundColorDelegate?: () => UE.LinearColor;
        SliderBarColor?: RecursivePartial<UE.LinearColor>;
        SliderBarColorDelegate?: () => UE.LinearColor;
        SliderThumbColor?: RecursivePartial<UE.LinearColor>;
        SliderThumbColorDelegate?: () => UE.LinearColor;
        WidgetBackgroundColor?: RecursivePartial<UE.LinearColor>;
        WidgetBackgroundColorDelegate?: () => UE.LinearColor;
        Orientation?: UE.EOrientation;
        OnValueChanged?: (Value: number) => void;
    }

    class AudioSliderBase extends React.Component<AudioSliderBaseProps> {
        nativePtr: UE.AudioSliderBase;
    }

    interface AudioSliderProps extends AudioSliderBaseProps {
    }

    class AudioSlider extends React.Component<AudioSliderProps> {
        nativePtr: UE.AudioSlider;
    }

    interface AudioVolumeSliderProps extends AudioSliderProps {
    }

    class AudioVolumeSlider extends React.Component<AudioVolumeSliderProps> {
        nativePtr: UE.AudioVolumeSlider;
    }

    interface AudioFrequencySliderProps extends AudioSliderBaseProps {
        OutputRange?: RecursivePartial<UE.Vector2D>;
    }

    class AudioFrequencySlider extends React.Component<AudioFrequencySliderProps> {
        nativePtr: UE.AudioFrequencySlider;
    }

    interface Synth2DSliderProps extends WidgetProps {
        ValueX?: number;
        ValueY?: number;
        ValueXDelegate?: () => number;
        ValueYDelegate?: () => number;
        WidgetStyle?: RecursivePartial<UE.Synth2DSliderStyle>;
        SliderHandleColor?: RecursivePartial<UE.LinearColor>;
        IndentHandle?: boolean;
        Locked?: boolean;
        StepSize?: number;
        IsFocusable?: boolean;
        OnMouseCaptureBegin?: () => void;
        OnMouseCaptureEnd?: () => void;
        OnControllerCaptureBegin?: () => void;
        OnControllerCaptureEnd?: () => void;
        OnValueChangedX?: (Value: number) => void;
        OnValueChangedY?: (Value: number) => void;
    }

    class Synth2DSlider extends React.Component<Synth2DSliderProps> {
        nativePtr: UE.Synth2DSlider;
    }

    interface SynthKnobProps extends WidgetProps {
        Value?: number;
        StepSize?: number;
        MouseSpeed?: number;
        MouseFineTuneSpeed?: number;
        ShowTooltipInfo?: boolean;
        ParameterName?: string;
        ParameterUnits?: string;
        ValueDelegate?: () => number;
        WidgetStyle?: RecursivePartial<UE.SynthKnobStyle>;
        Locked?: boolean;
        IsFocusable?: boolean;
        OnMouseCaptureBegin?: () => void;
        OnMouseCaptureEnd?: () => void;
        OnControllerCaptureBegin?: () => void;
        OnControllerCaptureEnd?: () => void;
        OnValueChanged?: (Value: number) => void;
    }

    class SynthKnob extends React.Component<SynthKnobProps> {
        nativePtr: UE.SynthKnob;
    }

    interface ReactWidgetProps extends UserWidgetProps {
    }

    class ReactWidget extends React.Component<ReactWidgetProps> {
        nativePtr: UE.ReactWidget;
    }

    interface TestUI_CProps extends UserWidgetProps {
    }

    class TestUI_C extends React.Component<TestUI_CProps> {
        nativePtr: UE.Game.TestUI.TestUI_C;
    }

    interface 测试UI_CProps extends UserWidgetProps {
    }

    class 测试UI_C extends React.Component<测试UI_CProps> {
        nativePtr: UE.Game.测试UI.测试UI_C;
    }


    interface Root {
        removeFromViewport() : void;
        getWidget(): any;
    }

    interface TReactUMG {
        render(element: React.ReactElement) : Root;
        init(world: any) : void;
    }

    var ReactUMG : TReactUMG;
}    
    