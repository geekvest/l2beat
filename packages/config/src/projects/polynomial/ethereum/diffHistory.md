Generated with discovered.json: 0xe1284f8474caeeb67fd9ce09f2ce7230afe257b1

# Diff at Mon, 14 Jul 2025 12:45:58 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22895948
- current block number: 22895948

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22895948 (main branch discovery), not current.

```diff
    EOA  (0x000000000000000000000000000000000000dEaD) {
    +++ description: None
      address:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
    }
```

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      address:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"
+        "eth:0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"
      values.$pastUpgrades.0.2.0:
-        "0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"
+        "eth:0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"
      values.GUARDIAN:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.L2_ORACLE:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      values.l2Sender:
-        "0x000000000000000000000000000000000000dEaD"
+        "eth:0x000000000000000000000000000000000000dEaD"
      values.SYSTEM_CONFIG:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      implementationNames.0x034cbb620d1e0e4C2E29845229bEAc57083b04eC:
-        "Proxy"
      implementationNames.0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5:
-        "OptimismPortal"
      implementationNames.eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC:
+        "Proxy"
      implementationNames.eth:0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5:
+        "OptimismPortal"
    }
```

```diff
    EOA  (0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565) {
    +++ description: None
      address:
-        "0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565"
+        "eth:0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565"
    }
```

```diff
    EOA  (0x11e2785DCc88FBD03EA71Df324CbbB0A529B88a2) {
    +++ description: None
      address:
-        "0x11e2785DCc88FBD03EA71Df324CbbB0A529B88a2"
+        "eth:0x11e2785DCc88FBD03EA71Df324CbbB0A529B88a2"
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      address:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      values.owner:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      implementationNames.0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C:
-        "AddressManager"
      implementationNames.eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C:
+        "AddressManager"
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      address:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"
+        "eth:0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"
      values.$pastUpgrades.0.2.0:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.$pastUpgrades.1.2.0:
-        "0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"
+        "eth:0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"
      values.OTHER_MESSENGER:
-        "0x4200000000000000000000000000000000000007"
+        "eth:0x4200000000000000000000000000000000000007"
      values.PORTAL:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      values.ResolvedDelegateProxy_addressManager:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      implementationNames.0x36725a5e0040deB7C697d46C0e24390702b202e0:
-        "ResolvedDelegateProxy"
      implementationNames.0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753:
-        "L1CrossDomainMessenger"
      implementationNames.eth:0x36725a5e0040deB7C697d46C0e24390702b202e0:
+        "ResolvedDelegateProxy"
      implementationNames.eth:0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753:
+        "L1CrossDomainMessenger"
    }
```

```diff
    EOA  (0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f) {
    +++ description: None
      address:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "eth:0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      address:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "eth:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0x082AAd9468e3A4b430bA7851a36367D6B471F9B8"
+        "eth:0x082AAd9468e3A4b430bA7851a36367D6B471F9B8"
      values.l2TokenBridge:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      values.messenger:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.MESSENGER:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000010"
+        "eth:0x4200000000000000000000000000000000000010"
      implementationNames.0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55:
-        "L1ChugSplashProxy"
      implementationNames.0x082AAd9468e3A4b430bA7851a36367D6B471F9B8:
-        "L1StandardBridge"
      implementationNames.eth:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55:
+        "L1ChugSplashProxy"
      implementationNames.eth:0x082AAd9468e3A4b430bA7851a36367D6B471F9B8:
+        "L1StandardBridge"
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      address:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.addressManager:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      values.owner:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      implementationNames.0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f:
-        "ProxyAdmin"
      implementationNames.eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f:
+        "ProxyAdmin"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      address:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
+        "eth:0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
      values.$members.1:
-        "0x860e06Fe384D1A3340111e7D142E02642178c053"
+        "eth:0x860e06Fe384D1A3340111e7D142E02642178c053"
      values.$members.2:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "eth:0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.$members.3:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "eth:0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.4:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "eth:0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.5:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "eth:0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.6:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "eth:0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.7:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "eth:0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.8:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "eth:0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.9:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "eth:0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.10:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "eth:0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      implementationNames.0x4a4962275DF8C60a80d3a25faEc5AA7De116A746:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe) {
    +++ description: None
      address:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "eth:0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
    }
```

```diff
    EOA  (0x50930d652266EF4127FA3A1906B7Cb9951076628) {
    +++ description: None
      address:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "eth:0x50930d652266EF4127FA3A1906B7Cb9951076628"
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      address:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0x69762714C496f76756D7aEbf8b4225F458cDf853"
+        "eth:0x69762714C496f76756D7aEbf8b4225F458cDf853"
      values.$pastUpgrades.0.2.0:
-        "0x69762714C496f76756D7aEbf8b4225F458cDf853"
+        "eth:0x69762714C496f76756D7aEbf8b4225F458cDf853"
      values.batcherHash:
-        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
+        "eth:0x67a44CE38627F46F20b1293960559eD85Dd194F1"
      values.owner:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.sequencerInbox:
-        "0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565"
+        "eth:0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565"
      values.unsafeBlockSigner:
-        "0x11e2785DCc88FBD03EA71Df324CbbB0A529B88a2"
+        "eth:0x11e2785DCc88FBD03EA71Df324CbbB0A529B88a2"
      implementationNames.0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413:
-        "Proxy"
      implementationNames.0x69762714C496f76756D7aEbf8b4225F458cDf853:
-        "SystemConfig"
      implementationNames.eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413:
+        "Proxy"
      implementationNames.eth:0x69762714C496f76756D7aEbf8b4225F458cDf853:
+        "SystemConfig"
    }
