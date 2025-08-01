Generated with discovered.json: 0xfaf9064fed6cd17753fe1402ab82cc601385189d

# Diff at Mon, 14 Jul 2025 12:45:49 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 21937199
- current block number: 21937199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21937199 (main branch discovery), not current.

```diff
    EOA  (0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F) {
    +++ description: None
      address:
-        "0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"
+        "eth:0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"
    }
```

```diff
    contract ReplicaUpgradeBeacon (0x10a432946e24C49866c243a13BE7205B3EF929ee) {
    +++ description: None
      address:
-        "0x10a432946e24C49866c243a13BE7205B3EF929ee"
+        "eth:0x10a432946e24C49866c243a13BE7205B3EF929ee"
      implementationNames.0x10a432946e24C49866c243a13BE7205B3EF929ee:
-        "UpgradeBeacon"
      implementationNames.eth:0x10a432946e24C49866c243a13BE7205B3EF929ee:
+        "UpgradeBeacon"
    }
```

```diff
    EOA  (0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f) {
    +++ description: None
      address:
-        "0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"
+        "eth:0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"
    }
```

```diff
    EOA  (0x229D3A236158482728f1dc107E3b01514053307b) {
    +++ description: None
      address:
-        "0x229D3A236158482728f1dc107E3b01514053307b"
+        "eth:0x229D3A236158482728f1dc107E3b01514053307b"
    }
```

```diff
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    +++ description: None
      address:
-        "0x2bB2a5A724170357cb691841F40d26A950d8C33D"
+        "eth:0x2bB2a5A724170357cb691841F40d26A950d8C33D"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xFCcD3516d6BB62b009088aDae1E349430dDF6e77"
+        "eth:0xFCcD3516d6BB62b009088aDae1E349430dDF6e77"
      values.$members.1:
-        "0x63c079444e07D82d33399DE7D56d6E48740494c7"
+        "eth:0x63c079444e07D82d33399DE7D56d6E48740494c7"
      values.$members.2:
-        "0xa725898D6F73C512f803B564A89DFbd96cF298EC"
+        "eth:0xa725898D6F73C512f803B564A89DFbd96cF298EC"
      values.$members.3:
-        "0xd85DC9A21378EF738A248236E970c2e0be89C9c2"
+        "eth:0xd85DC9A21378EF738A248236E970c2e0be89C9c2"
      values.$members.4:
-        "0xeE2b1e23e71052860C14f69E84AAF78478606D63"
+        "eth:0xeE2b1e23e71052860C14f69E84AAF78478606D63"
      values.$members.5:
-        "0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
+        "eth:0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
      values.$members.6:
-        "0x7519Db53B63d72721470319A5F4462D587Bb3008"
+        "eth:0x7519Db53B63d72721470319A5F4462D587Bb3008"
      implementationNames.0x2bB2a5A724170357cb691841F40d26A950d8C33D:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x2bB2a5A724170357cb691841F40d26A950d8C33D:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract UpdaterManager (0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC) {
    +++ description: None
      address:
-        "0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC"
+        "eth:0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC"
      values.owner:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      values.updater:
-        "0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
+        "eth:0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
      implementationNames.0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC:
-        "UpdaterManager"
      implementationNames.eth:0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC:
+        "UpdaterManager"
    }
```

```diff
    contract BridgeUpgradeBeacon (0x3b96B42D1F4962CB21049fB237A886E2860AfacB) {
    +++ description: None
      address:
-        "0x3b96B42D1F4962CB21049fB237A886E2860AfacB"
+        "eth:0x3b96B42D1F4962CB21049fB237A886E2860AfacB"
      implementationNames.0x3b96B42D1F4962CB21049fB237A886E2860AfacB:
-        "UpgradeBeacon"
      implementationNames.eth:0x3b96B42D1F4962CB21049fB237A886E2860AfacB:
+        "UpgradeBeacon"
    }
```

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      address:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      values.$admin:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
+        "eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      values.$implementation:
-        "0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"
+        "eth:0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"
      values.$pastUpgrades.0.2.0:
-        "0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"
+        "eth:0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"
      values.governor:
-        "0x5Fa96B622D1F4e920b92040c10fA297ca496ad37"
+        "eth:0x5Fa96B622D1F4e920b92040c10fA297ca496ad37"
      values.OpticsBeacon_beacon:
-        "0x681Edb6d52138cEa8210060C309230244BcEa61b"
+        "eth:0x681Edb6d52138cEa8210060C309230244BcEa61b"
      values.recoveryManager:
-        "0x2bB2a5A724170357cb691841F40d26A950d8C33D"
+        "eth:0x2bB2a5A724170357cb691841F40d26A950d8C33D"
      values.xAppConnectionManager:
-        "0xcEc158A719d11005Bd9339865965bed938BEafA3"
+        "eth:0xcEc158A719d11005Bd9339865965bed938BEafA3"
      implementationNames.0x42303634F37956687fB7ff2c6146AC842481A052:
-        "UpgradeBeaconProxy"
      implementationNames.0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1:
-        "GovernanceRouter"
      implementationNames.eth:0x42303634F37956687fB7ff2c6146AC842481A052:
+        "UpgradeBeaconProxy"
      implementationNames.eth:0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1:
+        "GovernanceRouter"
    }
```

```diff
    EOA  (0x5c95FED053997f30b7Aa69979C208a5D15479f5D) {
    +++ description: None
      address:
-        "0x5c95FED053997f30b7Aa69979C208a5D15479f5D"
+        "eth:0x5c95FED053997f30b7Aa69979C208a5D15479f5D"
    }
```

```diff
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    +++ description: None
      address:
-        "0x5Fa96B622D1F4e920b92040c10fA297ca496ad37"
+        "eth:0x5Fa96B622D1F4e920b92040c10fA297ca496ad37"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
+        "eth:0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
      values.$members.1:
-        "0x63c079444e07D82d33399DE7D56d6E48740494c7"
+        "eth:0x63c079444e07D82d33399DE7D56d6E48740494c7"
      values.$members.2:
-        "0x5c95FED053997f30b7Aa69979C208a5D15479f5D"
+        "eth:0x5c95FED053997f30b7Aa69979C208a5D15479f5D"
      values.$members.3:
-        "0x229D3A236158482728f1dc107E3b01514053307b"
+        "eth:0x229D3A236158482728f1dc107E3b01514053307b"
      values.$members.4:
-        "0xBcd15f82Ae461335257d0851A18948784cF79E9d"
+        "eth:0xBcd15f82Ae461335257d0851A18948784cF79E9d"
      values.$members.5:
-        "0xB98E1f5358cd8A285a34ae59898309baA2E2e712"
+        "eth:0xB98E1f5358cd8A285a34ae59898309baA2E2e712"
      values.$members.6:
-        "0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"
+        "eth:0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"
      implementationNames.0x5Fa96B622D1F4e920b92040c10fA297ca496ad37:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x5Fa96B622D1F4e920b92040c10fA297ca496ad37:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x63c079444e07D82d33399DE7D56d6E48740494c7) {
    +++ description: None
      address:
-        "0x63c079444e07D82d33399DE7D56d6E48740494c7"
+        "eth:0x63c079444e07D82d33399DE7D56d6E48740494c7"
    }
```

```diff
    contract GovernanceUpgradeBeacon (0x681Edb6d52138cEa8210060C309230244BcEa61b) {
    +++ description: None
      address:
-        "0x681Edb6d52138cEa8210060C309230244BcEa61b"
+        "eth:0x681Edb6d52138cEa8210060C309230244BcEa61b"
      implementationNames.0x681Edb6d52138cEa8210060C309230244BcEa61b:
-        "UpgradeBeacon"
      implementationNames.eth:0x681Edb6d52138cEa8210060C309230244BcEa61b:
+        "UpgradeBeacon"
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      address:
-        "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
+        "eth:0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
      values.$admin:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
+        "eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      values.$implementation:
-        "0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"
+        "eth:0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"
      values.$pastUpgrades.0.2.0:
-        "0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"
+        "eth:0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"
      values.OpticsBeacon_beacon:
-        "0x3b96B42D1F4962CB21049fB237A886E2860AfacB"
+        "eth:0x3b96B42D1F4962CB21049fB237A886E2860AfacB"
      values.owner:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      values.xAppConnectionManager:
-        "0xcEc158A719d11005Bd9339865965bed938BEafA3"
+        "eth:0xcEc158A719d11005Bd9339865965bed938BEafA3"
      implementationNames.0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47:
-        "UpgradeBeaconProxy"
      implementationNames.0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6:
-        "BridgeRouter"
      implementationNames.eth:0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47:
+        "UpgradeBeaconProxy"
      implementationNames.eth:0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6:
+        "BridgeRouter"
    }
