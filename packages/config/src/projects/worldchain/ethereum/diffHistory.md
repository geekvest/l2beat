Generated with discovered.json: 0x7cbdc90e3639993bb5f71798773addbd7eb1894b

# Diff at Mon, 14 Jul 2025 12:46:42 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22731118
- current block number: 22731118

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22731118 (main branch discovery), not current.

```diff
    EOA  (0x000000000000000000000000000000000000dEaD) {
    +++ description: None
      address:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
    }
```

```diff
    EOA  (0x001271c57AeC639952B5201D052767c316755512) {
    +++ description: None
      address:
-        "0x001271c57AeC639952B5201D052767c316755512"
+        "eth:0x001271c57AeC639952B5201D052767c316755512"
    }
```

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      address:
-        "0x0454092516c9A4d636d3CAfA1e82161376C8a748"
+        "eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
      description:
-        "used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig"
+        "used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig"
      values.fallbackOwner:
-        "0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
+        "eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
      values.livenessGuard:
-        "0x24424336F04440b1c28685a38303aC33C9D14a25"
+        "eth:0x24424336F04440b1c28685a38303aC33C9D14a25"
      values.safe:
-        "0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      implementationNames.0x0454092516c9A4d636d3CAfA1e82161376C8a748:
-        "LivenessModule"
      implementationNames.eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748:
+        "LivenessModule"
    }
```

```diff
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea) {
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
      address:
-        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xc641A33cab81C559F2bd4b21EA34C290E2440C2B"
+        "eth:0xc641A33cab81C559F2bd4b21EA34C290E2440C2B"
      values.$pastUpgrades.0.2.0:
-        "0xc641A33cab81C559F2bd4b21EA34C290E2440C2B"
+        "eth:0xc641A33cab81C559F2bd4b21EA34C290E2440C2B"
      values.gameImpls.0:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.gameImpls.1:
-        "0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
+        "eth:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
      values.gameImpls.2:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.gameImpls.3:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.gameImpls.4:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.owner:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "eth:0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      implementationNames.0x069c4c579671f8c120b1327a73217D01Ea2EC5ea:
-        "Proxy"
      implementationNames.0xc641A33cab81C559F2bd4b21EA34C290E2440C2B:
-        "DisputeGameFactory"
      implementationNames.eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea:
+        "Proxy"
      implementationNames.eth:0xc641A33cab81C559F2bd4b21EA34C290E2440C2B:
+        "DisputeGameFactory"
    }
```

```diff
    EOA  (0x07dC0893cAfbF810e3E72505041f2865726Fd073) {
    +++ description: None
      address:
-        "0x07dC0893cAfbF810e3E72505041f2865726Fd073"
+        "eth:0x07dC0893cAfbF810e3E72505041f2865726Fd073"
    }
```

```diff
    contract Optimism Guardian Multisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      address:
-        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      values.GnosisSafe_modules.0:
-        "0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
      implementationNames.0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x0aA384EB2fedD2741277A0f72909A0d7275575D7) {
    +++ description: None
      address:
-        "0x0aA384EB2fedD2741277A0f72909A0d7275575D7"
+        "eth:0x0aA384EB2fedD2741277A0f72909A0d7275575D7"
    }
```

```diff
    contract DeputyPauseModule (0x126a736B18E0a64fBA19D421647A530E327E112C) {
    +++ description: Allows eth:0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module.
      address:
-        "0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
      description:
-        "Allows 0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module."
+        "Allows eth:0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module."
      values.deputy:
-        "0x352f1defB49718e7Ea411687E850aA8d6299F7aC"
+        "eth:0x352f1defB49718e7Ea411687E850aA8d6299F7aC"
      values.deputyGuardianModule:
-        "0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
      values.eip712Domain.verifyingContract:
-        "0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
      values.foundationSafe:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0x126a736B18E0a64fBA19D421647A530E327E112C:
-        "DeputyPauseModule"
      implementationNames.eth:0x126a736B18E0a64fBA19D421647A530E327E112C:
+        "DeputyPauseModule"
    }
```

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
      address:
-        "0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB"
+        "eth:0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB"
      values.$admin:
-        "0x28fAb3A5b69711cc64B09240d2694d9F0f07eBf6"
+        "eth:0x28fAb3A5b69711cc64B09240d2694d9F0f07eBf6"
      values.$implementation:
-        "0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"
+        "eth:0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"
      values.$pastUpgrades.0.2.0:
-        "0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"
+        "eth:0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"
      values.burnCaller:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.eip712Domain.verifyingContract:
-        "0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB"
+        "eth:0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB"
      values.LINKED_ADAPTER:
-        "0xbD80b06d3dbD0801132c6689429aC09Ca6D27f82"
+        "eth:0xbD80b06d3dbD0801132c6689429aC09Ca6D27f82"
      values.MESSENGER:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.owner:
-        "0x28fAb3A5b69711cc64B09240d2694d9F0f07eBf6"
+        "eth:0x28fAb3A5b69711cc64B09240d2694d9F0f07eBf6"
      values.USDC:
-        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
+        "eth:0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      implementationNames.0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB:
-        "ERC1967Proxy"
      implementationNames.0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff:
-        "L1OpUSDCBridgeAdapter"
      implementationNames.eth:0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB:
+        "ERC1967Proxy"
      implementationNames.eth:0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff:
+        "L1OpUSDCBridgeAdapter"
    }
```

```diff
    EOA  (0x1822b35B09f5ce1C78ecbC06AC0A4e17885b925e) {
    +++ description: None
      address:
-        "0x1822b35B09f5ce1C78ecbC06AC0A4e17885b925e"
+        "eth:0x1822b35B09f5ce1C78ecbC06AC0A4e17885b925e"
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      address:
-        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
+        "eth:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
+        "eth:0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
      values.$pastUpgrades.0.2.0:
-        "0x3c5bC88Fad9D35072213cD1FB5e83f9D150B3144"
+        "eth:0x3c5bC88Fad9D35072213cD1FB5e83f9D150B3144"
      values.$pastUpgrades.1.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.2.2.0:
-        "0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
+        "eth:0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
      values.messenger:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.MESSENGER:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9:
-        "Proxy"
      implementationNames.0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d:
-        "L1ERC721Bridge"
      implementationNames.eth:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9:
+        "Proxy"
      implementationNames.eth:0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d:
+        "L1ERC721Bridge"
    }
```

```diff
    EOA  (0x2270d6eC8E760daA317DD978cFB98C8f144B1f3A) {
    +++ description: None
      address:
-        "0x2270d6eC8E760daA317DD978cFB98C8f144B1f3A"
+        "eth:0x2270d6eC8E760daA317DD978cFB98C8f144B1f3A"
    }
```

```diff
    EOA  (0x2307278fC8aB0005974A6DeD2FA6d1187333a223) {
    +++ description: None
      address:
-        "0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
+        "eth:0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      address:
-        "0x24424336F04440b1c28685a38303aC33C9D14a25"
+        "eth:0x24424336F04440b1c28685a38303aC33C9D14a25"
      receivedPermissions.0.description:
-        "can remove members of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 inactive for 98d."
+        "can remove members of eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 inactive for 98d."
      values.safe:
-        "0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      implementationNames.0x24424336F04440b1c28685a38303aC33C9D14a25:
-        "LivenessGuard"
      implementationNames.eth:0x24424336F04440b1c28685a38303aC33C9D14a25:
+        "LivenessGuard"
    }
```

```diff
    EOA  (0x3041BA32f451F5850c147805F5521AC206421623) {
    +++ description: None
      address:
-        "0x3041BA32f451F5850c147805F5521AC206421623"
+        "eth:0x3041BA32f451F5850c147805F5521AC206421623"
    }
```

```diff
    EOA Optimism EOA 1 (0x352f1defB49718e7Ea411687E850aA8d6299F7aC) {
    +++ description: None
      address:
-        "0x352f1defB49718e7Ea411687E850aA8d6299F7aC"
+        "eth:0x352f1defB49718e7Ea411687E850aA8d6299F7aC"
    }
```

```diff
    EOA  (0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7) {
    +++ description: None
      address:
-        "0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7"
+        "eth:0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7"
    }
```

```diff
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64) {
    +++ description: None
      address:
-        "0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
+        "eth:0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xb23794fd6BA1CEAd01Cf54D772b8341F2F0197A5"
+        "eth:0xb23794fd6BA1CEAd01Cf54D772b8341F2F0197A5"
      values.$members.1:
-        "0x4665374939642965EfD8357D4568D2A77f677429"
+        "eth:0x4665374939642965EfD8357D4568D2A77f677429"
      implementationNames.0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x4665374939642965EfD8357D4568D2A77f677429) {
    +++ description: None
      address:
-        "0x4665374939642965EfD8357D4568D2A77f677429"
+        "eth:0x4665374939642965EfD8357D4568D2A77f677429"
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      address:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
+        "eth:0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      values.l2TokenBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.messenger:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.MESSENGER:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0x470458C91978D2d929704489Ad730DC3E3001113:
-        "L1ChugSplashProxy"
      implementationNames.0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF:
-        "L1StandardBridge"
      implementationNames.eth:0x470458C91978D2d929704489Ad730DC3E3001113:
+        "L1ChugSplashProxy"
      implementationNames.eth:0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF:
+        "L1StandardBridge"
    }
```

```diff
    EOA  (0x4A7322258c9E690e4CB8Cea6e5251443E956e61E) {
    +++ description: None
      address:
-        "0x4A7322258c9E690e4CB8Cea6e5251443E956e61E"
+        "eth:0x4A7322258c9E690e4CB8Cea6e5251443E956e61E"
    }
```

```diff
    EOA  (0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15) {
    +++ description: None
      address:
-        "0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
+        "eth:0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
    }
```

```diff
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53) {
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
      address:
-        "0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0x71e966Ae981d1ce531a7b6d23DC0f27B38409087"
+        "eth:0x71e966Ae981d1ce531a7b6d23DC0f27B38409087"
      values.$pastUpgrades.0.2.0:
-        "0x71e966Ae981d1ce531a7b6d23DC0f27B38409087"
+        "eth:0x71e966Ae981d1ce531a7b6d23DC0f27B38409087"
      values.config:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.owner:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "eth:0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      implementationNames.0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53:
-        "Proxy"
      implementationNames.0x71e966Ae981d1ce531a7b6d23DC0f27B38409087:
-        "DelayedWETH"
      implementationNames.eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53:
+        "Proxy"
      implementationNames.eth:0x71e966Ae981d1ce531a7b6d23DC0f27B38409087:
+        "DelayedWETH"
    }
```

```diff
    EOA  (0x51aCb8e1205De850D1b512584FeE9C29C3813dDa) {
    +++ description: None
      address:
-        "0x51aCb8e1205De850D1b512584FeE9C29C3813dDa"
+        "eth:0x51aCb8e1205De850D1b512584FeE9C29C3813dDa"
    }
```

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      address:
-        "0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
      values.addressManager:
-        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "eth:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      values.owner:
-        "0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A"
+        "eth:0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A"
      implementationNames.0x543bA4AADBAb8f9025686Bd03993043599c6fB04:
-        "ProxyAdmin"
      implementationNames.eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04:
+        "ProxyAdmin"
    }