```

```diff
    EOA  (0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714) {
    +++ description: None
      address:
-        "0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
+        "eth:0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
    }
```

```diff
    EOA  (0x67a44CE38627F46F20b1293960559eD85Dd194F1) {
    +++ description: None
      address:
-        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
+        "eth:0x67a44CE38627F46F20b1293960559eD85Dd194F1"
    }
```

```diff
    EOA  (0x81175155D85377C337d92f1FA52Da166C3A4E7Ac) {
    +++ description: None
      address:
-        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
+        "eth:0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
    }
```

```diff
    EOA  (0x860e06Fe384D1A3340111e7D142E02642178c053) {
    +++ description: None
      address:
-        "0x860e06Fe384D1A3340111e7D142E02642178c053"
+        "eth:0x860e06Fe384D1A3340111e7D142E02642178c053"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      address:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "eth:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"
+        "eth:0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"
      values.$pastUpgrades.0.2.0:
-        "0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"
+        "eth:0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"
      values.BRIDGE:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "eth:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      implementationNames.0x994233366C8E11da5c525AB903c04e7AFB2915bD:
-        "Proxy"
      implementationNames.0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4:
-        "OptimismMintableERC20Factory"
      implementationNames.eth:0x994233366C8E11da5c525AB903c04e7AFB2915bD:
+        "Proxy"
      implementationNames.eth:0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4:
+        "OptimismMintableERC20Factory"
    }
```

```diff
    EOA  (0xA0737fea60F0601A192E3d2c98865A883ab0bda2) {
    +++ description: None
      address:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "eth:0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
    }
```

```diff
    EOA  (0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038) {
    +++ description: None
      address:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "eth:0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
    }
```

```diff
    EOA  (0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4) {
    +++ description: None
      address:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "eth:0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      address:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "eth:0xD5890BBAFaFdce942597757385E55174569e8d1A"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"
+        "eth:0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"
      values.$pastUpgrades.0.2.0:
-        "0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"
+        "eth:0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"
      values.messenger:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.MESSENGER:
-        "0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      values.OTHER_BRIDGE:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      values.otherBridge:
-        "0x4200000000000000000000000000000000000014"
+        "eth:0x4200000000000000000000000000000000000014"
      implementationNames.0xD5890BBAFaFdce942597757385E55174569e8d1A:
-        "Proxy"
      implementationNames.0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7:
-        "L1ERC721Bridge"
      implementationNames.eth:0xD5890BBAFaFdce942597757385E55174569e8d1A:
+        "Proxy"
      implementationNames.eth:0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7:
+        "L1ERC721Bridge"
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      address:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      values.$admin:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      values.$implementation:
-        "0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"
+        "eth:0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"
      values.$pastUpgrades.0.2.0:
-        "0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"
+        "eth:0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"
      values.CHALLENGER:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "eth:0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      values.PROPOSER:
-        "0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
+        "eth:0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
      implementationNames.0xe512D477Cc89196AF2cE837f6AB8EA30e199f757:
-        "Proxy"
      implementationNames.0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75:
-        "L2OutputOracle"
      implementationNames.eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757:
+        "Proxy"
      implementationNames.eth:0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75:
+        "L2OutputOracle"
    }
```

```diff
    EOA  (0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C) {
    +++ description: None
      address:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "eth:0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
    }
```

```diff
    EOA  (0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0) {
    +++ description: None
      address:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "eth:0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
    }
```

```diff
    EOA  (0xF3313C48BD8E17b823d5498D62F37019dFEA647D) {
    +++ description: None
      address:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "eth:0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
    }
```

```diff
+   Status: CREATED
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC)
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
```

```diff
+   Status: CREATED
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C)
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0)
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55)
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413)
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD)
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A)
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757)
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
```

Generated with discovered.json: 0xcbbd25179c061ade96d817900041deb27d142919

# Diff at Mon, 14 Jul 2025 08:02:46 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0dc82cd5064c9c6dc9fb20e2291a8bb6b2048e27 block: 22895948
- current block number: 22895948

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22895948 (main branch discovery), not current.

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa.
      description:
-        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintableERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

Generated with discovered.json: 0x74cc5cdf3cc27e58c6faaf0ca60507566d990df1

# Diff at Fri, 04 Jul 2025 12:19:15 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22615678
- current block number: 22615678

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22615678 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "eth:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "eth:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      directlyReceivedPermissions.6.from:
-        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "eth:0xD5890BBAFaFdce942597757385E55174569e8d1A"
      directlyReceivedPermissions.7.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.1.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.2.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.2.from:
-        "ethereum:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "eth:0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      receivedPermissions.3.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.4.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.4.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "eth:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.5.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.5.from:
-        "ethereum:0x36725a5e0040deB7C697d46C0e24390702b202e0"
+        "eth:0x36725a5e0040deB7C697d46C0e24390702b202e0"
      receivedPermissions.6.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.6.from:
-        "ethereum:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "eth:0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      receivedPermissions.7.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.7.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.8.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.8.from:
-        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "eth:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.9.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.9.from:
-        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "eth:0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.10.via.0.address:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      receivedPermissions.10.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
+        "eth:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
    }
```

