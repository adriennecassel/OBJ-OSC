using UnityEngine;
using UnityEditor;

public class PackageToool
{
    [MenuItem("Package/Update Package")]
    static void UpdatePackage()
    {
        AssetDatabase.ExportPackage("Assets/Kvant", "KvantSpray.unitypackage", ExportPackageOptions.Recurse);
    }
}