```

```diff
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9) {
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
      address:
-        "0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
+        "eth:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
      values.anchorStateRegistry:
-        "0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "eth:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      values.challenger:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "eth:0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      values.gameCreator:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.l2BlockNumberChallenger:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.proposer:
-        "0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
+        "eth:0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
      values.vm:
-        "0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C"
+        "eth:0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C"
      values.weth:
-        "0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      implementationNames.0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9:
-        "PermissionedDisputeGame"
      implementationNames.eth:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9:
+        "PermissionedDisputeGame"
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "eth:0x5891090d5085679714cb0e62f74950a3c19146a8"
      values.owner:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      implementationNames.0x5891090d5085679714cb0e62f74950a3c19146a8:
-        "AddressManager"
      implementationNames.eth:0x5891090d5085679714cb0e62f74950a3c19146a8:
+        "AddressManager"
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      address:
-        "0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A"
+        "eth:0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
+        "eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
      values.$members.1:
-        "0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      implementationNames.0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract MIPS (0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C) {
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
      address:
-        "0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C"
+        "eth:0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C"
      values.oracle:
-        "0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277"
+        "eth:0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277"
      implementationNames.0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C:
-        "MIPS"
      implementationNames.eth:0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C:
+        "MIPS"
    }
```

```diff
    EOA  (0x6323ef2b80030f3fBc508bFc321Fc71fDB95c865) {
    +++ description: None
      address:
-        "0x6323ef2b80030f3fBc508bFc321Fc71fDB95c865"
+        "eth:0x6323ef2b80030f3fBc508bFc321Fc71fDB95c865"
    }
```

```diff
    EOA  (0x652BC529E171847E2fFddCeA13567643C84ccB5f) {
    +++ description: None
      address:
-        "0x652BC529E171847E2fFddCeA13567643C84ccB5f"
+        "eth:0x652BC529E171847E2fFddCeA13567643C84ccB5f"
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      address:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"
+        "eth:0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"
      values.$pastUpgrades.0.2.0:
-        "0x18fffcb31850795D919B6aDD4b16bEB3a5f5ECFB"
+        "eth:0x18fffcb31850795D919B6aDD4b16bEB3a5f5ECFB"
      values.$pastUpgrades.1.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.2.2.0:
-        "0xF56D96B2535B932656d3c04Ebf51baBff241D886"
+        "eth:0xF56D96B2535B932656d3c04Ebf51baBff241D886"
      values.$pastUpgrades.3.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.4.2.0:
-        "0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"
+        "eth:0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"
      values.batcherHash:
-        "0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
+        "eth:0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
      values.batchInbox:
-        "0xff00000000000000000000000000000000000480"
+        "eth:0xff00000000000000000000000000000000000480"
      values.disputeGameFactory:
-        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.gasPayingToken.addr_:
-        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
+        "eth:0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
      values.l1CrossDomainMessenger:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.l1ERC721Bridge:
-        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
+        "eth:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      values.l1StandardBridge:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      values.optimismMintableERC20Factory:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "eth:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      values.optimismPortal:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      values.owner:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "eth:0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      values.sequencerInbox:
-        "0xff00000000000000000000000000000000000480"
+        "eth:0xff00000000000000000000000000000000000480"
      values.unsafeBlockSigner:
-        "0x2270d6eC8E760daA317DD978cFB98C8f144B1f3A"
+        "eth:0x2270d6eC8E760daA317DD978cFB98C8f144B1f3A"
      implementationNames.0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A:
-        "Proxy"
      implementationNames.0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375:
-        "SystemConfig"
      implementationNames.eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A:
+        "Proxy"
      implementationNames.eth:0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375:
+        "SystemConfig"
    }
```

```diff
    EOA  (0x7cB07FE039a92B3D784f284D919503A381BEC54f) {
    +++ description: None
      address:
-        "0x7cB07FE039a92B3D784f284D919503A381BEC54f"
+        "eth:0x7cB07FE039a92B3D784f284D919503A381BEC54f"
    }
```

```diff
    EOA  (0x7ed8d9Af9eaA194D1A75C67c1475579E42289E39) {
    +++ description: None
      address:
-        "0x7ed8d9Af9eaA194D1A75C67c1475579E42289E39"
+        "eth:0x7ed8d9Af9eaA194D1A75C67c1475579E42289E39"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      address:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "eth:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
+        "eth:0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
      values.$pastUpgrades.0.2.0:
-        "0x73A793CdcF6F0f20e14e1835Eb1462b0376727cF"
+        "eth:0x73A793CdcF6F0f20e14e1835Eb1462b0376727cF"
      values.$pastUpgrades.1.2.0:
-        "0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
+        "eth:0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
      values.bridge:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      values.BRIDGE:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      implementationNames.0x82Cb528466cF22412d89bdBE9bCF04856790dD0e:
-        "Proxy"
      implementationNames.0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846:
-        "OptimismMintableERC20Factory"
      implementationNames.eth:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e:
+        "Proxy"
      implementationNames.eth:0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846:
+        "OptimismMintableERC20Factory"
    }
```

```diff
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      address:
-        "0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
+        "eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92"
      receivedPermissions.0.via.2.condition:
-        "if the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
+        "if the number of eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
      directlyReceivedPermissions.0.condition:
-        "if the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
+        "if the number of eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
      directlyReceivedPermissions.0.description:
-        "takes ownership of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "takes ownership of eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
+        "eth:0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
      values.$members.1:
-        "0x3041BA32f451F5850c147805F5521AC206421623"
+        "eth:0x3041BA32f451F5850c147805F5521AC206421623"
      values.$members.2:
-        "0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
+        "eth:0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
      values.$members.3:
-        "0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
+        "eth:0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
      values.$members.4:
-        "0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
+        "eth:0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
      values.$members.5:
-        "0x7cB07FE039a92B3D784f284D919503A381BEC54f"
+        "eth:0x7cB07FE039a92B3D784f284D919503A381BEC54f"
      values.$members.6:
-        "0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
+        "eth:0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
      implementationNames.0x847B5c174615B1B7fDF770882256e2D3E95b9D92:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x92827223f6b397CE9F208eE352bacA710765cACb) {
    +++ description: None
      address:
-        "0x92827223f6b397CE9F208eE352bacA710765cACb"
+        "eth:0x92827223f6b397CE9F208eE352bacA710765cACb"
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      address:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.$admin:
-        "0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
      values.$implementation:
-        "0x4da82a327773965b8d4D85Fa3dB8249b387458E7"
+        "eth:0x4da82a327773965b8d4D85Fa3dB8249b387458E7"
      values.$pastUpgrades.0.2.0:
-        "0x53c165169401764778F780a69701385eb0FF19B7"
+        "eth:0x53c165169401764778F780a69701385eb0FF19B7"
      values.$pastUpgrades.1.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.2.2.0:
-        "0x53c165169401764778F780a69701385eb0FF19B7"
+        "eth:0x53c165169401764778F780a69701385eb0FF19B7"
      values.$pastUpgrades.3.2.0:
-        "0x4da82a327773965b8d4D85Fa3dB8249b387458E7"
+        "eth:0x4da82a327773965b8d4D85Fa3dB8249b387458E7"
      values.guardian:
-        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      implementationNames.0x95703e0982140D16f8ebA6d158FccEde42f04a4C:
-        "Proxy"
      implementationNames.0x4da82a327773965b8d4D85Fa3dB8249b387458E7:
-        "SuperchainConfig"
      implementationNames.eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C:
+        "Proxy"
      implementationNames.eth:0x4da82a327773965b8d4D85Fa3dB8249b387458E7:
+        "SuperchainConfig"
    }
```

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      address:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.$implementation:
-        "0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F"
+        "eth:0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F"
      values.$members.0:
-        "0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
+        "eth:0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64"
      values.$members.1:
-        "0x3041BA32f451F5850c147805F5521AC206421623"
+        "eth:0x3041BA32f451F5850c147805F5521AC206421623"
      values.$members.2:
-        "0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
+        "eth:0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
      values.$members.3:
-        "0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
+        "eth:0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
      values.$members.4:
-        "0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
+        "eth:0x4D014f3c5F33Aa9Cd1Dc29ce29618d07Ae666d15"
      values.$members.5:
-        "0x7cB07FE039a92B3D784f284D919503A381BEC54f"
+        "eth:0x7cB07FE039a92B3D784f284D919503A381BEC54f"
      values.$members.6:
-        "0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
+        "eth:0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
      values.getModules.0:
-        "0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
      values.GnosisSafe_modules.0:
-        "0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
      implementationNames.0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A:
-        "Proxy"
      implementationNames.0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F:
-        "GnosisSafe"
      implementationNames.eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A:
+        "Proxy"
      implementationNames.eth:0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa) {
    +++ description: None
      address:
-        "0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
+        "eth:0x9bbFB9919062C29a5eE15aCD93c9D7c3b14d31aa"
    }
```

```diff
    contract PreimageOracle (0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277) {
    +++ description: The PreimageOracle contract is used to load the required data from L1 for a dispute game.
      address:
-        "0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277"
+        "eth:0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277"
      implementationNames.0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277:
-        "PreimageOracle"
      implementationNames.eth:0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277:
+        "PreimageOracle"
    }
```

```diff
    EOA  (0x9Eb11A55132c851b9991F148b3Af791ca498fD7A) {
    +++ description: None
      address:
-        "0x9Eb11A55132c851b9991F148b3Af791ca498fD7A"
+        "eth:0x9Eb11A55132c851b9991F148b3Af791ca498fD7A"
    }
```

```diff
    EOA  (0xA351A874b48dCEdf1883dD4F4049bE3d9923700a) {
    +++ description: None
      address:
-        "0xA351A874b48dCEdf1883dD4F4049bE3d9923700a"
+        "eth:0xA351A874b48dCEdf1883dD4F4049bE3d9923700a"
    }
```

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "eth:0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xCA730AFfb87935E70E5889418C731eb196237476"
+        "eth:0xCA730AFfb87935E70E5889418C731eb196237476"
      values.$members.1:
-        "0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca"
+        "eth:0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca"
      values.$members.2:
-        "0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7"
+        "eth:0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7"
      values.$members.3:
-        "0x001271c57AeC639952B5201D052767c316755512"
+        "eth:0x001271c57AeC639952B5201D052767c316755512"
      values.$members.4:
-        "0xA351A874b48dCEdf1883dD4F4049bE3d9923700a"
+        "eth:0xA351A874b48dCEdf1883dD4F4049bE3d9923700a"
      values.$members.5:
-        "0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670"
+        "eth:0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670"
      values.$members.6:
-        "0xeD9919D57162D518014C391a687AA8fb9DB55654"
+        "eth:0xeD9919D57162D518014C391a687AA8fb9DB55654"
      values.$members.7:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "eth:0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      implementationNames.0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0xb23794fd6BA1CEAd01Cf54D772b8341F2F0197A5) {
    +++ description: None
      address:
-        "0xb23794fd6BA1CEAd01Cf54D772b8341F2F0197A5"
+        "eth:0xb23794fd6BA1CEAd01Cf54D772b8341F2F0197A5"
    }
```

```diff
    EOA  (0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d) {
    +++ description: None
      address:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "eth:0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
    }
```

```diff
    EOA  (0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8) {
    +++ description: None
      address:
-        "0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
+        "eth:0xBF93D4d727F7Ba1F753E1124C3e532dCb04Ea2c8"
    }
```

```diff
    EOA  (0xbfA046B0bc5cEa1596be62B8b3f79f9f41f1E0d9) {
    +++ description: None
      address:
-        "0xbfA046B0bc5cEa1596be62B8b3f79f9f41f1E0d9"
+        "eth:0xbfA046B0bc5cEa1596be62B8b3f79f9f41f1E0d9"
    }
