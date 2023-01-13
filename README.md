# puerts_ue5_1_demo
This is a puerts demo based on unreal engine 5.1.

### 源码安装方式

* git clone https://github.com/Tencent/puerts.git

* 拷贝puerts/unreal下的Puerts目录到您项目的Plugins目录下，可以参考[unreal demo](https://github.com/chexiongsheng/puerts_unreal_demo)

* 下载v8

    - UE4.25及以上版本：[V8_8.4.371.19_0323](https://github.com/puerts/backend-v8/releases/tag/V8_8.4.371.19_0323)
    
    - UE4.24及以下版本：[V8 for ue 4.24 or below](https://github.com/puerts/backend-v8/releases/tag/v8_for_ue424_or_below)
    
* 解压到[YouProject/Plugins/Puerts/ThirdParty](unreal/Puerts/ThirdParty)

### 发布包安装方式

到[releases](https://github.com/Tencent/puerts/releases)找到你需要的版本，注意，该页面也包含Unity的发布包，Unreal引擎使用版本会以Unreal开头。

下载符合你UE版本的安装包，解压到YouProject/Plugins即可，已经内含v8库。

### 环境配置

* 需提前安装好node和typescript
* 插件下载好后生成VS工程编译，编译工程
* 进入Puerts目录打开命令行执行：node enable_puerts_module.js，创建出tsconfig,DefaultPuerts.ini,TypeScript目录，安装依赖包
* 在项目根目录执行npm init,依次点击确定，创建package.json

### 相关设置和修改
1. 包含中文命令的蓝图执行GenDTS时会在ue_bp.d.ts中多次出现，因为在DeclarationGenerator的RestoreBlueprintTypeDeclInfos读取已生成的定义时正则匹配无法匹配中文导致，
    将RegexPattern改为FRegexPattern Pattern(TEXT("\\{\\s+(?:(?:class)|(?:enum))\\s+([\\u4e00-\\u9fa5a-zA-Z0-9_]+)"))即可匹配中文
2. 在tsconfig.json中修改outDir指定ts生成的js脚本存放路径
3. 在启动虚拟机时，默认加载JavaScript文件的根目录时Content/JavaScript,可以通过配置文件修改，在MakeSharedJsEnv中使用Settings.ScriptRoot构造FJsEnv
4. 在JsEnv.Build.cs中修改TS_BLUEPRINT_PATH定义的蓝图生成目录，此目录为ts生成蓝图的存放路径

参考[Puerts & ReactUMG 环境搭建](https://zhuanlan.zhihu.com/p/397369095)
参考[Puerts安装和调试](https://zhuanlan.zhihu.com/p/456267138)