```

```diff
    EOA  (0x7519Db53B63d72721470319A5F4462D587Bb3008) {
    +++ description: None
      address:
-        "0x7519Db53B63d72721470319A5F4462D587Bb3008"
+        "eth:0x7519Db53B63d72721470319A5F4462D587Bb3008"
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      address:
-        "0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
+        "eth:0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
      values.$admin:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
+        "eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      values.$implementation:
-        "0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"
+        "eth:0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"
      values.$pastUpgrades.0.2.0:
-        "0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"
+        "eth:0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"
      values.OpticsBeacon_beacon:
-        "0x10a432946e24C49866c243a13BE7205B3EF929ee"
+        "eth:0x10a432946e24C49866c243a13BE7205B3EF929ee"
      values.updater:
-        "0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
+        "eth:0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
      implementationNames.0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b:
-        "UpgradeBeaconProxy"
      implementationNames.0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04:
-        "Replica"
      implementationNames.eth:0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b:
+        "UpgradeBeaconProxy"
      implementationNames.eth:0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04:
+        "Replica"
    }
```

```diff
    EOA  (0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552) {
    +++ description: None
      address:
-        "0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
+        "eth:0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552"
    }
```

```diff
    contract HomeUpgradeBeacon (0x9E4C2547307e221383A4bcba6065389C69Bd4628) {
    +++ description: None
      address:
-        "0x9E4C2547307e221383A4bcba6065389C69Bd4628"
+        "eth:0x9E4C2547307e221383A4bcba6065389C69Bd4628"
      implementationNames.0x9E4C2547307e221383A4bcba6065389C69Bd4628:
-        "UpgradeBeacon"
      implementationNames.eth:0x9E4C2547307e221383A4bcba6065389C69Bd4628:
+        "UpgradeBeacon"
    }
```

```diff
    EOA  (0xa725898D6F73C512f803B564A89DFbd96cF298EC) {
    +++ description: None
      address:
-        "0xa725898D6F73C512f803B564A89DFbd96cF298EC"
+        "eth:0xa725898D6F73C512f803B564A89DFbd96cF298EC"
    }
```

```diff
    EOA  (0xb4a28F2d7f9c909478390022196B08dea5b228fa) {
    +++ description: None
      address:
-        "0xb4a28F2d7f9c909478390022196B08dea5b228fa"
+        "eth:0xb4a28F2d7f9c909478390022196B08dea5b228fa"
    }
```

```diff
    EOA  (0xB98E1f5358cd8A285a34ae59898309baA2E2e712) {
    +++ description: None
      address:
-        "0xB98E1f5358cd8A285a34ae59898309baA2E2e712"
+        "eth:0xB98E1f5358cd8A285a34ae59898309baA2E2e712"
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      address:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
+        "eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      values.owner:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      implementationNames.0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B:
-        "UpgradeBeaconController"
      implementationNames.eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B:
+        "UpgradeBeaconController"
    }
```

```diff
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    +++ description: None
      address:
-        "0xBcd15f82Ae461335257d0851A18948784cF79E9d"
+        "eth:0xBcd15f82Ae461335257d0851A18948784cF79E9d"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xb4a28F2d7f9c909478390022196B08dea5b228fa"
+        "eth:0xb4a28F2d7f9c909478390022196B08dea5b228fa"
      values.$members.1:
-        "0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"
+        "eth:0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"
      implementationNames.0xBcd15f82Ae461335257d0851A18948784cF79E9d:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xBcd15f82Ae461335257d0851A18948784cF79E9d:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract XAppConnectionManager (0xcEc158A719d11005Bd9339865965bed938BEafA3) {
    +++ description: None
      address:
-        "0xcEc158A719d11005Bd9339865965bed938BEafA3"
+        "eth:0xcEc158A719d11005Bd9339865965bed938BEafA3"
      values.home:
-        "0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
+        "eth:0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
      values.owner:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      values.watchers.0:
-        "0xeE42B7757798cf495CDaA8eDb0CC237F07c60C81"
+        "eth:0xeE42B7757798cf495CDaA8eDb0CC237F07c60C81"
      implementationNames.0xcEc158A719d11005Bd9339865965bed938BEafA3:
-        "XAppConnectionManager"
      implementationNames.eth:0xcEc158A719d11005Bd9339865965bed938BEafA3:
+        "XAppConnectionManager"
    }
```

```diff
    EOA  (0xd85DC9A21378EF738A248236E970c2e0be89C9c2) {
    +++ description: None
      address:
-        "0xd85DC9A21378EF738A248236E970c2e0be89C9c2"
+        "eth:0xd85DC9A21378EF738A248236E970c2e0be89C9c2"
    }
```

```diff
    EOA  (0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81) {
    +++ description: None
      address:
-        "0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
+        "eth:0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
    }
```

```diff
    EOA  (0xeE2b1e23e71052860C14f69E84AAF78478606D63) {
    +++ description: None
      address:
-        "0xeE2b1e23e71052860C14f69E84AAF78478606D63"
+        "eth:0xeE2b1e23e71052860C14f69E84AAF78478606D63"
    }
```

```diff
    EOA  (0xeE42B7757798cf495CDaA8eDb0CC237F07c60C81) {
    +++ description: None
      address:
-        "0xeE42B7757798cf495CDaA8eDb0CC237F07c60C81"
+        "eth:0xeE42B7757798cf495CDaA8eDb0CC237F07c60C81"
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      address:
-        "0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
+        "eth:0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
      values.$admin:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
+        "eth:0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      values.$implementation:
-        "0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"
+        "eth:0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"
      values.$pastUpgrades.0.2.0:
-        "0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"
+        "eth:0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"
      values.OpticsBeacon_beacon:
-        "0x9E4C2547307e221383A4bcba6065389C69Bd4628"
+        "eth:0x9E4C2547307e221383A4bcba6065389C69Bd4628"
      values.owner:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      values.updater:
-        "0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
+        "eth:0xDB2091535eb0Ee447Ce170DDC25204FEA822dd81"
      values.updaterManager:
-        "0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC"
+        "eth:0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC"
      implementationNames.0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97:
-        "UpgradeBeaconProxy"
      implementationNames.0xfAc41463ef1E01546F2130F92184a053A0E3Fa14:
-        "Home"
      implementationNames.eth:0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97:
+        "UpgradeBeaconProxy"
      implementationNames.eth:0xfAc41463ef1E01546F2130F92184a053A0E3Fa14:
+        "Home"
    }
```

```diff
    EOA  (0xFCcD3516d6BB62b009088aDae1E349430dDF6e77) {
    +++ description: None
      address:
-        "0xFCcD3516d6BB62b009088aDae1E349430dDF6e77"
+        "eth:0xFCcD3516d6BB62b009088aDae1E349430dDF6e77"
    }
```

```diff
+   Status: CREATED
    contract ReplicaUpgradeBeacon (0x10a432946e24C49866c243a13BE7205B3EF929ee)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UpdaterManager (0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC)
    +++ description: None
```

```diff
+   Status: CREATED
    contract BridgeUpgradeBeacon (0x3b96B42D1F4962CB21049fB237A886E2860AfacB)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GovernanceUpgradeBeacon (0x681Edb6d52138cEa8210060C309230244BcEa61b)
    +++ description: None
```

```diff
+   Status: CREATED
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b)
    +++ description: None
```

```diff
+   Status: CREATED
    contract HomeUpgradeBeacon (0x9E4C2547307e221383A4bcba6065389C69Bd4628)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract XAppConnectionManager (0xcEc158A719d11005Bd9339865965bed938BEafA3)
    +++ description: None
```

```diff
+   Status: CREATED
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97)
    +++ description: None