```

```diff
    contract Optimism Security Council (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      address:
-        "0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x07dC0893cAfbF810e3E72505041f2865726Fd073"
+        "eth:0x07dC0893cAfbF810e3E72505041f2865726Fd073"
      values.$members.1:
-        "0x652BC529E171847E2fFddCeA13567643C84ccB5f"
+        "eth:0x652BC529E171847E2fFddCeA13567643C84ccB5f"
      values.$members.2:
-        "0x1822b35B09f5ce1C78ecbC06AC0A4e17885b925e"
+        "eth:0x1822b35B09f5ce1C78ecbC06AC0A4e17885b925e"
      values.$members.3:
-        "0x4A7322258c9E690e4CB8Cea6e5251443E956e61E"
+        "eth:0x4A7322258c9E690e4CB8Cea6e5251443E956e61E"
      values.$members.4:
-        "0x51aCb8e1205De850D1b512584FeE9C29C3813dDa"
+        "eth:0x51aCb8e1205De850D1b512584FeE9C29C3813dDa"
      values.$members.5:
-        "0xEF9A98511939eEe6Ec69af62082E3F2ff606877c"
+        "eth:0xEF9A98511939eEe6Ec69af62082E3F2ff606877c"
      values.$members.6:
-        "0x6323ef2b80030f3fBc508bFc321Fc71fDB95c865"
+        "eth:0x6323ef2b80030f3fBc508bFc321Fc71fDB95c865"
      values.$members.7:
-        "0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90"
+        "eth:0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90"
      values.$members.8:
-        "0x7ed8d9Af9eaA194D1A75C67c1475579E42289E39"
+        "eth:0x7ed8d9Af9eaA194D1A75C67c1475579E42289E39"
      values.$members.9:
-        "0x0aA384EB2fedD2741277A0f72909A0d7275575D7"
+        "eth:0x0aA384EB2fedD2741277A0f72909A0d7275575D7"
      values.$members.10:
-        "0x9Eb11A55132c851b9991F148b3Af791ca498fD7A"
+        "eth:0x9Eb11A55132c851b9991F148b3Af791ca498fD7A"
      values.$members.11:
-        "0xbfA046B0bc5cEa1596be62B8b3f79f9f41f1E0d9"
+        "eth:0xbfA046B0bc5cEa1596be62B8b3f79f9f41f1E0d9"
      values.$members.12:
-        "0x92827223f6b397CE9F208eE352bacA710765cACb"
+        "eth:0x92827223f6b397CE9F208eE352bacA710765cACb"
      values.GnosisSafe_modules.0:
-        "0x0454092516c9A4d636d3CAfA1e82161376C8a748"
+        "eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
      implementationNames.0xc2819DC788505Aac350142A7A707BF9D03E3Bd03:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B) {
    +++ description: allows the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
      address:
-        "0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
      description:
-        "allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe."
+        "allows the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe."
      values.deputyGuardian:
-        "0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      values.safe:
-        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B:
-        "DeputyGuardianModule"
      implementationNames.eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B:
+        "DeputyGuardianModule"
    }
```

```diff
    EOA  (0xCA730AFfb87935E70E5889418C731eb196237476) {
    +++ description: None
      address:
-        "0xCA730AFfb87935E70E5889418C731eb196237476"
+        "eth:0xCA730AFfb87935E70E5889418C731eb196237476"
    }
```

```diff
    EOA  (0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670) {
    +++ description: None
      address:
-        "0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670"
+        "eth:0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670"
    }
```

```diff
    contract AnchorStateRegistry (0xD4D7A57DCC563756DeD99e224E144A6Bf0327099) {
    +++ description: Contains the latest confirmed state root that can be used as a starting point in a dispute game.
      address:
-        "0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "eth:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e"
+        "eth:0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e"
      values.$pastUpgrades.0.2.0:
-        "0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e"
+        "eth:0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e"
      values.disputeGameFactory:
-        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0xD4D7A57DCC563756DeD99e224E144A6Bf0327099:
-        "Proxy"
      implementationNames.0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e:
-        "AnchorStateRegistry"
      implementationNames.eth:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099:
+        "Proxy"
      implementationNames.eth:0xb18Dc2d29AB3cBB7a43076d57F0dcAdda70F2E2e:
+        "AnchorStateRegistry"
    }
```

```diff
    EOA  (0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90) {
    +++ description: None
      address:
-        "0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90"
+        "eth:0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90"
    }
```

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      address:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xe2F826324b2faf99E513D16D266c3F80aE87832B"
+        "eth:0xe2F826324b2faf99E513D16D266c3F80aE87832B"
      values.$pastUpgrades.0.2.0:
-        "0xB4BA75C87A48a233BC22678EfDa7d49CfD89ea5F"
+        "eth:0xB4BA75C87A48a233BC22678EfDa7d49CfD89ea5F"
      values.$pastUpgrades.1.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.2.2.0:
-        "0xe2F826324b2faf99E513D16D266c3F80aE87832B"
+        "eth:0xe2F826324b2faf99E513D16D266c3F80aE87832B"
      values.disputeGameFactory:
-        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.guardian:
-        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.l2Sender:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.systemConfig:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      implementationNames.0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C:
-        "Proxy"
      implementationNames.0xe2F826324b2faf99E513D16D266c3F80aE87832B:
-        "OptimismPortal2"
      implementationNames.eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C:
+        "Proxy"
      implementationNames.eth:0xe2F826324b2faf99E513D16D266c3F80aE87832B:
+        "OptimismPortal2"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      address:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.addressManager:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "eth:0x5891090d5085679714cb0e62f74950a3c19146a8"
      values.owner:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "eth:0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      implementationNames.0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D:
-        "ProxyAdmin"
      implementationNames.eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D:
+        "ProxyAdmin"
    }
```

```diff
    EOA  (0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29) {
    +++ description: None
      address:
-        "0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
+        "eth:0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
    }
```

```diff
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "eth:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      values.owner:
-        "0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
      implementationNames.0xdE1FCfB0851916CA5101820A69b13a4E276bd81F:
-        "Lib_AddressManager"
      implementationNames.eth:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F:
+        "Lib_AddressManager"
    }
```

```diff
    EOA  (0xE7dEA1306D9F829bA469d1904c50903b46ebd02e) {
    +++ description: None
      address:
-        "0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
+        "eth:0xE7dEA1306D9F829bA469d1904c50903b46ebd02e"
    }
```

```diff
    EOA  (0xeD9919D57162D518014C391a687AA8fb9DB55654) {
    +++ description: None
      address:
-        "0xeD9919D57162D518014C391a687AA8fb9DB55654"
+        "eth:0xeD9919D57162D518014C391a687AA8fb9DB55654"
    }
```

```diff
    EOA  (0xEF9A98511939eEe6Ec69af62082E3F2ff606877c) {
    +++ description: None
      address:
-        "0xEF9A98511939eEe6Ec69af62082E3F2ff606877c"
+        "eth:0xEF9A98511939eEe6Ec69af62082E3F2ff606877c"
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      address:
-        "0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      values.$admin:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      values.$implementation:
-        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
+        "eth:0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      values.$pastUpgrades.0.2.0:
-        "0xE187FEF3AAe13137e6062B2634cCE43B599156F6"
+        "eth:0xE187FEF3AAe13137e6062B2634cCE43B599156F6"
      values.$pastUpgrades.1.2.0:
-        "0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
+        "eth:0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"
      values.$pastUpgrades.2.2.0:
-        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
+        "eth:0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      values.OTHER_MESSENGER:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.otherMessenger:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.portal:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      values.PORTAL:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      values.ResolvedDelegateProxy_addressManager:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "eth:0x5891090d5085679714cb0e62f74950a3c19146a8"
      values.superchainConfig:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      implementationNames.0xf931a81D18B1766d15695ffc7c1920a62b7e710a:
-        "ResolvedDelegateProxy"
      implementationNames.0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65:
-        "L1CrossDomainMessenger"
      implementationNames.eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a:
+        "ResolvedDelegateProxy"
      implementationNames.eth:0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65:
+        "L1CrossDomainMessenger"
    }
```

```diff
    EOA  (0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca) {
    +++ description: None
      address:
-        "0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca"
+        "eth:0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca"
    }
```

```diff
    EOA  (0xff00000000000000000000000000000000000480) {
    +++ description: None
      address:
-        "0xff00000000000000000000000000000000000480"
+        "eth:0xff00000000000000000000000000000000000480"
    }
```

```diff
+   Status: CREATED
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748)
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the eth:0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
```

```diff
+   Status: CREATED
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea)
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
```

```diff
+   Status: CREATED
    contract Optimism Guardian Multisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeputyPauseModule (0x126a736B18E0a64fBA19D421647A530E327E112C)
    +++ description: Allows eth:0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module.
```

```diff
+   Status: CREATED
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB)
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53)
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9)
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
```

```diff
+   Status: CREATED
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MIPS (0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C)
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C)
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PreimageOracle (0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277)
    +++ description: The PreimageOracle contract is used to load the required data from L1 for a dispute game.
```

```diff
+   Status: CREATED
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Optimism Security Council (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B)
    +++ description: allows the eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
```

```diff
+   Status: CREATED
    contract AnchorStateRegistry (0xD4D7A57DCC563756DeD99e224E144A6Bf0327099)
    +++ description: Contains the latest confirmed state root that can be used as a starting point in a dispute game.
```

```diff
+   Status: CREATED
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C)
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

Generated with discovered.json: 0x54dbf5c8ebc31c8b03912527814570ad889a1ffb

# Diff at Mon, 14 Jul 2025 08:02:47 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0dc82cd5064c9c6dc9fb20e2291a8bb6b2048e27 block: 22731118
- current block number: 22731118

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22731118 (main branch discovery), not current.

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      description:
-        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

Generated with discovered.json: 0x19a698da34a8209697ae8bc998d5afdff597d1ae

# Diff at Fri, 04 Jul 2025 12:19:27 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22731118
- current block number: 22731118

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22731118 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      directlyReceivedPermissions.0.from:
-        "ethereum:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
    }
```

```diff
    contract Optimism Guardian Multisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract DeputyPauseModule (0x126a736B18E0a64fBA19D421647A530E327E112C) {
    +++ description: Allows 0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module.
      directlyReceivedPermissions.0.from:
-        "ethereum:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
    }
```

```diff
    EOA  (0x2307278fC8aB0005974A6DeD2FA6d1187333a223) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
+        "eth:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
+        "eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
    }
```

```diff
    EOA Optimism EOA 1 (0x352f1defB49718e7Ea411687E850aA8d6299F7aC) {
    +++ description: None
      receivedPermissions.0.via.3.address:
-        "ethereum:0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
      receivedPermissions.0.via.2.address:
-        "ethereum:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
+        "eth:0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A"
      receivedPermissions.0.via.1.address:
-        "ethereum:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
      receivedPermissions.0.via.0.address:
-        "ethereum:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      receivedPermissions.0.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "eth:0x126a736B18E0a64fBA19D421647A530E327E112C"
    }
```

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "eth:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      receivedPermissions.0.via.0.address:
-        "ethereum:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
      receivedPermissions.0.from:
-        "ethereum:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "eth:0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      receivedPermissions.1.via.0.address:
-        "ethereum:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
      receivedPermissions.1.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
+        "eth:0x543bA4AADBAb8f9025686Bd03993043599c6fB04"
    }
```

```diff
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      receivedPermissions.0.via.2.address:
-        "ethereum:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
+        "eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
      receivedPermissions.0.via.1.address:
-        "ethereum:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
+        "eth:0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"
      receivedPermissions.0.via.0.address:
-        "ethereum:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      receivedPermissions.0.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
+        "eth:0x0454092516c9A4d636d3CAfA1e82161376C8a748"
    }
```

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      receivedPermissions.0.via.1.address:
-        "ethereum:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
      receivedPermissions.0.via.0.address:
-        "ethereum:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      receivedPermissions.0.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      directlyReceivedPermissions.0.from:
-        "ethereum:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
+        "eth:0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B"
    }
```

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
+        "eth:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
      receivedPermissions.1.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.1.from:
-        "ethereum:0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "eth:0x5891090d5085679714cb0e62f74950a3c19146a8"
      receivedPermissions.2.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.2.from:
-        "ethereum:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      receivedPermissions.3.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.3.from:
-        "ethereum:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
+        "eth:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      receivedPermissions.4.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.4.from:
-        "ethereum:0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      receivedPermissions.5.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.5.from:
-        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      receivedPermissions.6.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.6.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      receivedPermissions.7.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.7.from:
-        "ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "eth:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      receivedPermissions.8.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.8.from:
-        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "eth:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      receivedPermissions.9.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.9.from:
-        "ethereum:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      receivedPermissions.10.via.0.address:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      receivedPermissions.10.from:
-        "ethereum:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      directlyReceivedPermissions.0.from:
-        "ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
+        "eth:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    EOA  (0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      receivedPermissions.1.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
    }
```

```diff
    contract Optimism Security Council (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      receivedPermissions.0.via.0.address:
-        "ethereum:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      receivedPermissions.0.from:
-        "ethereum:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "eth:0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B) {
    +++ description: allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
      directlyReceivedPermissions.0.from:
-        "ethereum:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "eth:0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "eth:0x5891090d5085679714cb0e62f74950a3c19146a8"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
+        "eth:0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
+        "eth:0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x470458C91978D2d929704489Ad730DC3E3001113"
+        "eth:0x470458C91978D2d929704489Ad730DC3E3001113"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "eth:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "eth:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      directlyReceivedPermissions.7.from:
-        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "eth:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      directlyReceivedPermissions.8.from:
-        "ethereum:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "eth:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      directlyReceivedPermissions.9.from:
-        "ethereum:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
+        "eth:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
    }
```

```diff
    EOA  (0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "eth:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
    }
```

Generated with discovered.json: 0x9caff1ce211ab3954488513b83c215787289efd1

# Diff at Wed, 18 Jun 2025 11:38:22 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a8e4f22a1441bd5040898cc3d3d62b3582942b65 block: 22593567
- current block number: 22731118

## Description

MS signer changed.

## Watched changes

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      values.$members.4:
-        "0x0a214444613E3970049BD74a8d72d5bF9EF0094c"
+        "0xCA730AFfb87935E70E5889418C731eb196237476"
    }
```

Generated with discovered.json: 0x816f2e05a6447c2270f700b70ea353b6a50d11af

# Diff at Mon, 16 Jun 2025 10:14:40 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@e1208475abce20cea1768d2e4878c03350c1b7c9 block: 22593567
- current block number: 22593567

## Description

Config: add permissioned opfp role tags.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22593567 (main branch discovery), not current.

```diff
    EOA  (0x2307278fC8aB0005974A6DeD2FA6d1187333a223) {
    +++ description: None
      receivedPermissions:
+        [{"permission":"propose","from":"ethereum:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9","role":".proposer"}]
    }
```

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.10:
+        {"permission":"upgrade","from":"ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A","role":"admin","via":[{"address":"ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}
      receivedPermissions.9:
+        {"permission":"upgrade","from":"ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e","role":"admin","via":[{"address":"ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}
      receivedPermissions.8.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      receivedPermissions.7.from:
-        "ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      receivedPermissions.6.from:
-        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "ethereum:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
      receivedPermissions.5.from:
-        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "ethereum:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      receivedPermissions.4.permission:
-        "upgrade"
+        "challenge"
      receivedPermissions.4.from:
-        "ethereum:0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "ethereum:0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
      receivedPermissions.4.role:
-        "admin"
+        ".challenger"
      receivedPermissions.4.via:
-        [{"address":"ethereum:0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.9:
+        {"permission":"upgrade","from":"ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A","role":"admin"}
      directlyReceivedPermissions.8.from:
-        "ethereum:0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      directlyReceivedPermissions.7.from:
-        "ethereum:0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
+        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      directlyReceivedPermissions.5.from:
-        "ethereum:0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
+        "ethereum:0xf931a81D18B1766d15695ffc7c1920a62b7e710a"
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$admin:
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

Generated with discovered.json: 0x81305df8ad3debfc96bf7f70e08bb180cc4d174e

# Diff at Fri, 30 May 2025 05:49:21 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 22567927
- current block number: 22593567

## Description

burncaller burns all USDC and is then removed. USDC is now native (adjusted tvs conf).

https://world.org/blog/announcements/world-integrates-circles-usdc-and-cctp

## Watched changes

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
      values.burnCaller:
-        "0x2ba529D229FDc1DA08e67F536588aE45932d030A"
+        "0x0000000000000000000000000000000000000000"
      values.messengerStatus:
-        2
+        3
    }
```

```diff
-   Status: DELETED
    contract Burn Caller (0x2ba529D229FDc1DA08e67F536588aE45932d030A)
    +++ description: None
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
+++ description: Gas limit for blocks on L2.
+++ severity: LOW
      values.gasLimit:
-        33000000
+        36000000
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22567927 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0x87a73ef702848d310209e24d6d735c715f347061

# Diff at Mon, 26 May 2025 16:02:09 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d675d0bd208eadc685b2cb489512b83f62c0890e block: 22481876
- current block number: 22567927

## Description

Burncaller (unverified contract) added to external usdc escrow.

## Watched changes

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
      values.burnCaller:
-        "0x0000000000000000000000000000000000000000"
+        "0x2ba529D229FDc1DA08e67F536588aE45932d030A"
      values.messengerStatus:
-        0
+        2
    }
```

```diff
+   Status: CREATED
    contract Burn Caller (0x2ba529D229FDc1DA08e67F536588aE45932d030A)
    +++ description: None
```

Generated with discovered.json: 0xaa90ed75998073f7368aa885f616c6cc6fd8901d

# Diff at Fri, 23 May 2025 09:41:07 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22481876
- current block number: 22481876

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22481876 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      directlyReceivedPermissions.0.role:
+        ".GnosisSafe_modules"
    }
```

```diff
    contract Optimism Guardian Multisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      directlyReceivedPermissions.0.role:
+        ".guardian"
    }
```

```diff
    contract DeputyPauseModule (0x126a736B18E0a64fBA19D421647A530E327E112C) {
    +++ description: Allows 0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module.
      directlyReceivedPermissions.0.role:
+        ".GnosisSafe_modules"
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      receivedPermissions.0.role:
+        ".livenessGuard"
    }
```

```diff
    EOA Optimism EOA 1 (0x352f1defB49718e7Ea411687E850aA8d6299F7aC) {
    +++ description: None
      receivedPermissions.0.role:
+        ".guardian"
      directlyReceivedPermissions.0.role:
+        ".deputy"
    }
```

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      directlyReceivedPermissions.1.permission:
-        "interact"
+        "upgrade"
      directlyReceivedPermissions.1.from:
-        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      directlyReceivedPermissions.1.description:
-        "set and change address mappings."
      directlyReceivedPermissions.1.role:
+        "admin"
      directlyReceivedPermissions.0.permission:
-        "upgrade"
+        "interact"
      directlyReceivedPermissions.0.from:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      directlyReceivedPermissions.0.description:
+        "set and change address mappings."
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      receivedPermissions.1.permission:
-        "interact"
+        "upgrade"
      receivedPermissions.1.from:
-        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      receivedPermissions.1.description:
-        "set and change address mappings."
      receivedPermissions.1.role:
+        "admin"
      receivedPermissions.0.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.0.from:
-        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
+        "0xdE1FCfB0851916CA5101820A69b13a4E276bd81F"
      receivedPermissions.0.description:
+        "set and change address mappings."
      receivedPermissions.0.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      receivedPermissions.0.role:
+        ".guardian"
      directlyReceivedPermissions.0.role:
+        ".fallbackOwner"
    }
```

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      receivedPermissions.0.role:
+        ".guardian"
      directlyReceivedPermissions.0.role:
+        ".deputyGuardian"
    }
```

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.permission:
-        "interact"
+        "upgrade"
      receivedPermissions.2.from:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      receivedPermissions.2.description:
-        "set and change address mappings."
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.1.from:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "0x5891090d5085679714cb0e62f74950a3c19146a8"
      receivedPermissions.1.description:
+        "set and change address mappings."
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".$admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d) {
    +++ description: None
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    contract Optimism Security Council (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      receivedPermissions.0.role:
+        ".guardian"
    }
```

```diff
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B) {
    +++ description: allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
      directlyReceivedPermissions.0.role:
+        ".GnosisSafe_modules"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.8.role:
+        "admin"
      directlyReceivedPermissions.7.role:
+        "admin"
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.permission:
-        "interact"
+        "upgrade"
      directlyReceivedPermissions.2.from:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      directlyReceivedPermissions.2.description:
-        "set and change address mappings."
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.permission:
-        "upgrade"
+        "interact"
      directlyReceivedPermissions.1.from:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "0x5891090d5085679714cb0e62f74950a3c19146a8"
      directlyReceivedPermissions.1.description:
+        "set and change address mappings."
      directlyReceivedPermissions.1.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".$admin"
    }
```

```diff
    EOA  (0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

Generated with discovered.json: 0xb9740cfc3ed2f99e4dcf1b7d09b3a662a477a14b

# Diff at Wed, 14 May 2025 14:05:07 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@3e40b87963942c5b1b364373f150a7eda9e4eccd block: 22437751
- current block number: 22481876

## Description

gas limit bumped.

## Watched changes

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
+++ description: Gas limit for blocks on L2.
+++ severity: LOW
      values.gasLimit:
-        30000000
+        33000000
    }
```

Generated with discovered.json: 0xff7140614215bb120dadb47e80d415b52e00efcd

# Diff at Fri, 09 May 2025 10:09:24 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@c3a1d49c07f4092914d62c65181e5fec18a88318 block: 22437751
- current block number: 22437751

## Description

Config related: Move IFs to the editable string for condition configs (yeet IFs from the automatic resolver).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22437751 (main branch discovery), not current.

```diff
    EOA Optimism EOA 1 (0x352f1defB49718e7Ea411687E850aA8d6299F7aC) {
    +++ description: None
      receivedPermissions.0.via.3.condition:
-        "not revoked by the Security Council"
+        "if not revoked by the Security Council"
      receivedPermissions.0.via.1.address:
-        "0x126a736B18E0a64fBA19D421647A530E327E112C"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      receivedPermissions.0.via.1.condition:
-        "restricted to the global pause function"
      receivedPermissions.0.via.0.address:
-        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
+        "0x126a736B18E0a64fBA19D421647A530E327E112C"
      receivedPermissions.0.via.0.condition:
+        "though restricted to the global pause function"
      directlyReceivedPermissions.0.condition:
-        "restricted to the global pause function"
+        "though restricted to the global pause function"
    }
```

```diff
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      receivedPermissions.0.via.0.condition:
-        "the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
+        "if the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
      directlyReceivedPermissions.0.condition:
-        "the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
+        "if the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."
    }
```

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      receivedPermissions.0.via.1.condition:
-        "not revoked by the Security Council"
+        "if not revoked by the Security Council"
      directlyReceivedPermissions.0.condition:
-        "not revoked by the Security Council"
+        "if not revoked by the Security Council"
    }
```

Generated with discovered.json: 0x3c059176e138b82f17c31128124cc2b03e07258e

# Diff at Thu, 08 May 2025 08:51:52 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8e1926142ab0c57cc131de4d8da307e13d9af54d block: 22194715
- current block number: 22437751

## Description

OP stack DeputyPauser upgrade (see op mainnet for more info).

## Watched changes

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      values.getModules.0:
+        "0x126a736B18E0a64fBA19D421647A530E327E112C"
      values.GnosisSafe_modules.0:
+        "0x126a736B18E0a64fBA19D421647A530E327E112C"
    }
```

```diff
+   Status: CREATED
    contract DeputyPauseModule (0x126a736B18E0a64fBA19D421647A530E327E112C)
    +++ description: Allows 0x352f1defB49718e7Ea411687E850aA8d6299F7aC, called the deputy pauser, to act on behalf of the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A if set as its Safe module.
```

## Source code changes

```diff
.../ethereum/.flat/DeputyPauseModule.sol           | 1338 ++++++++++++++++++++
 1 file changed, 1338 insertions(+)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22194715 (main branch discovery), not current.

```diff
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9) {
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
      usedTypes.0.arg.0x03682932cec7ce0a3874b19675a6bbc923054a7b321efc7d3835187b172494b6:
+        "v1.6.0 (cannon64)"
    }
```

Generated with discovered.json: 0x1be766cd6884826edac73a54b28e8b199be57b25

# Diff at Tue, 29 Apr 2025 08:19:15 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22194715
- current block number: 22194715

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22194715 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      issuedPermissions:
-        [{"permission":"interact","to":"0x24424336F04440b1c28685a38303aC33C9D14a25","description":"can remove members of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 inactive for 98d.","via":[]}]
    }
```

```diff
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea) {
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53) {
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
      issuedPermissions:
-        [{"permission":"interact","to":"0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d","description":"can pull funds from the contract in case of emergency.","via":[]},{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","description":"set and change address mappings.","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29","via":[]},{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions:
-        [{"permission":"guard","to":"0x847B5c174615B1B7fDF770882256e2D3E95b9D92","via":[{"address":"0x0454092516c9A4d636d3CAfA1e82161376C8a748","condition":"the number of 0xc2819DC788505Aac350142A7A707BF9D03E3Bd03 members falls below 8."},{"address":"0xc2819DC788505Aac350142A7A707BF9D03E3Bd03"},{"address":"0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"}]},{"permission":"guard","to":"0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A","via":[{"address":"0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B","condition":"not revoked by the Security Council"},{"address":"0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"}]},{"permission":"guard","to":"0xc2819DC788505Aac350142A7A707BF9D03E3Bd03","via":[{"address":"0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"}]},{"permission":"upgrade","to":"0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A","via":[{"address":"0x543bA4AADBAb8f9025686Bd03993043599c6fB04"}]}]
    }
```

```diff
    contract AnchorStateRegistry (0xD4D7A57DCC563756DeD99e224E144A6Bf0327099) {
    +++ description: Contains the latest confirmed state root that can be used as a starting point in a dispute game.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A","description":"set and change address mappings.","via":[{"address":"0x543bA4AADBAb8f9025686Bd03993043599c6fB04"}]}]
    }
```

Generated with discovered.json: 0x680cc0446d0285095b1ed16c1ee1f33d84136952

# Diff at Fri, 11 Apr 2025 13:16:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b607477490db79d49274f7585039ac7263456118 block: 22194715
- current block number: 22194715

## Description

Config: global mapping updated for op stack prestates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22194715 (main branch discovery), not current.

```diff
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9) {
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
      usedTypes.0.arg.0x03ee2917da962ec266b091f4b62121dc9682bb0db534633707325339f99ee405:
+        "v1.5.1-rc.1 (cannon64)"
      usedTypes.0.arg.0x0354eee87a1775d96afee8977ef6d5d6bd3612b256170952a01bf1051610ee01:
+        "v1.5.1-rc.1"
      usedTypes.0.arg.0x039970872142f48b189d18dcbc03a3737338d098b0101713dc2d6710f9deb5ef:
+        "v1.5.0 (cannon64)"
      usedTypes.0.arg.0x039facea52b20c605c05efb0a33560a92de7074218998f75bcdf61e8989cb5d9:
+        "v1.5.0"
      usedTypes.0.arg.0x0336751a224445089ba5456c8028376a0faf2bafa81d35f43fab8730258cdf37:
+        "v1.4.0-unichain"
    }
```

Generated with discovered.json: 0x98b2b9bc07a8c29da161a0518206f1fc6d512a0f

# Diff at Thu, 10 Apr 2025 14:43:32 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@f38a3c9bf359344e4c4cd3006f58271cb8f78d15 block: 22194715
- current block number: 22194715

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22194715 (main branch discovery), not current.

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      displayName:
-        "ProxyAdmin"
    }
```

Generated with discovered.json: 0xeae6bd770f4ab78572fc165210b22496d48a7bc4

# Diff at Fri, 04 Apr 2025 09:39:36 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@b3154c4385e52c9ffc0dab984c207390e5ccc13d block: 22166596
- current block number: 22194715

## Description

Discovery rerun on the same block number with only config-related changes.

## Watched changes

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sourceHashes.1:
-        "0x3ac96c9c95e25f689f65a50f24b325e3f891029cb1cea96dc642418bbb535b1d"
+        "0x03dba37173051b02bc81487e181c791bcf1aef664c249e5d035f11f488bdd686"
      values.$implementation:
-        "0x53c165169401764778F780a69701385eb0FF19B7"
+        "0x4da82a327773965b8d4D85Fa3dB8249b387458E7"
      values.$pastUpgrades.3:
+        ["2025-04-02T16:50:23.000Z","0x5f3530e593bbac37c61dc5b7755b6a40c06c20c1a3a1b13fca5b7d00cde65c29",["0x4da82a327773965b8d4D85Fa3dB8249b387458E7"]]
      values.$upgradeCount:
-        3
+        4
      values.version:
-        "1.1.0"
+        "1.2.0"
    }