```diff
    EOA  (0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "eth:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
    }
```

```diff
    EOA  (0x67a44CE38627F46F20b1293960559eD85Dd194F1) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "eth:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
    }
```

Generated with discovered.json: 0x9f0b70ce8ac2120abbd853d6e486d44287312fc8

# Diff at Mon, 16 Jun 2025 08:42:41 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e1208475abce20cea1768d2e4878c03350c1b7c9 block: 22615678
- current block number: 22615678

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22615678 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$admin:
+        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.7:
+        {"permission":"upgrade","from":"ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413","role":"admin"}
      directlyReceivedPermissions.6.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
      directlyReceivedPermissions.4.from:
-        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      directlyReceivedPermissions.3.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "ethereum:0x36725a5e0040deB7C697d46C0e24390702b202e0"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.10:
+        {"permission":"upgrade","from":"ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413","role":"admin","via":[{"address":"ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}
      receivedPermissions.9.from:
-        "ethereum:0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.8.from:
-        "ethereum:0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.7.permission:
-        "upgrade"
+        "guard"
      receivedPermissions.7.from:
-        "ethereum:0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.7.role:
-        "admin"
+        ".GUARDIAN"
      receivedPermissions.7.via:
-        [{"address":"ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.6.permission:
-        "guard"
+        "upgrade"
      receivedPermissions.6.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.6.role:
-        ".GUARDIAN"
+        "admin"
      receivedPermissions.6.via:
+        [{"address":"ethereum:0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.5.from:
-        "ethereum:0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.4.from:
-        "ethereum:0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "ethereum:0x36725a5e0040deB7C697d46C0e24390702b202e0"
    }
```

Generated with discovered.json: 0xfdfd708eb52c09aec617e336b770fa9e7714af02

# Diff at Mon, 02 Jun 2025 08:02:06 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2fee84b782a329885c84742cf9cf43143842a2d5 block: 22046074
- current block number: 22615678

## Description

conduit ms signer change.

## Watched changes

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.10:
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.9:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.8:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.7:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.6:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0x81175155D85377C337d92f1FA52Da166C3A4E7Ac"
      values.multisigThreshold:
-        "4 of 10 (40%)"
+        "4 of 11 (36%)"
    }
```

Generated with discovered.json: 0xda8733eb03a1d95163f7407d8612482a0e6c748e

# Diff at Fri, 30 May 2025 07:12:10 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a4d8c436027d17df0f9b76843cd6deb1888fa381 block: 22046074
- current block number: 22046074

## Description

config: change comment about eip1559 fee val

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046074 (main branch discovery), not current.

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      fieldMeta.eip1559Denominator:
+        {"description":"volatility param: lower denominator -> quicker fee changes on L2"}
    }
```

Generated with discovered.json: 0xa5107f363f7833b0a07a44ef1013d356ed4da480

# Diff at Fri, 23 May 2025 09:41:02 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22046074
- current block number: 22046074

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046074 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.6.role:
+        "admin"
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".$admin"
    }
```

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.9.role:
+        ".GUARDIAN"
      receivedPermissions.8.permission:
-        "interact"
+        "upgrade"
      receivedPermissions.8.description:
-        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.8.role:
+        "admin"
      receivedPermissions.8.via:
+        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.7.from:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.from:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.from:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.permission:
-        "challenge"
+        "upgrade"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.4.via:
+        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.3.permission:
-        "upgrade"
+        "interact"
      receivedPermissions.3.from:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.3.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.3.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.3.role:
+        ".owner"
      receivedPermissions.2.permission:
-        "upgrade"
+        "challenge"
      receivedPermissions.2.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.2.role:
+        ".CHALLENGER"
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".$admin"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    EOA  (0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714) {
    +++ description: None
      receivedPermissions.0.role:
+        ".PROPOSER"
    }
```

```diff
    EOA  (0x67a44CE38627F46F20b1293960559eD85Dd194F1) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batcherHash"
    }
```

Generated with discovered.json: 0x3d5657196566d4b1c92a508535ca9a65f8bab689

# Diff at Tue, 29 Apr 2025 08:19:09 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22046074
- current block number: 22046074

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046074 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions:
-        [{"permission":"guard","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[]},{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions:
-        [{"permission":"interact","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","description":"set and change address mappings.","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","description":"upgrading the bridge implementation can give access to all funds escrowed therein.","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions:
-        [{"permission":"interact","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","description":"it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system.","via":[]},{"permission":"sequence","to":"0x67a44CE38627F46F20b1293960559eD85Dd194F1","via":[]},{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions:
-        [{"permission":"challenge","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[]},{"permission":"propose","to":"0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714","via":[]},{"permission":"upgrade","to":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}]
    }
```

Generated with discovered.json: 0x210d85a7e40c58451713628fdfb7a2a306bf7e20

# Diff at Thu, 27 Mar 2025 11:14:55 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8cc2e36080df3a74dfd8475d41c64f46203f5218 block: 22046074
- current block number: 22046074

## Description

Config related: add guardian description details, hide some noisy values, hide AddressManager as spam cat, add proposer / challenger to permissioned opfp chains.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046074 (main branch discovery), not current.

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      category:
+        {"name":"Spam","priority":-1}
    }
```

Generated with discovered.json: 0x9056e417079aa35647e5a185dbe2a6925ecc07e1

# Diff at Tue, 18 Mar 2025 08:13:36 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@4ef7a8dbcec1cd9fec77aae2b73d81347a4ffb13 block: 22046074
- current block number: 22046074

## Description

Config: change Multisig names.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22046074 (main branch discovery), not current.

```diff
    contract Conduit Multisig 1 (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      name:
-        "ConduitMultisig"
+        "Conduit Multisig 1"
    }
```

Generated with discovered.json: 0x890c28ac69fe4006011013ba924c4862dbce99ee

# Diff at Fri, 14 Mar 2025 15:41:30 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@002bac09dea3b1154ecc36736323fb7552478ce4 block: 21637083
- current block number: 22046074

## Description

Conduit MS changes.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.9:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.8:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.7:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.6:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.5:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.4:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.3:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.2:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.1:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.$members.0:
-        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
+        "0x860e06Fe384D1A3340111e7D142E02642178c053"
      values.multisigThreshold:
-        "4 of 9 (44%)"
+        "4 of 10 (40%)"
    }
```

Generated with discovered.json: 0xa310b626d5fdf5ed0d018379e5c9f124dddc1871

# Diff at Tue, 04 Mar 2025 11:26:10 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@be38e12d3ff947ca8de40f3a23a9ba1875a54f5a block: 21637083
- current block number: 21637083

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isSomeTxsLengthEqualToCelestiaDAExample:
-        false
      values.opStackDA.isUsingCelestia:
+        false
    }
```

Generated with discovered.json: 0x56078e2c69ebccefe7d8500da988c02544a4f6c5

# Diff at Tue, 04 Mar 2025 10:39:39 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21637083
- current block number: 21637083

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sinceBlock:
+        20062740
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sinceBlock:
+        20062740
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sinceBlock:
+        20062740
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      sinceBlock:
+        20062740
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      sinceBlock:
+        20062740
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      sinceBlock:
+        16990669
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sinceBlock:
+        20062740
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sinceBlock:
+        20062740
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sinceBlock:
+        20062740
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sinceBlock:
+        20062740
    }
```

Generated with discovered.json: 0x7799def72515a1cfef728ab018d2429751196a30

# Diff at Wed, 26 Feb 2025 10:32:58 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@18513668f913fbe57a197f43655b19111df0e627 block: 21637083
- current block number: 21637083

## Description

config related: added categories for all opstack, op stack and polygoncdk stack templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      category:
+        {"name":"Canonical Bridges","priority":2}
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      category:
+        {"name":"Local Infrastructure","priority":5}
    }
```

Generated with discovered.json: 0x0fc3fe221194a13ce3ff6e4b80cf8d3035f4b2e7

# Diff at Fri, 21 Feb 2025 14:10:03 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d219f271711b2cf7a164e3443bead5e4957d13a8 block: 21637083
- current block number: 21637083

## Description

Config related: Change some severities and add templates.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta.proposer:
+        {"severity":"HIGH"}
      fieldMeta.challenger:
+        {"severity":"HIGH"}
      fieldMeta.deletedOutputs:
+        {"severity":"HIGH"}
    }
```

Generated with discovered.json: 0xb0e93745abbf0a94760d69df29f6fa87686e4c24

# Diff at Fri, 21 Feb 2025 08:59:56 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1cf9ec35847912163c4b663a633e258a434c0bca block: 21637083
- current block number: 21637083

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      categories:
-        ["Core"]
    }