```

Generated with discovered.json: 0xa5d6504c1e3c1553ad5b02886c2010a45b7364b6

# Diff at Fri, 04 Jul 2025 12:19:12 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 21937199
- current block number: 21937199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21937199 (main branch discovery), not current.

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x42303634F37956687fB7ff2c6146AC842481A052"
+        "eth:0x42303634F37956687fB7ff2c6146AC842481A052"
      receivedPermissions.1.from:
-        "ethereum:0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
+        "eth:0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
      receivedPermissions.2.from:
-        "ethereum:0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
+        "eth:0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
      receivedPermissions.3.from:
-        "ethereum:0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
+        "eth:0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
    }
```

Generated with discovered.json: 0xc8a67ca39b0e8b6abee16902d5e98a110072c175

# Diff at Fri, 23 May 2025 09:41:00 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21937199
- current block number: 21937199

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21937199 (main branch discovery), not current.

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.role:
+        "admin"
      receivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0xc03042ee89f87a335bc6e50be7e884262ab10f74

# Diff at Tue, 29 Apr 2025 08:19:08 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21937199
- current block number: 21937199

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21937199 (main branch discovery), not current.

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

Generated with discovered.json: 0x122bd71530cdbb228f47acd5873db93a842bda6a

# Diff at Tue, 04 Mar 2025 10:39:31 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21937199
- current block number: 21937199

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21937199 (main branch discovery), not current.

```diff
    contract ReplicaUpgradeBeacon (0x10a432946e24C49866c243a13BE7205B3EF929ee) {
    +++ description: None
      sinceBlock:
+        13187690
    }
```

```diff
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    +++ description: None
      sinceBlock:
+        13643255
    }
```

```diff
    contract UpdaterManager (0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC) {
    +++ description: None
      sinceBlock:
+        13187663
    }
```

```diff
    contract BridgeUpgradeBeacon (0x3b96B42D1F4962CB21049fB237A886E2860AfacB) {
    +++ description: None
      sinceBlock:
+        13188015
    }
```

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      sinceBlock:
+        13187679
    }
```

```diff
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    +++ description: None
      sinceBlock:
+        13186744
    }
```

```diff
    contract GovernanceUpgradeBeacon (0x681Edb6d52138cEa8210060C309230244BcEa61b) {
    +++ description: None
      sinceBlock:
+        13187679
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      sinceBlock:
+        13188015
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      sinceBlock:
+        13187725
    }
```

```diff
    contract HomeUpgradeBeacon (0x9E4C2547307e221383A4bcba6065389C69Bd4628) {
    +++ description: None
      sinceBlock:
+        13187674
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      sinceBlock:
+        13187658
    }
```

```diff
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    +++ description: None
      sinceBlock:
+        13084652
    }
```

```diff
    contract XAppConnectionManager (0xcEc158A719d11005Bd9339865965bed938BEafA3) {
    +++ description: None
      sinceBlock:
+        13187669
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      sinceBlock:
+        13187674
    }
```

Generated with discovered.json: 0x9d2ca0aef81158acc5183d269c3925008fef91c0

# Diff at Mon, 20 Jan 2025 11:09:50 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 19532023
- current block number: 19532023

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      issuedPermissions.0.to:
+        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      issuedPermissions.0.to:
+        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      issuedPermissions.0.to:
+        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      receivedPermissions.3.target:
-        "0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
      receivedPermissions.3.from:
+        "0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"
      receivedPermissions.2.target:
-        "0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
      receivedPermissions.2.from:
+        "0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
      receivedPermissions.1.target:
-        "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
      receivedPermissions.1.from:
+        "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
      receivedPermissions.0.target:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
      receivedPermissions.0.from:
+        "0x42303634F37956687fB7ff2c6146AC842481A052"
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
      issuedPermissions.0.to:
+        "0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B"
    }
```

Generated with discovered.json: 0x8c8af6cc99dd2fc16ba623cf8e64e3836ad9d052

# Diff at Mon, 21 Oct 2024 11:08:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"]
      values.$pastUpgrades.0.1:
-        ["0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"]
+        "0x7481d9583144189235ba84c60cbcd5b7f45084ab6d35140f3dc484549353af1d"
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"]
      values.$pastUpgrades.0.1:
-        ["0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"]
+        "0x55d651c1e931a865762f216a22d1a0044f342f79ab800716a4660d2cb7b59d1f"
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"]
      values.$pastUpgrades.0.1:
-        ["0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"]
+        "0x0ee477885168cd26a6748549a929aec63af1a405a872c8a694755ab37b8d0c39"
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      values.$pastUpgrades.0.2:
+        ["0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"]
      values.$pastUpgrades.0.1:
-        ["0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"]
+        "0xc582bae90e011209dd89c61a2b2080afdcab952023b0122376eca38113a5eab1"
    }
```

Generated with discovered.json: 0x83ab8afd7b478a3f3645e7201730bce0f8a0f3d9

# Diff at Mon, 14 Oct 2024 10:53:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract ReplicaUpgradeBeacon (0x10a432946e24C49866c243a13BE7205B3EF929ee) {
    +++ description: None
      sourceHashes:
+        ["0x22841c972728a5327e28da1a887ae68b6db4dc5f1d658e516abcba1a265b21d8"]
    }
```

```diff
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract UpdaterManager (0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC) {
    +++ description: None
      sourceHashes:
+        ["0x4ac3e27d1d1ef6c9a05335874ae7286f305ae29a71c239cd1095617d01efbaf0"]
    }
```

```diff
    contract BridgeUpgradeBeacon (0x3b96B42D1F4962CB21049fB237A886E2860AfacB) {
    +++ description: None
      sourceHashes:
+        ["0x22841c972728a5327e28da1a887ae68b6db4dc5f1d658e516abcba1a265b21d8"]
    }
```

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      sourceHashes:
+        ["0xbe5d364ff65b55d089681036cc772258083d96100d71309b7cd76d6f69ced388","0xfe51330f918cf664ca579984982dbeeab54d9a2461dcd1938ff2d46b9c77b306"]
    }
```

```diff
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract GovernanceUpgradeBeacon (0x681Edb6d52138cEa8210060C309230244BcEa61b) {
    +++ description: None
      sourceHashes:
+        ["0x22841c972728a5327e28da1a887ae68b6db4dc5f1d658e516abcba1a265b21d8"]
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      sourceHashes:
+        ["0xbe5d364ff65b55d089681036cc772258083d96100d71309b7cd76d6f69ced388","0x5bd24b5259f733f1cb0c93cd38718fd109ef8701385499565ac77523dac5dfd7"]
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      sourceHashes:
+        ["0xbe5d364ff65b55d089681036cc772258083d96100d71309b7cd76d6f69ced388","0xd26ceefde9da4b2404bd9718a5e165954f919a2aa1e7e1b47a11e2c553c9d094"]
    }
```

```diff
    contract HomeUpgradeBeacon (0x9E4C2547307e221383A4bcba6065389C69Bd4628) {
    +++ description: None
      sourceHashes:
+        ["0x22841c972728a5327e28da1a887ae68b6db4dc5f1d658e516abcba1a265b21d8"]
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      sourceHashes:
+        ["0x12e387edec9bf90c8c2ee351a4b607488ae3e01f861eb7dabbf3e4fdd078ad48"]
    }
```

```diff
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract XAppConnectionManager (0xcEc158A719d11005Bd9339865965bed938BEafA3) {
    +++ description: None
      sourceHashes:
+        ["0xb64e5af8c508ce86c29728805a64c3b45bf37a0a28c4ea602902a3e23de80dfd"]
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      sourceHashes:
+        ["0xbe5d364ff65b55d089681036cc772258083d96100d71309b7cd76d6f69ced388","0xd4e593cba02e81da0882f30e09e38c2015c6f635b3911e27d19b579b1b92eba5"]
    }
```

Generated with discovered.json: 0x1bf385d64ed8247c664b7de58758be96127da678

# Diff at Tue, 01 Oct 2024 10:53:35 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      values.$pastUpgrades:
+        [["2021-09-08T21:56:48.000Z",["0xDFb2A95900d6b7c8AA95F2E46563a5FCFb5505A1"]]]
      values.$upgradeCount:
+        1
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      values.$pastUpgrades:
+        [["2021-09-08T23:13:15.000Z",["0x67364232A8f8dA6f22dF3bE3408ef9872132F2A6"]]]
      values.$upgradeCount:
+        1
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      values.$pastUpgrades:
+        [["2021-09-08T22:00:31.000Z",["0xFC4060e4Fd5979f848b8EDc8505d2f89D83b9E04"]]]
      values.$upgradeCount:
+        1
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      values.$pastUpgrades:
+        [["2021-09-08T21:55:49.000Z",["0xfAc41463ef1E01546F2130F92184a053A0E3Fa14"]]]
      values.$upgradeCount:
+        1
    }
```