```

## Source code changes

```diff
.../SuperchainConfig/SuperchainConfig.sol                         | 8 ++++----
 1 file changed, 4 insertions(+), 4 deletions(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22166596 (main branch discovery), not current.

```diff
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53) {
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
      issuedPermissions.1:
+        {"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "interact"
      issuedPermissions.0.to:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.via.0:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}
      issuedPermissions.0.description:
+        "can pull funds from the contract in case of emergency."
    }
```

```diff
    contract undefined (0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d) {
    +++ description: None
      receivedPermissions.1:
+        {"permission":"interact","from":"0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53","description":"can pull funds from the contract in case of emergency."}
    }
```

Generated with discovered.json: 0x7d7a2c22d692f14526ebfd644f785714a525c271

# Diff at Mon, 31 Mar 2025 11:27:29 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@71ffebe835be10b6d5d09ef65aa19b910de8a2ec block: 21895014
- current block number: 22166596

## Description

ms signer changes.

## Watched changes

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      values.$members.7:
+        "0x001271c57AeC639952B5201D052767c316755512"
      values.$members.6:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      values.$members.5:
-        "0x5EABE7f6673311EdD1Ad17A76ce148c2Bb56aF01"
+        "0xFB00073F931A817b244bF211aA2E5DCBfff8B1ca"
      values.$members.4:
-        "0x39CF304731099e756204219BF0a8cCc4738dE9dD"
+        "0x0a214444613E3970049BD74a8d72d5bF9EF0094c"
      values.$members.3:
-        "0xaCEF7482b54a57F50b1CD8c99d1dC1964202A063"
+        "0xA351A874b48dCEdf1883dD4F4049bE3d9923700a"
      values.$members.2:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xeD9919D57162D518014C391a687AA8fb9DB55654"
      values.$members.1:
-        "0x3f0030b9Ca695Abd41b2B619F3298e172e4FCAD6"
+        "0x35A2079110aa30d1De381cf75aCd1836b6dEE1d7"
      values.$members.0:
-        "0x2e42cEfC761e64Bf4442694220d31C2464a6EE21"
+        "0xd1447Dd15D9e24ddFF99f0fE3C88Bf64d23D1670"
      values.$threshold:
-        3
+        5
      values.multisigThreshold:
-        "3 of 6 (50%)"
+        "5 of 8 (63%)"
    }
```

Generated with discovered.json: 0x98c85b5c2f2295f8884250768e736f23d1f00b30

# Diff at Thu, 27 Mar 2025 11:15:43 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 21895014
- current block number: 21895014

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

```diff
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0x3535636dc464a2e733b2b1396a16062323477aa3

# Diff at Tue, 18 Mar 2025 08:14:33 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@4ef7a8dbcec1cd9fec77aae2b73d81347a4ffb13 block: 21895014
- current block number: 21895014

## Description

Config: change Multisig names.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract Optimism Guardian Multisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      name:
-        "SuperchainGuardianMultisig"
+        "Optimism Guardian Multisig"
    }
```

```diff
    contract Alchemy Multisig 1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      name:
-        "AlchemyMultisig1"
+        "Alchemy Multisig 1"
    }
```

```diff
    contract Optimism Security Council (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      name:
-        "SecurityCouncilMultisig"
+        "Optimism Security Council"
    }
```

Generated with discovered.json: 0x3ed0c27d50bebcde863cc997064b2a6e47b203ed

# Diff at Tue, 04 Mar 2025 11:26:49 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 21895014
- current block number: 21895014

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        false
      values.opStackDA.isUsingCelestia:
+        false
    }
```

Generated with discovered.json: 0xd546036e8eef7ba5db70aa680c3a82ce99c22f7b

# Diff at Tue, 04 Mar 2025 10:40:12 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21895014
- current block number: 21895014

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      sinceBlock:
+        19989094
    }
```

```diff
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea) {
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
      sinceBlock:
+        21565406
    }
```

```diff
    contract SuperchainGuardianMultisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2) {
    +++ description: None
      sinceBlock:
+        19968607
    }
```

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
      sinceBlock:
+        20592251
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sinceBlock:
+        20178187
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      sinceBlock:
+        19989094
    }
```

```diff
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64) {
    +++ description: None
      sinceBlock:
+        16780617
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        20178184
    }
```

```diff
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53) {
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
      sinceBlock:
+        21716181
    }
```

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      sinceBlock:
+        17365800
    }
```

```diff
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9) {
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
      sinceBlock:
+        21716184
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        20178172
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      sinceBlock:
+        19185554
    }
```

```diff
    contract MIPS (0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C) {
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
      sinceBlock:
+        21379266
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        20178183
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sinceBlock:
+        20178186
    }
```

```diff
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92) {
    +++ description: None
      sinceBlock:
+        19185544
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      sinceBlock:
+        19064589
    }
```

```diff
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A) {
    +++ description: None
      sinceBlock:
+        11670007
    }
```

```diff
    contract PreimageOracle (0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277) {
    +++ description: The PreimageOracle contract is used to load the required data from L1 for a dispute game.
      sinceBlock:
+        20637600
    }
```

```diff
    contract AlchemyMultisig1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      sinceBlock:
+        20178171
    }
```

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      sinceBlock:
+        19185517
    }
```

```diff
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B) {
    +++ description: allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
      sinceBlock:
+        20566057
    }
```

```diff
    contract AnchorStateRegistry (0xD4D7A57DCC563756DeD99e224E144A6Bf0327099) {
    +++ description: Contains the latest confirmed state root that can be used as a starting point in a dispute game.
      sinceBlock:
+        21565407
    }
```

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      sinceBlock:
+        20178182
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      sinceBlock:
+        20178173
    }
```

```diff
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        12686687
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        20178185
    }
```

Generated with discovered.json: 0x21942baa1bb49768f39d15aae2f31adad63b8064

# Diff at Thu, 27 Feb 2025 12:01:49 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@a4b50e45bb44f8ceeea29f9236088d26a843c885 block: 21895014
- current block number: 21895014

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      displayName:
-        "OptimismPortal"
    }
```