```

Generated with discovered.json: 0x8a008485106defa8b655860a3423ae8bbeb225f9

# Diff at Mon, 10 Feb 2025 19:04:27 GMT:

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3756adff7c1ac86d8af3374a90a75c1999aae2b3 block: 21637083
- current block number: 21637083

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.opStackDA.isUsingEigenDA:
+        false
    }
```

Generated with discovered.json: 0xc8ce0dd3adfb802852803412282b08172b30e068

# Diff at Tue, 04 Feb 2025 12:31:53 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21637083
- current block number: 21637083

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.3.permission:
-        "guard"
+        "interact"
      receivedPermissions.3.from:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.3.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.2.permission:
-        "configure"
+        "interact"
      receivedPermissions.2.from:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      receivedPermissions.2.description:
-        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
+        "set and change address mappings."
      receivedPermissions.2.via:
+        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.1.permission:
-        "configure"
+        "guard"
      receivedPermissions.1.from:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.1.description:
-        "set and change address mappings."
      receivedPermissions.1.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0x2d2bcf7a32542a25614b50e78c13fb4c0e49b7b5

# Diff at Mon, 20 Jan 2025 11:09:55 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21637083
- current block number: 21637083

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21637083 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.via.0.delay:
-        0
      issuedPermissions.1.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "set and change address mappings."
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.via.0.description:
-        "upgrading the bridge implementation can give access to all funds escrowed therein."
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.description:
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.6.target:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      directlyReceivedPermissions.6.from:
+        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      directlyReceivedPermissions.5.target:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      directlyReceivedPermissions.5.from:
+        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      directlyReceivedPermissions.4.target:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      directlyReceivedPermissions.4.from:
+        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      directlyReceivedPermissions.3.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      directlyReceivedPermissions.3.from:
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      directlyReceivedPermissions.2.target:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      directlyReceivedPermissions.2.from:
+        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      directlyReceivedPermissions.1.target:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      directlyReceivedPermissions.1.from:
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      directlyReceivedPermissions.0.target:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      directlyReceivedPermissions.0.from:
+        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.9.target:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.9.from:
+        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.8.target:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.8.from:
+        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.7.target:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.7.from:
+        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.6.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.6.from:
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.5.target:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      receivedPermissions.5.from:
+        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      receivedPermissions.4.target:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.4.from:
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.3.target:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.3.from:
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.2.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.2.from:
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.1.target:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      receivedPermissions.1.from:
+        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      receivedPermissions.0.target:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.0.from:
+        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      directlyReceivedPermissions.0.target:
-        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
      directlyReceivedPermissions.0.from:
+        "0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.target:
-        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
      issuedPermissions.1.to:
+        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.via.0.delay:
-        0
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.2.via.0.delay:
-        0
      issuedPermissions.2.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.1.target:
-        "0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
      issuedPermissions.1.to:
+        "0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714"
      issuedPermissions.0.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
      issuedPermissions.0.to:
+        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
    }
```

Generated with discovered.json: 0x90115d93e0e02589b8eb70911a55436770d3794c

# Diff at Thu, 16 Jan 2025 12:36:54 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b471de2d691e0c6d99ad89859efde79edd3d4dfb block: 21078675
- current block number: 21637083

## Description

ConduitMultisig signer changes.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.8:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.7:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.6:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.5:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.4:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.3:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.2:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.1:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.$members.0:
-        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
+        "0x50930d652266EF4127FA3A1906B7Cb9951076628"
      values.multisigThreshold:
-        "4 of 8 (50%)"
+        "4 of 9 (44%)"
    }
```

Generated with discovered.json: 0xd9f131009e6a4bacb1cb60f29aaa03cbe6a2d633

# Diff at Wed, 08 Jan 2025 09:05:22 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@deefa974378c2cd6b74f061e1f5a494bbbe1d63a block: 21078675
- current block number: 21078675

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078675 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain.
      description:
-        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
+        "The main entry point to deposit ERC20 tokens from host chain to this chain."
    }
```

Generated with discovered.json: 0xdbd046e69cd57dfd09e820644f0796bc047fa024

# Diff at Fri, 01 Nov 2024 12:10:20 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@cd1f0e71bb08ce16b2084a11b768538e8aa6ba8c block: 21078675
- current block number: 21078675

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21078675 (main branch discovery), not current.

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.2.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.5.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
+        "upgrading the bridge implementation can give access to all funds escrowed therein."
    }
```

Generated with discovered.json: 0xa9f8cc8e5ec6fbe7fe5f0396bb51b428094a068d

# Diff at Wed, 30 Oct 2024 13:12:28 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@0a8a53530022c6c5edd257c3682a3e7f80d0c550 block: 20769371
- current block number: 21078675

## Description

Conduit MS: Signer added.

## Watched changes

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      values.$members.7:
+        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
      values.$members.6:
-        "0x4D8007a0E9f293e62E2b0F43C6Cf4C4B9e135BAe"
+        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
      values.$members.5:
-        "0xefCf0c8faFB425997870f845e26fC6cA6EE6dD5C"
+        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
      values.$members.4:
-        "0xa0C600a6e85bf225958FFAcC70B5FDDF9A059038"
+        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
      values.$members.3:
-        "0x3840f487A17A41100DD1Bf0946c34f132a57Fd5f"
+        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
      values.$members.2:
-        "0xa4000bDD2bB92ce6750b31F1eeda47Bd1cB8e6e4"
+        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
      values.$members.1:
-        "0xF0B77EaE7F2dabCC2571c7418406A0dCA3afA4f0"
+        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
      values.$members.0:
-        "0xF3313C48BD8E17b823d5498D62F37019dFEA647D"
+        "0xA0737fea60F0601A192E3d2c98865A883ab0bda2"
      values.multisigThreshold:
-        "4 of 7 (57%)"
+        "4 of 8 (50%)"
    }
```

Generated with discovered.json: 0xf1a9c2cfa4d9f4311267754c910ea07ebc49fa3f

# Diff at Tue, 29 Oct 2024 13:15:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@7b3fc9dc9074e1d423b48522c3f0273c86aab54a block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      fieldMeta:
+        {"FINALIZATION_PERIOD_SECONDS":{"description":"Challenge period (Number of seconds until a state root is finalized)."}}
    }
```

Generated with discovered.json: 0x258c6375643bb22319a4536e64e745425cdf8dfd

# Diff at Mon, 21 Oct 2024 12:47:26 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      descriptions:
-        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
      description:
+        "The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      descriptions:
-        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
      description:
+        "Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      descriptions:
-        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      description:
+        "Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      descriptions:
-        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
      description:
+        "The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      descriptions:
-        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      description:
+        "Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      descriptions:
-        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
      description:
+        "A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      descriptions:
-        ["Used to bridge ERC-721 tokens from host chain to this chain."]
      description:
+        "Used to bridge ERC-721 tokens from host chain to this chain."
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      descriptions:
-        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
      description:
+        "Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."
    }
```

Generated with discovered.json: 0x4a614b8a6b55ef6e3b89ce0c39afdec6149e8c26

# Diff at Mon, 21 Oct 2024 11:09:11 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades.0.2:
+        ["0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"]
      values.$pastUpgrades.0.1:
-        ["0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"]
+        "0xf12791da1d11a2b87575774a027826957ad4adba2d002ca0c89e7ee1118f5e89"
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades.1.2:
+        ["0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"]
      values.$pastUpgrades.1.1:
-        ["0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"]
+        "0xaf64e93b029c67311d29035141e9de4f69458cfee2a9c4a6ba55a31e2599a130"
      values.$pastUpgrades.0.2:
+        ["0x36725a5e0040deB7C697d46C0e24390702b202e0"]
      values.$pastUpgrades.0.1:
-        ["0x36725a5e0040deB7C697d46C0e24390702b202e0"]
+        "0x0803101449ba74f109136ceb6201506711153e210e093ee344d4f05f6e5b210e"
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades.0.2:
+        ["0x69762714C496f76756D7aEbf8b4225F458cDf853"]
      values.$pastUpgrades.0.1:
-        ["0x69762714C496f76756D7aEbf8b4225F458cDf853"]
+        "0x245f6f1b228887468a7cff0a36d5abe87fbda0b4895755d418b08c2c68d1c815"
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades.0.2:
+        ["0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"]
      values.$pastUpgrades.0.1:
-        ["0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"]
+        "0x0432275b8939313183d44f7fe9bc2554891ba7563d67204cbe3b6315feee30d3"
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades.0.2:
+        ["0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"]
      values.$pastUpgrades.0.1:
-        ["0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"]
+        "0xeca62b15210fcd18a1148b0c731bf7b125bcd3942fa55a1214e3adf5d58b204a"
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades.0.2:
+        ["0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"]
      values.$pastUpgrades.0.1:
-        ["0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"]
+        "0x0dc8e21d46c383b8cfdfd27ccd8fab7bb8943c329ebb2464d67752ce68e93dad"
    }
```

Generated with discovered.json: 0xa3715b5f52e78ddefcbe7814ba9fb08083cf4682

# Diff at Wed, 16 Oct 2024 11:39:19 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a3d139b799cc0b28e5e912febb17464d4e5aef5d block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "guard"
      issuedPermissions.0.via.0:
-        {"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      roles:
-        ["Challenger","Guardian"]
      receivedPermissions.9:
+        {"permission":"upgrade","target":"0xe512D477Cc89196AF2cE837f6AB8EA30e199f757","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}
      receivedPermissions.8:
+        {"permission":"upgrade","target":"0xD5890BBAFaFdce942597757385E55174569e8d1A","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}
      receivedPermissions.7.target:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.6.target:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.5.target:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      receivedPermissions.5.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
      receivedPermissions.4.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.3.permission:
-        "upgrade"
+        "guard"
      receivedPermissions.3.target:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.3.description:
-        "upgrading bridge implementation allows to access all funds and change every system component."
      receivedPermissions.3.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.2.permission:
-        "upgrade"
+        "configure"
      receivedPermissions.2.target:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.2.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.2.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      receivedPermissions.1.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
      receivedPermissions.1.description:
-        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
+        "set and change address mappings."
      receivedPermissions.1.via:
+        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.0.permission:
-        "configure"
+        "challenge"
      receivedPermissions.0.target:
-        "0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C"
+        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
      receivedPermissions.0.description:
-        "set and change address mappings."
      receivedPermissions.0.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}]}
      issuedPermissions.1.permission:
-        "upgrade"
+        "sequence"
      issuedPermissions.1.target:
-        "0x4a4962275DF8C60a80d3a25faEc5AA7De116A746"
+        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
      issuedPermissions.1.via.0:
-        {"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      issuedPermissions.2:
+        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}]}
      issuedPermissions.1:
+        {"permission":"propose","target":"0x5DA28F0186051a9F7b9eE2553FFdc165EB0A6714","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "challenge"
      issuedPermissions.0.via.0:
-        {"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}
    }
```

Generated with discovered.json: 0xe19367e92719985ccbeb09ef903db10b4fcdd642

# Diff at Mon, 14 Oct 2024 10:54:31 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0xd7fe53899c31d6d8e73b6724694736dc3c3c4ebc8f4ddbe989fe9d3dba26692d"]
    }
```

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      sourceHashes:
+        ["0xdc86a850f11dc2b5c0472a05d0e3c14f239baf2c3b1ab19631591b0827985380"]
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      sourceHashes:
+        ["0x20a2eb4d3677fc8a15e944f7b1843acd01b2e92acdc4c7a7f7a35b07b891149b","0xebfb36a18bcaa176678925149b43fdc5f9f943d98a6405ae1cbc26f4c168ff88"]
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      sourceHashes:
+        ["0xbfb58685ff2f2f07eaa01a3c4e3c33c97686bfd3ae7c50c49f9da6ef5098cb31","0x79abdbd90460fe2ac0535b5cb7b4c45284322b49a0a090d1c509cdaf35dbc87e"]
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      template:
-        "opstack/ProxyAdmin"
+        "global/ProxyAdmin"
      sourceHashes:
+        ["0x96d2f0fa1bd83ebd61ba6a2351c64c7fda7aa580b11ea67bb6bf4338e5c28512"]
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0x29908eb7685943ff431cd384af851ce36a30997bbad880f9b4385bfc3abb86a2"]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0xc8aea1ad75944084aeb3dc8b5c63135af405055da6baaffde3ed51e92c91e2eb"]
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0x95c690f70db8f82a05347087d704333c180048757ff015d74a5b186c1b6b24ab"]
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      sourceHashes:
+        ["0x2cdcfef705094aaac53d507bad64d27b48ea5a9c11a7fadffacc192aab7a823f","0xcca8986d0789aa489ba57cd234e886bd92cb5a0d477e1f5ae5e6e030e15fb183"]
    }