Generated with discovered.json: 0x8048e5b509dddc334872b2efbb48bbc1c9dbcdb0

# Diff at Fri, 30 Aug 2024 07:54:09 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      receivedPermissions.3.via:
-        []
      receivedPermissions.2.via:
-        []
      receivedPermissions.1.via:
-        []
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0x9d12416891d2e15e426454389a21638d27046293

# Diff at Wed, 21 Aug 2024 10:04:33 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x42303634F37956687fB7ff2c6146AC842481A052","0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47","0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b","0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x42303634F37956687fB7ff2c6146AC842481A052","via":[]},{"permission":"upgrade","target":"0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47","via":[]},{"permission":"upgrade","target":"0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b","via":[]},{"permission":"upgrade","target":"0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97","via":[]}]
    }
```

```diff
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B","via":[]}]
    }
```

Generated with discovered.json: 0x4967742811d227dceb18c71f7100d39e7b0ff7a6

# Diff at Fri, 09 Aug 2024 12:00:54 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bf40aa32f030fd312056ca0ef198c8550467d1d7 block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      assignedPermissions.upgrade.2:
-        "0x42303634F37956687fB7ff2c6146AC842481A052"
+        "0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
      assignedPermissions.upgrade.1:
-        "0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b"
+        "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
      assignedPermissions.upgrade.0:
-        "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"
+        "0x42303634F37956687fB7ff2c6146AC842481A052"
    }
```

Generated with discovered.json: 0x8862e37e70bdde5d3f2544b955e36289c73b5496

# Diff at Fri, 09 Aug 2024 10:10:58 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 19532023
- current block number: 19532023

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532023 (main branch discovery), not current.

```diff
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    +++ description: None
      values.$multisigThreshold:
-        "4 of 7 (57%)"
      values.getOwners:
-        ["0xFCcD3516d6BB62b009088aDae1E349430dDF6e77","0x63c079444e07D82d33399DE7D56d6E48740494c7","0xa725898D6F73C512f803B564A89DFbd96cF298EC","0xd85DC9A21378EF738A248236E970c2e0be89C9c2","0xeE2b1e23e71052860C14f69E84AAF78478606D63","0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552","0x7519Db53B63d72721470319A5F4462D587Bb3008"]
      values.getThreshold:
-        4
      values.$members:
+        ["0xFCcD3516d6BB62b009088aDae1E349430dDF6e77","0x63c079444e07D82d33399DE7D56d6E48740494c7","0xa725898D6F73C512f803B564A89DFbd96cF298EC","0xd85DC9A21378EF738A248236E970c2e0be89C9c2","0xeE2b1e23e71052860C14f69E84AAF78478606D63","0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552","0x7519Db53B63d72721470319A5F4462D587Bb3008"]
      values.$threshold:
+        4
      values.multisigThreshold:
+        "4 of 7 (57%)"
    }
```

```diff
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    +++ description: None
      values.$multisigThreshold:
-        "3 of 7 (43%)"
      values.getOwners:
-        ["0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552","0x63c079444e07D82d33399DE7D56d6E48740494c7","0x5c95FED053997f30b7Aa69979C208a5D15479f5D","0x229D3A236158482728f1dc107E3b01514053307b","0xBcd15f82Ae461335257d0851A18948784cF79E9d","0xB98E1f5358cd8A285a34ae59898309baA2E2e712","0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"]
      values.getThreshold:
-        3
      values.$members:
+        ["0x7d7cd2ED526F99D05A05a93CCf42C1ADdBe78552","0x63c079444e07D82d33399DE7D56d6E48740494c7","0x5c95FED053997f30b7Aa69979C208a5D15479f5D","0x229D3A236158482728f1dc107E3b01514053307b","0xBcd15f82Ae461335257d0851A18948784cF79E9d","0xB98E1f5358cd8A285a34ae59898309baA2E2e712","0x07f5bFE05C5C4BF4a86af7BAf667e3737A3BA18F"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 7 (43%)"
    }
```