```diff
    contract AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      name:
-        "Lib_AddressManager"
+        "AddressManager"
      displayName:
-        "AddressManager"
    }
```

Generated with discovered.json: 0x08ffeeafb46ff6b8bf6c4764bc67833fb4f9a0a7

# Diff at Wed, 26 Feb 2025 10:33:16 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 21895014
- current block number: 21895014

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21895014 (main branch discovery), not current.

```diff
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea) {
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      category:
+        {"name":"Shared Infrastructure","priority":4}
    }
```

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

Generated with discovered.json: 0xcc9c6d755e302a060785f928d978ab3084e5e214

# Diff at Fri, 21 Feb 2025 13:28:43 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21829678
- current block number: 21895014

## Description

Worldchain does what is assumed to be a switch to the latest config. gasLimit per block should be the same.

## Watched changes

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.eip1559Denominator:
-        0
+        250
      values.eip1559Elasticity:
-        0
+        2
+++ description: Gas limit for blocks on L2.
+++ severity: LOW
      values.gasLimit:
-        150000000
+        30000000
    }
```

Generated with discovered.json: 0xb6c5e61402f81b8a4f34779a58ad1b70eefcae62

# Diff at Fri, 21 Feb 2025 09:00:27 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 21829678
- current block number: 21829678

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21829678 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      categories:
-        ["Gateways&Escrows"]
    }
```

```diff
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C) {
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      categories:
-        ["Upgrades&Governance"]
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

Generated with discovered.json: 0xd2c836c0be3a737d3ecb22d92e28a338813161a0

# Diff at Wed, 12 Feb 2025 10:01:28 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@554a6f0e6aa688c758b37653d0be7eb446f9152e block: 21802840
- current block number: 21829678

## Description

Optimism SecurityCouncil rotates signers.

## Watched changes

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      values.$members.7:
-        "0x74FAE9a9fbe31d1F69b95f59CaF12736a8b6B310"
+        "0xd5b735b676A043a53946C3b6F6BE28c1ECE6aC90"
      values.$members.5:
-        "0x5C0F529d5B025540c54f71d2BcbB4c78F368C47e"
+        "0xEF9A98511939eEe6Ec69af62082E3F2ff606877c"
    }
```

Generated with discovered.json: 0x7be98ec5f634cd241daa6a71804cd619908887c7

# Diff at Mon, 10 Feb 2025 19:05:02 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 21802840
- current block number: 21802840

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21802840 (main branch discovery), not current.

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0x3399b030d045c64d4a8c7dbc625ae4c6d23a3115

# Diff at Sat, 08 Feb 2025 15:58:48 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@ef01ea79812e0d524af00be3fae1170cef6fd662 block: 21786511
- current block number: 21802840

## Description

Single SC member rotated.

## Watched changes

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      values.$members.12:
-        "0xE895076cD050F1f042d1040E47b5929bE989E514"
+        "0x92827223f6b397CE9F208eE352bacA710765cACb"
      values.$members.1:
-        "0x0a122d8aA40758FBAFf0360BFB391EdFfD9758b8"
+        "0x652BC529E171847E2fFddCeA13567643C84ccB5f"
    }
```

Generated with discovered.json: 0x0e944c5618e9444beaf1f4ec1224c9c00b981915

# Diff at Thu, 06 Feb 2025 09:17:48 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@fa699ce266b15edb364aa471a661f580ea1a4529 block: 21778558
- current block number: 21786511

## Description

OP Stack SC signer rotation.

## Watched changes

```diff
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03) {
    +++ description: None
      values.$members.9:
-        "0x8Afe777B5A4D1e156435ab44Ad4b73A318cE0EA4"
+        "0x0aA384EB2fedD2741277A0f72909A0d7275575D7"
    }
```

Generated with discovered.json: 0xd0bb385bba331054d1500d59974e3ff082935a53

# Diff at Wed, 05 Feb 2025 06:39:38 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@24a3610845e7ae2b3cc2daf90feff25e498e4068 block: 21736873
- current block number: 21778558

## Description

Upgrade to new SystemConfig (known implementation).

## Watched changes

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes.1:
-        "0xbbb92920a096eced30e3ce67bbc443f134b217e8847433fbb192ecb9fdddcbc2"
+        "0xc7135dbd2a53312d36df3f3ee91ce0a5a459ab8fc7725880a3a9c55a5fa0ed6c"
      values.$implementation:
-        "0xF56D96B2535B932656d3c04Ebf51baBff241D886"
+        "0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"
      values.$pastUpgrades.4:
+        ["2025-02-04T20:03:11.000Z","0x9da5a8b8130dc6307e94823d5f4f372f09c39073c3c73d6639e5f00761e6f045",["0xAB9d6cB7A427c0765163A7f45BB91cAfe5f2D375"]]
      values.$pastUpgrades.3:
+        ["2025-02-04T20:03:11.000Z","0x9da5a8b8130dc6307e94823d5f4f372f09c39073c3c73d6639e5f00761e6f045",["0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"]]
      values.$upgradeCount:
-        3
+        5
      values.version:
-        "2.2.0"
+        "2.3.0"
      values.basefeeScalar:
+        8697
      values.blobbasefeeScalar:
+        906223
      values.eip1559Denominator:
+        0
      values.eip1559Elasticity:
+        0
      values.gasPayingToken:
+        {"addr_":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE","decimals_":18}
      values.gasPayingTokenName:
+        "Ether"
      values.gasPayingTokenSymbol:
+        "ETH"
      values.isCustomGasToken:
+        false
    }
```

## Source code changes

```diff
.../SystemConfig/SystemConfig.sol                  | 1458 +++++++++++++++++++-
 1 file changed, 1436 insertions(+), 22 deletions(-)
```

Generated with discovered.json: 0x84b4a72176520f0a282c181935605f0c4a9d27be

# Diff at Tue, 04 Feb 2025 12:33:24 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21736873
- current block number: 21736873

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21736873 (main branch discovery), not current.

```diff
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748) {
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract AlchemyMultisig1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract Lib_AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0xcf483c6972e1534b511c38b89b3b0e28b9f7862f

# Diff at Thu, 30 Jan 2025 10:52:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2da0612158e4fa23c41926c49e88a7b955a8c5dc block: 21694441
- current block number: 21736873

## Description

Permissioned dispute game upgraded to known contracts.

## Watched changes

```diff
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea) {
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
      values.gameImpls.1:
-        "0x48cf980849a7eEA03180f7dea4E21C112097b03E"
+        "0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9"
    }
```

```diff
-   Status: DELETED
    contract MIPS (0x16e83cE5Ce29BF90AD9Da06D2fE6a15d5f344ce4)
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
```

```diff
-   Status: DELETED
    contract PermissionedDisputeGame (0x48cf980849a7eEA03180f7dea4E21C112097b03E)
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
```

```diff
-   Status: DELETED
    contract DelayedWETH (0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A)
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
```

```diff
    contract AlchemyMultisig1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.6.from:
-        "0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A"
+        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      receivedPermissions.5.from:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      receivedPermissions.4.from:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.6.from:
-        "0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A"
+        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      directlyReceivedPermissions.5.from:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      directlyReceivedPermissions.4.from:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
+        "0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53"
    }
```

```diff
+   Status: CREATED
    contract DelayedWETH (0x4E6dE8B4c2D5aD6c603648f78311a21558D37A53)
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0x55E6125F946F3cB24FC3E07dd7242f96Ce512BD9)
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
```

```diff
+   Status: CREATED
    contract MIPS (0x5fE03a12C1236F9C22Cb6479778DDAa4bce6299C)
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
```

## Source code changes

```diff
.../ethereum/{.flat@21694441 => .flat}/MIPS.sol    | 444 +++++++++++++++------
 .../PermissionedDisputeGame.sol                    | 408 +++++++++----------
 2 files changed, 507 insertions(+), 345 deletions(-)
```

Generated with discovered.json: 0x82c7136e9bdfc905df454437022015db15bf933b

# Diff at Fri, 24 Jan 2025 12:44:59 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@6d249f6bb37fd32f322f4476674a3d823378a9c4 block: 21693166
- current block number: 21694441

## Description

Moved Alchemy MS to commonAddressNames.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21693166 (main branch discovery), not current.

```diff
    contract AlchemyMultisig1 (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      name:
-        "AlchemyMultisig"
+        "AlchemyMultisig1"
    }
```

Generated with discovered.json: 0xa9f680aa52e1b8e752cea842879ef5f7d2a64d6a

# Diff at Thu, 23 Jan 2025 15:30:29 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d41ab38c1eb59c6426ed6aa100dbd9b805e5a629 block: 21343022
- current block number: 21688096

## Description

Upgrade to known op stack contracts post-OPFP. Permissioned games are the respected gameType.

## Watched changes

```diff
-   Status: DELETED
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$implementation:
-        "0x3c5bC88Fad9D35072213cD1FB5e83f9D150B3144"
+        "0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"
      values.$pastUpgrades.2:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xAE2AF01232a6c4a4d3012C5eC5b1b35059caF10d"]]
      values.$pastUpgrades.1:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"]]
      values.$upgradeCount:
-        1
+        3
      values.superchainConfig:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      values.$implementation:
-        "0xf1b86d4ec73E17AeD218153278653D0f53220776"
+        "0x64B5a5Ed26DCb17370Ff4d33a8D503f0fbD06CfF"
      values.superchainConfig:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes.1:
-        "0xdf9a11b46747139bfe0135df8a65a2728a2dbd60a689e2398c45627915cdd752"
+        "0xbbb92920a096eced30e3ce67bbc443f134b217e8847433fbb192ecb9fdddcbc2"
      values.$implementation:
-        "0x18fffcb31850795D919B6aDD4b16bEB3a5f5ECFB"
+        "0xF56D96B2535B932656d3c04Ebf51baBff241D886"
      values.$pastUpgrades.2:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xF56D96B2535B932656d3c04Ebf51baBff241D886"]]
      values.$pastUpgrades.1:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"]]
      values.$upgradeCount:
-        1
+        3
      values.L2_OUTPUT_ORACLE_SLOT:
-        "0xe52a667f71ec761b9b381c7b76ca9b852adf7e8905da0e0ad49986a0a6871815"
      values.l2OutputOracle:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
      values.version:
-        "1.12.0"
+        "2.2.0"
      values.DISPUTE_GAME_FACTORY_SLOT:
+        "0x52322a25d9f59ea17656545543306b7aef62bc0cc53a0e65ccfa0c75b97aa906"
      values.disputeGameFactory:
+        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.maximumGasLimit:
+        200000000
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$implementation:
-        "0x73A793CdcF6F0f20e14e1835Eb1462b0376727cF"
+        "0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"
      values.$pastUpgrades.1:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xE01efbeb1089D1d1dB9c6c8b135C934C0734c846"]]
      values.$upgradeCount:
-        1
+        2
    }
```

```diff
-   Status: DELETED
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3)
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
    contract AlchemyMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.8:
+        {"permission":"upgrade","from":"0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}
      receivedPermissions.7.from:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      receivedPermissions.6.from:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A"
      receivedPermissions.1.from:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
+        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
    }