```

Generated with discovered.json: 0x2ecd519f5503cd771ac3d9c92569063324b2e95c

# Diff at Wed, 09 Oct 2024 13:10:29 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@37683e2b3d0587372f886eef49e921277810c8bf block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C) {
    +++ description: Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts.
      issuedPermissions.0.via.0.description:
+        "set and change address mappings."
      descriptions:
+        ["Legacy contract used to manage a mapping of string names to addresses. Modern OP stack uses a different standard proxy system instead, but this contract is still necessary for backwards compatibility with several older contracts."]
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.0.description:
+        "set and change address mappings."
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.0.description:
+        "set and change address mappings."
    }
```

Generated with discovered.json: 0x1629d1eb875b16a698b94a9c9df55514a4e61ac8

# Diff at Tue, 01 Oct 2024 10:54:19 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20769371
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20769371 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.$pastUpgrades:
+        [["2024-06-10T16:52:23.000Z",["0xCd0A8dc59685AF52cb706d73ab455FcA18eDC1D5"]]]
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      values.$pastUpgrades:
+        [["2024-06-10T16:51:47.000Z",["0x36725a5e0040deB7C697d46C0e24390702b202e0"]],["2024-06-10T16:52:11.000Z",["0xEC097D3f3319F2A23aa82ee2e28d30FdCBe0d753"]]]
      values.$upgradeCount:
+        2
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      values.$pastUpgrades:
+        []
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      values.$pastUpgrades:
+        [["2024-06-10T16:52:11.000Z",["0x69762714C496f76756D7aEbf8b4225F458cDf853"]]]
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      values.$pastUpgrades:
+        [["2024-06-10T16:52:11.000Z",["0xCfB1b01c002Ab32859Dac851e7928B405dF8adE4"]]]
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      values.$pastUpgrades:
+        [["2024-06-10T16:52:11.000Z",["0x8D703A1eE5925D783aAbaFe2FC551A1cC62Bc5F7"]]]
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.$pastUpgrades:
+        [["2024-06-10T16:52:11.000Z",["0xc2341b9265f7bDa95dc5c04cCB6A9801da7cBF75"]]]
    }
```

Generated with discovered.json: 0xe732c41005d13680a0be8b672da759d9ed6acec6

# Diff at Tue, 17 Sep 2024 09:16:23 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- comparing to: main@a17234c1dfeb209a9842df2b454c07e2b8da435d block: 20763108
- current block number: 20769371

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20763108 (main branch discovery), not current.

```diff
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC) {
    +++ description: The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals.
      values.isOutputFinalized:
-        [true,true,true,true,true]
      errors:
-        {"isOutputFinalized":"Too many values. Update configuration to explore fully"}
      template:
+        "opstack/OptimismPortal"
      descriptions:
+        ["The main entry point to deposit funds from host chain to this chain. It also allows to prove and finalize withdrawals."]
    }
```

```diff
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0) {
    +++ description: Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function.
      errors:
-        {"xDomainMessageSender":"Execution reverted"}
      template:
+        "opstack/L1CrossDomainMessenger"
      descriptions:
+        ["Sends messages from host chain to this chain, and relays messages back onto host chain. In the event that a message sent from host chain to this chain is rejected for exceeding this chain's epoch gas limit, it can be resubmitted via this contract's replay function."]
      categories:
+        ["Core"]
    }
```

```diff
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55) {
    +++ description: The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token.
      issuedPermissions.0.via.0.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
      template:
+        "opstack/L1StandardBridge"
      descriptions:
+        ["The main entry point to deposit ERC20 tokens from host chain to this chain. This contract can store any token."]
    }
```

```diff
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f) {
    +++ description: None
      directlyReceivedPermissions.2.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
    }