```diff
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x42303634F37956687fB7ff2c6146AC842481A052","0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47","0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b","0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"]
      assignedPermissions.upgrade:
+        ["0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47","0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b","0x42303634F37956687fB7ff2c6146AC842481A052","0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97"]
    }
```

```diff
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    +++ description: None
      values.$multisigThreshold:
-        "1 of 2 (50%)"
      values.getOwners:
-        ["0xb4a28F2d7f9c909478390022196B08dea5b228fa","0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"]
      values.getThreshold:
-        1
      values.$members:
+        ["0xb4a28F2d7f9c909478390022196B08dea5b228fa","0x11C338Cbd278C5Cd9CA885c04bDF2282F548642f"]
      values.$threshold:
+        1
      values.multisigThreshold:
+        "1 of 2 (50%)"
    }
```

Generated with discovered.json: 0x9f8fd08a9770528b726804306a76b5caec509f88

# Diff at Thu, 28 Mar 2024 10:30:43 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@dd32bb06b292cc8459fb09925454ee3a90f5c27e block: 19418951
- current block number: 19532023

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19418951 (main branch discovery), not current.

```diff
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    +++ description: None
      upgradeability.threshold:
+        "4 of 7 (57%)"
    }
```

```diff
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 7 (43%)"
    }
```

```diff
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    +++ description: None
      upgradeability.threshold:
+        "1 of 2 (50%)"
    }
```

Generated with discovered.json: 0x159de1be895e6c6e43beb7bdbb71ffdced4bbe70

# Diff at Fri, 13 Oct 2023 07:04:23 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@28e18077472448efd6132e6ee714b582cc1ee80b

## Description

Newly created contracts are the result of rediscovering the `upgradeBeacon` address.

## Watched changes

```diff
+   Status: CREATED
    contract ReplicaUpgradeBeacon (0x10a432946e24C49866c243a13BE7205B3EF929ee) {
    }
```

```diff
+   Status: CREATED
    contract BridgeUpgradeBeacon (0x3b96B42D1F4962CB21049fB237A886E2860AfacB) {
    }
```

```diff
+   Status: CREATED
    contract GovernanceUpgradeBeacon (0x681Edb6d52138cEa8210060C309230244BcEa61b) {
    }
```

```diff
+   Status: CREATED
    contract HomeUpgradeBeacon (0x9E4C2547307e221383A4bcba6065389C69Bd4628) {
    }
```

# Diff at Mon, 09 Oct 2023 13:37:39 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@

## Description

Update discovery to include the multisig threshold.

## Watched changes

```diff
+   Status: CREATED
    contract RecoveryManager (0x2bB2a5A724170357cb691841F40d26A950d8C33D) {
    }
```

```diff
+   Status: CREATED
    contract UpdaterManager (0x2CC80EE8a3f9c85309866F4C6BDF82f6846891EC) {
    }
```

```diff
+   Status: CREATED
    contract GovernanceRouterBeaconProxy (0x42303634F37956687fB7ff2c6146AC842481A052) {
    }
```

```diff
+   Status: CREATED
    contract Governor (0x5Fa96B622D1F4e920b92040c10fA297ca496ad37) {
    }
```

```diff
+   Status: CREATED
    contract BridgeRouterBeaconProxy (0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47) {
    }
```

```diff
+   Status: CREATED
    contract ReplicaBeaconProxy (0x7725EadaC5Ee986CAc8317a1d2fB16e59e079E8b) {
    }
```

```diff
+   Status: CREATED
    contract UpgradeBeaconController (0xbB6d6333FAFd2cae7ef4c5EFBF8f048F2F109D1B) {
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xBcd15f82Ae461335257d0851A18948784cF79E9d) {
    }
```

```diff
+   Status: CREATED
    contract XAppConnectionManager (0xcEc158A719d11005Bd9339865965bed938BEafA3) {
    }
```

```diff
+   Status: CREATED
    contract HomeBeaconProxy (0xf25C5932bb6EFc7afA4895D9916F2abD7151BF97) {
    }
```