```

```diff
    contract OptimismPortal2 (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame.
      name:
-        "OptimismPortal"
+        "OptimismPortal2"
      template:
-        "opstack/OptimismPortal"
+        "opstack/OptimismPortal2"
      sourceHashes.1:
-        "0x90ab8a3636fafa5cb0ab4305b2d912546ceb47ebc3abed324bfa1727a9c74acc"
+        "0x41be46bdb67af1b7af90e1bd70a1fcd31a3352282beb83b846a5189675c37ac1"
      description:
-        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
+        "The OptimismPortal contract is the main entry point to deposit funds from L1 to L2. It also allows to prove and finalize withdrawals. It specifies which game type can be used for withdrawals, which currently is the PermissionedDisputeGame."
      issuedPermissions.1:
-        {"permission":"upgrade","to":"0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}
      issuedPermissions.0.permission:
-        "guard"
+        "upgrade"
      issuedPermissions.0.to:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.0:
+        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}
      values.$implementation:
-        "0xB4BA75C87A48a233BC22678EfDa7d49CfD89ea5F"
+        "0xe2F826324b2faf99E513D16D266c3F80aE87832B"
      values.$pastUpgrades.2:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xe2F826324b2faf99E513D16D266c3F80aE87832B"]]
      values.$pastUpgrades.1:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"]]
      values.$upgradeCount:
-        1
+        3
      values.guardian:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2"
      values.l2Oracle:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
      values.superchainConfig:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
      values.version:
-        "2.6.0"
+        "3.10.0"
      values.disputeGameFactory:
+        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
      values.disputeGameFinalityDelaySeconds:
+        302400
      values.proofMaturityDelaySeconds:
+        604800
      values.RespectedGameString:
+        "PermissionedDisputeGame"
      values.respectedGameType:
+        1
      values.respectedGameTypeUpdatedAt:
+        1737641243
      displayName:
+        "OptimismPortal"
      fieldMeta:
+        {"paused":{"severity":"HIGH","description":"Whether the contract is paused or not. Determined by the SuperchainConfig contract PAUSED_SLOT. Here it pauses withdrawals. If this is paused, also the L1CrossDomainMessenger and ERC-20, ERC-721 deposits are paused."}}
      usedTypes:
+        [{"typeCaster":"Mapping","arg":{"0":"FaultDisputeGame","1":"PermissionedDisputeGame"}}]
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.8:
+        {"permission":"upgrade","from":"0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"}
      directlyReceivedPermissions.7.from:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
+        "0xD4D7A57DCC563756DeD99e224E144A6Bf0327099"
      directlyReceivedPermissions.6.from:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A"
      directlyReceivedPermissions.1.from:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
+        "0x069c4c579671f8c120b1327a73217D01Ea2EC5ea"
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$implementation:
-        "0xE187FEF3AAe13137e6062B2634cCE43B599156F6"
+        "0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"
      values.$pastUpgrades.2:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xD3494713A5cfaD3F5359379DfA074E2Ac8C6Fd65"]]
      values.$pastUpgrades.1:
+        ["2025-01-23T14:07:23.000Z","0xd769e7c27d00533eb49c0eab25c13936d9a16aa018bfeaef9309a41e7291aa39",["0xd81f43eDBCAcb4c29a9bA38a13Ee5d79278270cC"]]
      values.$upgradeCount:
-        1
+        3
      values.superchainConfig:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
+        "0x95703e0982140D16f8ebA6d158FccEde42f04a4C"
    }
```

```diff
+   Status: CREATED
    contract LivenessModule (0x0454092516c9A4d636d3CAfA1e82161376C8a748)
    +++ description: used to remove members inactive for 98d while making sure that the threshold remains above 75%. If the number of members falls below 8, the 0x847B5c174615B1B7fDF770882256e2D3E95b9D92 takes ownership of the multisig
```

```diff
+   Status: CREATED
    contract DisputeGameFactory (0x069c4c579671f8c120b1327a73217D01Ea2EC5ea)
    +++ description: The dispute game factory allows the creation of dispute games, used to propose state roots and eventually challenge them.
```

```diff
+   Status: CREATED
    contract SuperchainGuardianMultisig (0x09f7150D8c019BeF34450d6920f6B3608ceFdAf2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MIPS (0x16e83cE5Ce29BF90AD9Da06D2fE6a15d5f344ce4)
    +++ description: The MIPS contract is used to execute the final step of the dispute game which objectively determines the winner of the dispute.
```

```diff
+   Status: CREATED
    contract LivenessGuard (0x24424336F04440b1c28685a38303aC33C9D14a25)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x42d27eEA1AD6e22Af6284F609847CB3Cd56B9c64)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PermissionedDisputeGame (0x48cf980849a7eEA03180f7dea4E21C112097b03E)
    +++ description: Same as FaultDisputeGame, but only two permissioned addresses are designated as proposer and challenger.
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdmin (0x543bA4AADBAb8f9025686Bd03993043599c6fB04)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SuperchainProxyAdminOwner (0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OpFoundationUpgradeSafe (0x847B5c174615B1B7fDF770882256e2D3E95b9D92)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelayedWETH (0x8Ec1111f67Dad6b6A93B3F42DfBC92D81c98449A)
    +++ description: Contract designed to hold the bonded ETH for each game. It is designed as a wrapper around WETH to allow an owner to function as a backstop if a game would incorrectly distribute funds.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0x95703e0982140D16f8ebA6d158FccEde42f04a4C)
    +++ description: Used to manage global configuration values for multiple OP Chains within a single Superchain network. The SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the Superchain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract OpFoundationOperationsSafe (0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PreimageOracle (0x9c065e11870B891D214Bc2Da7EF1f9DDFA1BE277)
    +++ description: The PreimageOracle contract is used to load the required data from L1 for a dispute game.
```

```diff
+   Status: CREATED
    contract SecurityCouncilMultisig (0xc2819DC788505Aac350142A7A707BF9D03E3Bd03)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DeputyGuardianModule (0xc6901F65369FC59fC1B4D6D6bE7A2318Ff38dB5B)
    +++ description: allows the 0x9BA6e03D8B90dE867373Db8cF1A58d2F7F006b3A, called the deputy guardian, to act on behalf of the Gnosis Safe.
```

```diff
+   Status: CREATED
    contract AnchorStateRegistry (0xD4D7A57DCC563756DeD99e224E144A6Bf0327099)
    +++ description: Contains the latest confirmed state root that can be used as a starting point in a dispute game.
```

```diff
+   Status: CREATED
    contract Lib_AddressManager (0xdE1FCfB0851916CA5101820A69b13a4E276bd81F)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

## Source code changes

```diff
.../AnchorStateRegistry/AnchorStateRegistry.sol    |  448 +++
 .../AnchorStateRegistry}/Proxy.p.sol               |    0
 .../ethereum/.flat/DelayedWETH/DelayedWETH.sol     |  651 ++++
 .../DelayedWETH}/Proxy.p.sol                       |    0
 .../ethereum/.flat/DeputyGuardianModule.sol        |  156 +
 .../DisputeGameFactory/DisputeGameFactory.sol      | 1550 ++++++++
 .../ethereum/.flat/DisputeGameFactory/Proxy.p.sol  |  200 +
 .../ethereum/.flat/GnosisSafe/GnosisSafe.sol       |  953 +++++
 .../.flat/GnosisSafe/GnosisSafeProxy.p.sol         |   35 +
 .../L2OutputOracle/L2OutputOracle.sol => /dev/null |  679 ----
 .../ethereum/.flat/Lib_AddressManager.sol          |  152 +
 .../worldchain/ethereum/.flat/LivenessGuard.sol    |  582 +++
 .../worldchain/ethereum/.flat/LivenessModule.sol   |  258 ++
 .../worldchain/ethereum/.flat/MIPS.sol             | 1517 ++++++++
 .../OpFoundationOperationsSafe/GnosisSafe.sol      |  959 +++++
 .../.flat/OpFoundationOperationsSafe/Proxy.p.sol   |   39 +
 .../.flat/OpFoundationUpgradeSafe/GnosisSafe.sol   |  953 +++++
 .../OpFoundationUpgradeSafe/GnosisSafeProxy.p.sol  |   35 +
 .../OptimismPortal2/OptimismPortal2.sol}           |  408 +-
 .../ethereum/.flat/OptimismPortal2/Proxy.p.sol     |  200 +
 .../ethereum/.flat/PermissionedDisputeGame.sol     | 4074 ++++++++++++++++++++
 .../worldchain/ethereum/.flat/PreimageOracle.sol   | 1353 +++++++
 .../.flat/SecurityCouncilMultisig/GnosisSafe.sol   |  953 +++++
 .../SecurityCouncilMultisig/GnosisSafeProxy.p.sol  |   35 +
 .../SuperchainGuardianMultisig/GnosisSafe.sol      |  953 +++++
 .../GnosisSafeProxy.p.sol                          |   35 +
 .../ethereum/.flat/SuperchainProxyAdmin.sol        |  298 ++
 .../.flat/SuperchainProxyAdminOwner/GnosisSafe.sol |  953 +++++
 .../GnosisSafeProxy.p.sol                          |   35 +
 .../SystemConfig/SystemConfig.sol                  |   48 +-
 30 files changed, 17665 insertions(+), 847 deletions(-)
```

Generated with discovered.json: 0x0de2721f8fb9bd04800b2be778f685a4f4558d80

# Diff at Mon, 20 Jan 2025 11:10:21 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21343022
- current block number: 21343022

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21343022 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.target:
-        "0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
      issuedPermissions.1.to:
+        "0x2307278fC8aB0005974A6DeD2FA6d1187333a223"
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.to:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
      issuedPermissions.0.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.target:
-        "0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
      issuedPermissions.1.to:
+        "0xdBBE3D8c2d2b22A2611c5A94A9a12C2fCD49Eb29"
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.to:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
    }
```

```diff
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.to:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
    }
```

```diff
    contract AlchemyMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.7.target:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      receivedPermissions.7.from:
+        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      receivedPermissions.6.target:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
      receivedPermissions.6.from:
+        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
      receivedPermissions.5.target:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      receivedPermissions.5.from:
+        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      receivedPermissions.4.target:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      receivedPermissions.4.from:
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      receivedPermissions.3.target:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
      receivedPermissions.3.from:
+        "0x470458C91978D2d929704489Ad730DC3E3001113"
      receivedPermissions.2.target:
-        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      receivedPermissions.2.from:
+        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      receivedPermissions.1.target:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
      receivedPermissions.1.from:
+        "0x19A6d1E9034596196295CF148509796978343c5D"
      receivedPermissions.0.target:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
      receivedPermissions.0.from:
+        "0x5891090d5085679714cb0e62f74950a3c19146a8"
      directlyReceivedPermissions.0.target:
-        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      directlyReceivedPermissions.0.from:
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract OptimismPortal (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      issuedPermissions.0.to:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.7.target:
-        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      directlyReceivedPermissions.7.from:
+        "0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C"
      directlyReceivedPermissions.6.target:
-        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
      directlyReceivedPermissions.6.from:
+        "0xa231f8be37e583f276f93dF516D88a043bfe47E3"
      directlyReceivedPermissions.5.target:
-        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      directlyReceivedPermissions.5.from:
+        "0x82Cb528466cF22412d89bdBE9bCF04856790dD0e"
      directlyReceivedPermissions.4.target:
-        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      directlyReceivedPermissions.4.from:
+        "0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A"
      directlyReceivedPermissions.3.target:
-        "0x470458C91978D2d929704489Ad730DC3E3001113"
      directlyReceivedPermissions.3.from:
+        "0x470458C91978D2d929704489Ad730DC3E3001113"
      directlyReceivedPermissions.2.target:
-        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      directlyReceivedPermissions.2.from:
+        "0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9"
      directlyReceivedPermissions.1.target:
-        "0x19A6d1E9034596196295CF148509796978343c5D"
      directlyReceivedPermissions.1.from:
+        "0x19A6d1E9034596196295CF148509796978343c5D"
      directlyReceivedPermissions.0.target:
-        "0x5891090d5085679714cb0e62f74950a3c19146a8"
      directlyReceivedPermissions.0.from:
+        "0x5891090d5085679714cb0e62f74950a3c19146a8"
    }