```

```diff
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746) {
    +++ description: None
      receivedPermissions.7:
+        {"permission":"upgrade","target":"0xe512D477Cc89196AF2cE837f6AB8EA30e199f757","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]}
      receivedPermissions.6.target:
-        "0xe512D477Cc89196AF2cE837f6AB8EA30e199f757"
+        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
      receivedPermissions.5.target:
-        "0xD5890BBAFaFdce942597757385E55174569e8d1A"
+        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
      receivedPermissions.4.target:
-        "0x994233366C8E11da5c525AB903c04e7AFB2915bD"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.3.target:
-        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
+        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
      receivedPermissions.3.description:
+        "upgrading bridge implementation allows to access all funds and change every system component."
      receivedPermissions.2.target:
-        "0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55"
+        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
      receivedPermissions.1.permission:
-        "upgrade"
+        "configure"
      receivedPermissions.1.target:
-        "0x034cbb620d1e0e4C2E29845229bEAc57083b04eC"
+        "0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413"
      receivedPermissions.1.via:
-        [{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f"}]
      receivedPermissions.1.description:
+        "it can update the preconfer address, the batch submitter (Sequencer) address and the gas configuration of the system."
      roles:
+        ["Challenger","Guardian"]
    }
```

```diff
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413) {
    +++ description: Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address.
      issuedPermissions.1:
+        {"permission":"upgrade","target":"0x4a4962275DF8C60a80d3a25faEc5AA7De116A746","via":[{"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.via.0:
-        {"address":"0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f","delay":0}
      values.batcherHash:
-        "0x00000000000000000000000067a44ce38627f46f20b1293960559ed85dd194f1"
+        "0x67a44CE38627F46F20b1293960559eD85Dd194F1"
      values.opStackDA:
+        {"isSomeTxsLengthEqualToCelestiaDAExample":false,"isSequencerSendingBlobTx":true}
      values.sequencerInbox:
+        "0x0bd57e83B5E0f9eCD84d559bB58e1EcFEEdD2565"
      template:
+        "opstack/SystemConfig"
      descriptions:
+        ["Contains configuration parameters such as the Sequencer address, gas limit on this chain and the unsafe block signer address."]
      fieldMeta:
+        {"gasLimit":{"severity":"LOW","description":"Gas limit for blocks on L2."}}
    }
```

```diff
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD) {
    +++ description: A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa.
      template:
+        "opstack/OptimismMintableERC20Factory"
      descriptions:
+        ["A helper contract that generates OptimismMintableERC20 contracts on the network it's deployed to. OptimismMintableERC20 is a standard extension of the base ERC20 token contract designed to allow the L1StandardBridge contracts to mint and burn tokens. This makes it possible to use an OptimismMintablERC20 as this chain's representation of a token on the host chain, or vice-versa."]
    }
```

```diff
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A) {
    +++ description: Used to bridge ERC-721 tokens from host chain to this chain.
      template:
+        "opstack/L1ERC721Bridge"
      descriptions:
+        ["Used to bridge ERC-721 tokens from host chain to this chain."]
    }
```

```diff
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757) {
    +++ description: Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots.
      values.computeL2Timestamp:
-        [1718038175,1718038177,1718038179,1718038181,1718038183]
      values.getL2Output:
-        [["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600],["0x6465a694427255c2b050c7e23e5dc5f2f7699b240fd528c00126aacdf05cba6a",1718126003,43200],["0x4a75d83bd6fa9fc7d44853068df4343da2e9bbb29a0070e59b953307cf3cbf7d",1718168831,64800],["0xbc63ab459a16db55318a7894bd6e9db653121850f752dcf2efabfd7e496fe1df",1718212223,86400],["0xd38b96f0e5f57276188034e83bdd2c0b39390e110da3715030be1dd473e44f01",1718255615,108000]]
      values.getL2OutputAfter:
-        [["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600],["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600],["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600],["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600],["0x9d276fdeed19e04a61bc15552d5823349217ddf84a721e0a284dc6ca864210ef",1718082995,21600]]
      values.getL2OutputIndexAfter:
-        [0,0,0,0,0]
      values.deletedOutputs:
+        []
      errors:
-        {"computeL2Timestamp":"Too many values. Update configuration to explore fully","getL2Output":"Too many values. Update configuration to explore fully","getL2OutputAfter":"Too many values. Update configuration to explore fully","getL2OutputIndexAfter":"Too many values. Update configuration to explore fully"}
      template:
+        "opstack/L2OutputOracle"
      descriptions:
+        ["Contains a list of proposed state roots which Proposers assert to be a result of block execution. Currently only the PROPOSER address can submit new state roots."]
    }
```

Generated with discovered.json: 0x05e0773e2a68c8d9d3fbe9380c4598dd0064b335

# Diff at Mon, 16 Sep 2024 12:23:13 GMT:

- author: Luca Donno (<donnoh99@gmail.com>)
- current block number: 20763108

## Description

Provide description of changes. This section will be preserved.

## Initial discovery

```diff
+   Status: CREATED
    contract OptimismPortal (0x034cbb620d1e0e4C2E29845229bEAc57083b04eC)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AddressManager (0x287bBa8116F2fc5a642bfD6027EBf5AD6522655C)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1CrossDomainMessenger (0x36725a5e0040deB7C697d46C0e24390702b202e0)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1StandardBridge (0x3Be64BF2b9C2dE637067C7AAb6baE5EDf9fEBA55)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x3c68b1d45f4faa4F028c3DC8910fA3247c7f0a1f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ConduitMultisig (0x4a4962275DF8C60a80d3a25faEc5AA7De116A746)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SystemConfig (0x58b51fb9FeeD00DD846f91D265Eba3cdd855A413)
    +++ description: None
```

```diff
+   Status: CREATED
    contract OptimismMintableERC20Factory (0x994233366C8E11da5c525AB903c04e7AFB2915bD)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1ERC721Bridge (0xD5890BBAFaFdce942597757385E55174569e8d1A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L2OutputOracle (0xe512D477Cc89196AF2cE837f6AB8EA30e199f757)
    +++ description: None
```
