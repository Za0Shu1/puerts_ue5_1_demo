/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 34B105414117D7F5DF9F1B9534DCA89C
    namespace Game.StarterContent.Blueprints.BP_LightStudio {
        class BP_LightStudio_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SkyLight1: UE.SkyLightComponent;
            ExponentialHeightFog1: UE.ExponentialHeightFogComponent;
            PrevisArrow: UE.StaticMeshComponent;
            Skybox: UE.StaticMeshComponent;
            Scene1: UE.SceneComponent;
            GlobalBrightness: number;
            Use_HDRI: boolean;
            UseSunLight: boolean;
            SunBrightness: number;
            SunTint: UE.LinearColor;
            StationaryLightForSun: boolean;
            SunDirectionalLight: UE.DirectionalLightComponent;
            UseAtmosphere: boolean;
            AtmosphereBrightness: number;
            AtmosphereTint: UE.LinearColor;
            PrevisArrowMaterial: UE.MaterialInstanceDynamic;
            LightColor: UE.LinearColor;
            SunColorCurve: UE.CurveLinearColor;
            OverrideSunColor: boolean;
            AtmosphereDensityMultiplier: number;
            AtmosphereAltitude: number;
            DisableSunDisk: boolean;
            UseFog: boolean;
            FogBrightness: number;
            FogTint: UE.LinearColor;
            FogAltitude: number;
            FogMaxOpacity: number;
            FogHeightFalloff: number;
            FogDensity: number;
            FogBrightnessCurve: UE.CurveFloat;
            FogStartDistance: number;
            DisableGroundScattering: boolean;
            AtmosphereDistanceScale: number;
            SkyboxMaterial: UE.MaterialInstanceDynamic;
            HDRI_Brightness: number;
            HDRI_Contrast: number;
            HDRI_Tint: UE.LinearColor;
            HDRI_Cubemap: UE.Texture;
            HDRI_Rotation: number;
            AtmosphereOpacityHorizon: number;
            AtmosphereOpacityZenith: number;
            HighDensityAtmosphere: boolean;
            AtmosphericFog: UE.AtmosphericFogComponent;
            UseSkylight: boolean;
            Shadowdistance: number;
            LightShaftBloom: boolean;
            LightShaftOcclusion: boolean;
            OcclusionMaskDarkness: number;
            BloomScale: number;
            BloomThreshold: number;
            BloomTint: UE.Color;
            AtmosphereFogMultiplier: number;
            AtmosphereDensityHeight: number;
            AtmosphereMaxScatteringOrder: number;
            AtmosphereAltitudeSampleNumber: number;
            LightFunctionMaterial: UE.MaterialInterface;
            MIC_Black: UE.MaterialInstance;
            MIC_HDRI: UE.MaterialInstance;
            AtmosphereDensity() : void;
            CalculateSunColor() : void;
            NormalizedSunAngle(Angle: $Ref<number>) : void;
            SunMobility() : void;
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_LightStudio_C;
            static Load(InName: string): BP_LightStudio_C;
        
            __tid_BP_LightStudio_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6A1AE04E46BB2DCE8E8DA5B318ECB60F
    namespace Game.StarterContent.Blueprints.Blueprint_WallSconce {
        class Blueprint_WallSconce_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Wall: UE.StaticMeshComponent;
            PointLight2: UE.SpotLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Inner Cone Angle"]: number;
            ["Outer Cone Angle"]: number;
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_WallSconce_C;
            static Load(InName: string): Blueprint_WallSconce_C;
        
            __tid_Blueprint_WallSconce_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 62110038444C84D1EC760AB254B78A07
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Steam {
        class Blueprint_Effect_Steam_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Steam AUdio"]: UE.AudioComponent;
            P_Steam_Lit: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Steam_C;
            static Load(InName: string): Blueprint_Effect_Steam_C;
        
            __tid_Blueprint_Effect_Steam_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0D94FA604928B24E62003083BA722E3C
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Sparks {
        class Blueprint_Effect_Sparks_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Sparks Audio"]: UE.AudioComponent;
            Sparks: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Sparks_C;
            static Load(InName: string): Blueprint_Effect_Sparks_C;
        
            __tid_Blueprint_Effect_Sparks_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2678356F40E4E16306BDD687933AE2D1
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Smoke {
        class Blueprint_Effect_Smoke_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Smoke Audio"]: UE.AudioComponent;
            P_Smoke: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Smoke_C;
            static Load(InName: string): Blueprint_Effect_Smoke_C;
        
            __tid_Blueprint_Effect_Smoke_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: A0AD22D447F99B83A9A31C9B9426B5C0
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Fire {
        class Blueprint_Effect_Fire_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Fire Audio"]: UE.AudioComponent;
            P_Fire: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Fire_C;
            static Load(InName: string): Blueprint_Effect_Fire_C;
        
            __tid_Blueprint_Effect_Fire_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 862A26E84A42F13FB193AC87521ABCE8
    namespace Game.StarterContent.Blueprints.Blueprint_Effect_Explosion {
        class Blueprint_Effect_Explosion_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Explosion Audio"]: UE.AudioComponent;
            P_Explosion: UE.ParticleSystemComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_Effect_Explosion_C;
            static Load(InName: string): Blueprint_Effect_Explosion_C;
        
            __tid_Blueprint_Effect_Explosion_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CA91878A4923FACC0B0808B69D641A82
    namespace Game.StarterContent.Blueprints.Blueprint_CeilingLight {
        class Blueprint_CeilingLight_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SM_Lamp_Ceiling: UE.StaticMeshComponent;
            PointLight1: UE.PointLightComponent;
            Scene1: UE.SceneComponent;
            Brightness: number;
            Color: UE.LinearColor;
            ["Source Radius"]: number;
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Blueprint_CeilingLight_C;
            static Load(InName: string): Blueprint_CeilingLight_C;
        
            __tid_Blueprint_CeilingLight_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 15FAA0964162DBDC7D2A37A68C92C35D
    namespace Game.BP_GM {
        class BP_GM_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_GM_C;
            static Load(InName: string): BP_GM_C;
        
            __tid_BP_GM_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B9937127436BDFD0A21248BEF72D0A45
    namespace Game.TestUI {
        class TestUI_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Image_67: UE.Image;
            TextBlock_0: UE.TextBlock;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TestUI_C;
            static Load(InName: string): TestUI_C;
        
            __tid_TestUI_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5392957C418C014969C4349607465CC4
    namespace Game.Res.TestFolder1.TS_Player1 {
        class TS_Player1_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_TS_Player1(EntryPoint: number) : void;
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_Player1_C;
            static Load(InName: string): TS_Player1_C;
        
            __tid_TS_Player1_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DEE673D54DEA6CFFA7ABFEA2CA833CAA
    namespace Game.Res.TestFolder2.TS_Player2 {
        class TS_Player2_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_TS_Player2(EntryPoint: number) : void;
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_Player2_C;
            static Load(InName: string): TS_Player2_C;
        
            __tid_TS_Player2_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 99AE019F4EDDDD45B8D694BFD373FE05
    namespace Game.Res.TestFolder2.TS_测试Player {
        class TS_测试Player_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["ExecuteUbergraph_TS_测试Player"](EntryPoint: number) : void;
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TS_测试Player_C;
            static Load(InName: string): TS_测试Player_C;
        
            __tid_TS_测试Player_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DFDF173042D31499B18818BBFA37AC3D
    namespace Game.测试UI {
        class 测试UI_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Image_67: UE.Image;
            TextBlock_0: UE.TextBlock;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): 测试UI_C;
            static Load(InName: string): 测试UI_C;
        
            __tid_测试UI_C__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