```

Generated with discovered.json: 0x020cd8089540ace34d8244ea44264b354efb98bf

# Diff at Wed, 08 Jan 2025 09:08:27 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 21343022
- current block number: 21343022

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21343022 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0xe433c83297981013994bfd3c635714d66bbc7421

# Diff at Fri, 06 Dec 2024 11:02:01 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@da76f61d2c06d695d89e2429e2266a54932319a2 block: 21141719
- current block number: 21343022

## Description

External USDC escrow matches new template.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21141719 (main branch discovery), not current.

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Escrow for USDC that uses the canonical bridge for messaging but is governed externally.
      description:
-        "Custom external escrow for USDC bridged to Worldchain."
+        "Escrow for USDC that uses the canonical bridge for messaging but is governed externally."
      issuedPermissions:
-        [{"permission":"upgrade","target":"0x28fAb3A5b69711cc64B09240d2694d9F0f07eBf6","via":[]}]
      template:
+        "circle/L1OpUSDCBridgeAdapter"
    }
```

Generated with discovered.json: 0x7b7224b3c2477973744e2fdf24b3f0357f46ad74

# Diff at Fri, 08 Nov 2024 08:27:24 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@53988239f42edde0275ed92d8f3ada4279354f7d block: 21040685
- current block number: 21141719

## Description

Worldchain raises gasLimit to 150M. With 10x elasticity the block gas target is 15M. Current *daily* gas use on Worldchain is 160B, making the average block about 25% of the target.

## Watched changes

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
+++ description: Gas limit for blocks on L2.
+++ severity: LOW
      values.gasLimit:
-        100000000
+        150000000
    }
```

Generated with discovered.json: 0x1c91991f2da9d43ee585be24af56a8cc07ec5492

# Diff at Fri, 01 Nov 2024 12:24:14 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 21040685
- current block number: 21040685

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21040685 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3) {
    +++ description: This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      description:
-        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
+        "This is NOT the shared SuperchainConfig contract of the OP stack Superchain but rather a local fork. It manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

```diff
    contract AlchemyMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      receivedPermissions.3.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D) {
    +++ description: None
      directlyReceivedPermissions.3.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0xeca1df175948a5e01ae2f3f47f3f4e2e1e7677d9

# Diff at Tue, 29 Oct 2024 13:19:51 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 21040685
- current block number: 21040685

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21040685 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x94df63d6b202c679a5ef25a3acf56e3129badb8d

# Diff at Fri, 25 Oct 2024 05:58:15 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@ae2c410e7fd6561c1946613ca693d2dc0322c23d block: 20995261
- current block number: 21040685

## Description

Renamed multisig to better show control.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20995261 (main branch discovery), not current.

```diff
    contract AlchemyMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      name:
-        "WorldchainMultisig"
+        "AlchemyMultisig"
    }
```

Generated with discovered.json: 0x147615e7e246e0558fe40f76a733c1703e82eec1

# Diff at Mon, 21 Oct 2024 12:50:11 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20995261
- current block number: 20995261

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20995261 (main branch discovery), not current.

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Custom external escrow for USDC bridged to Worldchain.
      descriptions:
-        ["Custom external escrow for USDC bridged to Worldchain."]
      description:
+        "Custom external escrow for USDC bridged to Worldchain."
    }
```

```diff
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      descriptions:
-        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
      description:
+        "Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      descriptions:
-        ["Used to bridge ERC-721 tokens from host chain to this chain."]
      description:
+        "Used to bridge ERC-721 tokens from host chain to this chain."
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      descriptions:
-        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      description:
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      descriptions:
-        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
      description:
+        "Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions:
-        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      description:
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      descriptions:
-        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
      description:
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

```diff
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      descriptions:
-        ["This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."]
      description:
+        "This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system."
    }
```

```diff
    contract OptimismPortal (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      descriptions:
-        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
      description:
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      descriptions:
-        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      description:
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

Generated with discovered.json: 0x19d9efb9fec98140da6879d45ab20b6721e2d896

# Diff at Mon, 21 Oct 2024 11:12:02 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20995261
- current block number: 20995261

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20995261 (main branch discovery), not current.

```diff
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB) {
    +++ description: Custom external escrow for USDC bridged to Worldchain.
      values.$pastUpgrades.0.2:
+        ["0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"]
      values.$pastUpgrades.0.1:
-        ["0x62d45660505D7457e3ce9Cd87C0a0cf890fB38ff"]
+        "0xbcd8e7e264c743a567f2f034945e8c9d1e4d5583f9efd0dbf2d89bbefe6cfd60"
    }
```

```diff
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades.0.2:
+        ["0x714d763CB676b97fA878d452dB70d81CBCb7D228"]
      values.$pastUpgrades.0.1:
-        ["0x714d763CB676b97fA878d452dB70d81CBCb7D228"]
+        "0xa3292232e0fcebd4b2054cc04323de93e1a7b681d5ff5824df81c396ec24f38c"
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades.0.2:
+        ["0x3c5bC88Fad9D35072213cD1FB5e83f9D150B3144"]
      values.$pastUpgrades.0.1:
-        ["0x3c5bC88Fad9D35072213cD1FB5e83f9D150B3144"]
+        "0x537a94f0aa146c63d9a65519e85b55f8c276349e9b6f2457fd0eb66331214e87"
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades.0.2:
+        ["0x18fffcb31850795D919B6aDD4b16bEB3a5f5ECFB"]
      values.$pastUpgrades.0.1:
-        ["0x18fffcb31850795D919B6aDD4b16bEB3a5f5ECFB"]
+        "0x64c1939afb2e6f113ac5b917c740569ebb33001a3aa63eb912c97b1decd90f10"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades.0.2:
+        ["0x73A793CdcF6F0f20e14e1835Eb1462b0376727cF"]
      values.$pastUpgrades.0.1:
-        ["0x73A793CdcF6F0f20e14e1835Eb1462b0376727cF"]
+        "0x5acb4bebe868d4883d26a6417436d21d856a1d3bd807b6c7eb02668390208a54"
    }
```

```diff
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      values.$pastUpgrades.0.2:
+        ["0x76072B79Efc11E5C6c74A56560F8CE0B89D2966c"]
      values.$pastUpgrades.0.1:
-        ["0x76072B79Efc11E5C6c74A56560F8CE0B89D2966c"]
+        "0x1eac23e43252871e1fb140ce86cb1bd375f38aa4f38183f07b20a24cba51e26d"
    }
```

```diff
    contract OptimismPortal (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades.0.2:
+        ["0xB4BA75C87A48a233BC22678EfDa7d49CfD89ea5F"]
      values.$pastUpgrades.0.1:
-        ["0xB4BA75C87A48a233BC22678EfDa7d49CfD89ea5F"]
+        "0x9a74ce3bc48c7eeee3d5f36f4ebc628ca02aa9f392351bb4e98e06d6cf2b6044"
    }
```

```diff
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades.0.2:
+        ["0xE187FEF3AAe13137e6062B2634cCE43B599156F6"]
      values.$pastUpgrades.0.1:
-        ["0xE187FEF3AAe13137e6062B2634cCE43B599156F6"]
+        "0xe6ded05b39b296df87dfd33578f9dd897082d080120302622ba8ca158ad6bd38"
    }
```

Generated with discovered.json: 0xc086d10bc2e97164cd3bcc76f3c7fcdf70428204

# Diff at Fri, 18 Oct 2024 21:53:59 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@fa3c4b99c222d26df7f985211771efce84cdc134 block: 20986974
- current block number: 20995261

## Description

Discovery refresh, multisig updated.

## Watched changes

```diff
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.2.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.2.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0,"description":"upgrading bridge implementation allows to access all funds and change every system component."}
      issuedPermissions.0.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      issuedPermissions.0.via.0.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
    }
```

```diff
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0,"description":"set and change address mappings."}
      issuedPermissions.0.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
      issuedPermissions.0.via.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.2.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.2.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.0.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.0.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3) {
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
      issuedPermissions.1.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.1.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

```diff
    contract WorldchainMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d) {
    +++ description: None
      values.$members.5:
+        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
      values.$members.4:
+        "0x39CF304731099e756204219BF0a8cCc4738dE9dD"
      values.$members.3:
+        "0x3f0030b9Ca695Abd41b2B619F3298e172e4FCAD6"
      values.$members.2:
+        "0x2e42cEfC761e64Bf4442694220d31C2464a6EE21"
      values.$members.1:
+        "0x5EABE7f6673311EdD1Ad17A76ce148c2Bb56aF01"
      values.$members.0:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xaCEF7482b54a57F50b1CD8c99d1dC1964202A063"
      values.$threshold:
-        1
+        3
      values.multisigThreshold:
-        "1 of 1 (100%)"
+        "3 of 6 (50%)"
      receivedPermissions:
+        [{"permission":"configure","target":"0x5891090d5085679714cb0e62f74950a3c19146a8","description":"set and change address mappings.","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0x19A6d1E9034596196295CF148509796978343c5D","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0x470458C91978D2d929704489Ad730DC3E3001113","description":"upgrading bridge implementation allows to access all funds and change every system component.","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0x82Cb528466cF22412d89bdBE9bCF04856790dD0e","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0xa231f8be37e583f276f93dF516D88a043bfe47E3","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]},{"permission":"upgrade","target":"0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C","via":[{"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"}]}]
    }
```

```diff
    contract OptimismPortal (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0xB2aa0C2C4fD6BFCBF699d4c787CD6Cc0dC461a9d"
+        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
      issuedPermissions.1.via.1:
-        {"address":"0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D","delay":0}
      issuedPermissions.1.via.0.address:
-        "0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d"
+        "0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D"
    }
```

Generated with discovered.json: 0xb7286d1c7f3af58d9fea1dbc040336779a05b583

# Diff at Thu, 17 Oct 2024 18:07:57 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- current block number: 20986974

## Description

Initial discovery: OP stack with old L2OutputOracle and unused, but deployed DisputeGame contracts. Two EOA admins: One for the USDC bridge, one for the Rollup.

## Initial discovery

```diff
+   Status: CREATED
    contract L1OpUSDCBridgeAdapter (0x153A69e4bb6fEDBbAaF463CB982416316c84B2dB)
    +++ description: Custom external escrow for USDC bridged to Worldchain.
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0x19A6d1E9034596196295CF148509796978343c5D)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0x1Df436AfDb2fBB40F1fE8bEd4Fc89A0D0990a8E9)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x470458C91978D2d929704489Ad730DC3E3001113)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
```

```diff
+   Status: CREATED
    contract AddressManager (0x5891090d5085679714cb0e62f74950a3c19146a8)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract SystemConfig (0x6ab0777fD0e609CE58F939a7F70Fe41F5Aa6300A)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x82Cb528466cF22412d89bdBE9bCF04856790dD0e)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract SuperchainConfig (0xa231f8be37e583f276f93dF516D88a043bfe47E3)
    +++ description: This is NOT the shared SuperchainConfig of the OP stack Superchain. This SuperchainConfig contract manages the `PAUSED_SLOT`, a boolean value indicating whether the local chain is paused, and `GUARDIAN_SLOT`, the address of the guardian which can pause and unpause the system.
```

```diff
+   Status: CREATED
    contract WorldchainMultisig (0xA4fB12D15Eb85dc9284a7df0AdBC8B696EdbbF1d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismPortal (0xd5ec14a83B7d95BE1E2Ac12523e2dEE12Cbeea6C)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xd7405BE7f3e63b094Af6C7C23D5eE33Fd82F872D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0xf931a81D18B1766d15695ffc7c1920a62b7e710a)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```
